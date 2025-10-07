const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config({ path: "./password.env" });

const app = express();
app.use(cors({ origin: "https://keanumtei.netlify.app" }));
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_PASS);

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  const msg = {
    to: process.env.SENDGRID_TO,
    from: process.env.SENDGRID_TO,
    subject: "Portfolio Contact Form",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ SendGrid API error:", err);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
