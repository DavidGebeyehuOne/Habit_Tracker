# Gmail Email Setup Guide for OTP Functionality

## Gmail SMTP Setup (Required)

The OTP system now sends verification codes via Gmail only. Follow these steps to set up:

### 1. Enable 2-Factor Authentication on Gmail
1. Go to your Google Account settings
2. Navigate to Security
3. Enable "2-Step Verification"

### 2. Generate App Password
1. In Google Account settings, go to Security
2. Find "App passwords" (under 2-Step Verification)
3. Select "Mail" and "Other (Custom name)"
4. Name it "HabitTracker"
5. Copy the generated 16-character password

### 3. Environment Variables
Create or update your `.env.local` file in the project root:

```env
# Gmail Configuration
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

### 4. Important Notes
- **Only Gmail addresses** are supported for OTP
- **App password is required** - regular Gmail password won't work
- **2FA must be enabled** to generate app passwords
- **Keep app password secure** - don't share or commit to version control

## How It Works

1. **User enters Gmail address** on signup page
2. **System validates** it's a Gmail address
3. **OTP is generated** and stored in database
4. **Email is sent** via Gmail SMTP with beautiful HTML template
5. **User receives email** with 6-digit verification code
6. **Code expires** in 2 minutes for security

## Testing

1. Use a real Gmail address for testing
2. Check your Gmail inbox (and spam folder)
3. The email will have a professional HabitTracker design
4. OTP codes are logged to console for debugging

## Troubleshooting

### "Only Gmail addresses are supported"
- Make sure you're using a Gmail address (@gmail.com)
- Non-Gmail addresses are not supported

### "Failed to send OTP email"
- Check your GMAIL_USER and GMAIL_APP_PASSWORD in .env.local
- Verify 2FA is enabled on your Gmail account
- Ensure app password is correctly generated
- Check console logs for detailed error messages

### Email not received
- Check spam/junk folder
- Verify email address is correct
- Wait a few minutes for delivery
- Check Gmail account settings

## Security Features

- ✅ **Gmail-only validation** - prevents unauthorized email services
- ✅ **2-minute expiration** - OTP codes expire quickly
- ✅ **Secure app passwords** - no plain text passwords
- ✅ **Professional email template** - branded HabitTracker design
- ✅ **No OTP in API response** - codes only sent via email 