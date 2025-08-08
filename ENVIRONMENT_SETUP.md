# Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/habit_tracker"

# NextAuth
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (Optional - for Google sign-in)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Service (Optional - for OTP emails)
RESEND_API_KEY="your-resend-api-key"
```

## How to Generate NEXTAUTH_SECRET

Run this command in your terminal to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this online generator: https://generate-secret.vercel.app/32

## Quick Fix for Development

For immediate testing, you can use these minimal settings:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/habit_tracker"
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-secret-key-here"
```

## Troubleshooting

1. **404 Errors**: Make sure your database is running and accessible
2. **NextAuth Errors**: Ensure NEXTAUTH_SECRET is set
3. **CSS Errors**: Run `npm run build` to generate CSS files 