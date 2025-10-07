const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./password.env" }); 

const app = express();

app.use(cors({
  origin: "https://keanumtei.netlify.app" 
}));
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

contactEmail.verify((error) => {
  if (error) console.log("❌ Nodemailer error:", error);
  else console.log("✅ Nodemailer ready to send emails");
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await contactEmail.sendMail(mail);
    console.log("✅ Email sent:", info.response);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));