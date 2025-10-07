const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./password.env" });

const app = express();
app.use(cors({ origin: "https://keanumtei.netlify.app" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_PASS,
  },
});

transporter.verify((error) => {
  if (error) console.error("❌ SendGrid not ready:", error);
  else console.log("✅ SendGrid ready to send");
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: email,
    to: process.env.SENDGRID_TO,
    subject: "Portfolio Contact Form",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mail);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ SendGrid error:", err);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
