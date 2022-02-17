import nodemailer from "nodemailer";

const sendEmail = (x) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zoommer525@gmail.com",
      pass: "zoommer525zoommer525!",
    },
  });

  const options = {
    from: "zoommer614@gmail.com",
    to: x.to,
    subject: x.subject,
    html: x.text,
  };
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(info);
    }
  });
};

export default sendEmail;
