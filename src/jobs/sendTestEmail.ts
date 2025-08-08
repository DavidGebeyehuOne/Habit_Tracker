import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendTestEmail() {
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: 'b44560614@gmail.com',
    subject: 'HabitTracker: Test Email',
    text: 'This is a test email from your HabitTracker app. If you received this, your email setup works!'
  });
  console.log('Test email sent to b44560614@gmail.com');
}

sendTestEmail().catch(console.error);