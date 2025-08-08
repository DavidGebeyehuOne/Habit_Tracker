# Habit Tracker - Build Your Future

A modern, full-stack habit tracking application built with Next.js 14, TypeScript, and Prisma. Track your daily habits, build streaks, earn rewards, and visualize your progress with beautiful analytics.

## 🚀 Features

### Core Functionality
- **Habit Management**: Create, edit, and organize daily, weekly, or monthly habits
- **Streak Tracking**: Visual streak counters with streak protection
- **Calendar Heatmap**: GitHub-style heatmap showing habit consistency
- **Gamified Rewards**: Unlock badges and achievements for milestones
- **Smart Analytics**: Detailed insights and progress visualization
- **Email Reminders**: Customizable email notifications
- **Responsive Design**: Fully mobile-optimized interface

### Technical Features
- **Authentication**: NextAuth.js with Google OAuth and email/password
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: Zustand for global state
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth interactions
- **Charts**: Recharts for data visualization
- **Theme**: Dark/light mode support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Charts**: Recharts
- **Calendar**: react-calendar-heatmap
- **Animations**: Framer Motion
- **Notifications**: react-hot-toast

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd habit-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/habit_tracker"
   
   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Google OAuth (optional)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   
   # Email (for reminders)
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   EMAIL_FROM="noreply@habittracker.com"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The application uses the following main models:

- **User**: User accounts and authentication
- **Habit**: Individual habits with metadata
- **Completion**: Daily habit completions
- **Streak**: Current and longest streaks per habit
- **Badge**: Achievements and rewards
- **UserSettings**: User preferences and settings

## 📱 Pages & Features

### Landing Page (`/`)
- Hero section with app introduction
- Feature overview
- Call-to-action buttons

### Authentication (`/auth/*`)
- Sign in with email/password or Google
- User registration
- Protected routes

### Dashboard (`/dashboard`)
- Overview of all habits
- Today's habit checklist
- Quick stats and progress
- Recent activity

### Habit Management (`/dashboard/habits`)
- Create new habits
- Edit existing habits
- View habit details and history
- Archive/delete habits

### Calendar (`/dashboard/calendar`)
- GitHub-style heatmap
- Monthly/weekly views
- Habit completion visualization

### Analytics (`/dashboard/analytics`)
- Completion rate charts
- Streak analysis
- Performance trends
- Export functionality

### Rewards (`/dashboard/rewards`)
- Badge gallery
- Achievement progress
- Unlock animations

### Settings (`/dashboard/settings`)
- Email reminder preferences
- Theme customization
- Account management

## 🔧 API Routes

- `POST /api/auth/register` - User registration
- `GET /api/habits` - Fetch user habits
- `POST /api/habits` - Create new habit
- `GET /api/completions` - Fetch completions
- `POST /api/completions` - Mark habit as completed
- `DELETE /api/completions/[habitId]/[date]` - Remove completion

## 🎨 Customization

### Adding New Badges
Badges are defined in the badge system and can be customized by modifying the badge requirements and icons.

### Custom Themes
The application supports custom themes through Tailwind CSS configuration and CSS variables.

### Email Templates
Email reminders can be customized by modifying the email templates in the notification system.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Social features (sharing, challenges)
- [ ] Advanced analytics
- [ ] Integration with health apps
- [ ] AI-powered habit suggestions
- [ ] Team/group habit tracking

---

Built with ❤️ using Next.js 14 and modern web technologies.