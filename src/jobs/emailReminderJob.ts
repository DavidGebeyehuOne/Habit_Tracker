import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';
import { CronJob } from 'cron';
import { DateTime } from 'luxon';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendReminderEmail(email: string, name: string) {
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'HabitTracker: Daily Habit Reminder',
    text: `Hi ${name || ''},\n\nThis is your daily reminder to check your habits!\n\n- HabitTracker Team`,
  });
}

async function checkAndSendReminders() {
  const users = await prisma.userSettings.findMany({
    where: { emailReminders: true },
    include: { user: true },
  });

  for (const settings of users) {
    const now = DateTime.now().setZone(settings.timezone || 'UTC');
    const [reminderHour, reminderMinute] = settings.reminderTime.split(':').map(Number);
    if (now.hour === reminderHour && now.minute === reminderMinute) {
      await sendReminderEmail(settings.user.email, settings.user.name || '');
      console.log(`Sent reminder to ${settings.user.email} at ${now.toISO()} (${settings.timezone})`);
    }
  }
}

// Run every minute
const job = new CronJob('* * * * *', checkAndSendReminders, null, true);

console.log('Email reminder cron job started.');