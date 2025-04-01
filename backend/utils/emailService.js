const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const sendEmail = async (options) => {
    const mailOptions = {
        from: process.env.SMTP_FROM,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;