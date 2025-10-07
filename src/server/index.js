const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./password.env" });

const app = express();

app.use(cors({ origin: "https://keanumtei.netlify.app" }));
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) console.log("❌", error);
  else console.log("✅ Ready to send emails!");
});

app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("❌ Email error:", error);
      return res.status(500).json({ success: false, message: "Failed to send email." });
    }
    console.log("✅ Email sent:", info.response);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
