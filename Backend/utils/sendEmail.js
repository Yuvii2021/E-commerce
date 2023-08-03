const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    // service: process.env.SMPT_SERVICE,
    secure:true,
    auth: {
      user: "yuvrana9998@gmail.com",
      pass: "",
    },
  });
  console.log(options, transporter);
  const mailOptions = {
    from: "yuvrana9998@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(info.accepted);
  console.log(info.rejected);
};

module.exports = sendEmail;