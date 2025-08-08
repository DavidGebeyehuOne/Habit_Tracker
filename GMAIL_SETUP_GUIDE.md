# Quick Gmail Setup for OTP

## 🚨 Current Issue
You're getting "Failed to send OTP email" because Gmail credentials aren't configured.

## ✅ Immediate Solution (Testing)
The system now has a fallback - OTP will be displayed on the page when Gmail isn't configured.

## 🔧 To Set Up Gmail Email (Optional)

### Step 1: Create .env.local file
Create a file named `.env.local` in your project root with:

```env
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

### Step 2: Get Gmail App Password
1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Go to "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Name it "HabitTracker"
6. Copy the 16-character password

### Step 3: Update .env.local
Replace the placeholders with your actual values:
- `your.email@gmail.com` → your actual Gmail address
- `your_16_character_app_password` → the 16-character app password

## 🧪 Testing Right Now
1. **Try the signup page** - OTP should now work and display on the page
2. **Check the console** - OTP will be logged there too
3. **Complete signup** - You can test the full flow

## 📧 When Gmail is Configured
- OTP will be sent via email instead of showing on page
- Professional email template with HabitTracker branding
- More secure (OTP not visible on page)

## 🔍 Troubleshooting
- **Still getting errors?** Check browser console for detailed error messages
- **OTP not showing?** Make sure you're using a Gmail address (@gmail.com)
- **Need help?** The fallback system ensures OTP always works for testing 