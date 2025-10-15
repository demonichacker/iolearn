# IOLEARN - Interactive Learning Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive, modern learning platform built with Next.js, designed to provide an exceptional interactive educational experience. Features include structured courses, engaging quizzes, detailed progress tracking, and an integrated code playground for hands-on learning.

## 🚀 Features

### 📚 Interactive Courses
- **Structured Learning Paths**: Organized courses in Programming and School categories
- **W3Schools-Style Navigation**: Intuitive lesson progression with clear milestones
- **Interactive Exercises**: Hands-on code challenges and practical assignments
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🧠 Quiz System
- **Instant Feedback**: Real-time scoring with detailed explanations
- **Animated Confetti**: Celebration effects for scores above 80%
- **Social Sharing**: Share achievements with pre-populated text
- **Difficulty Indicators**: Visual cues for question complexity
- **Retake Functionality**: Multiple attempts with comprehensive progress tracking

### 💻 Code Playground
- **Multi-language Support**: JavaScript, HTML, CSS, React, Python
- **Live Preview**: Real-time output for web technologies
- **Console Capture**: JavaScript execution with robust error handling
- **External Integration**: CodeSandbox links for advanced development
- **Syntax Highlighting**: Professional code editing experience with Monaco Editor

### 📊 Progress Tracking
- **Detailed Analytics**: Comprehensive learning data visualization
- **Interactive Charts**: Visual representation of learning trends using Recharts
- **Data Export**: Export complete learning progress as JSON
- **Performance Monitoring**: Track course completion and quiz performance metrics

### 🎨 User Experience
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **Smooth Animations**: Framer Motion-powered transitions and effects
- **Accessibility**: WCAG-compliant design with proper ARIA labels
- **Mobile-First**: Responsive design that works across all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualization
- **3D Graphics**: Three.js with React Three Fiber
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Context API
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/demonichacker/iolearn.git
   cd iolearn
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage Examples

### Starting a Course
1. Navigate to the Courses page from the main navigation
2. Select a course from Programming or School categories
3. Follow the W3Schools-style navigation through lessons
4. Complete interactive exercises and code challenges
5. Track your progress in real-time

### Taking Quizzes
1. Complete course lessons to unlock corresponding quizzes
2. Answer questions with instant feedback and explanations
3. Achieve high scores (80%+) to trigger confetti animations
4. Share results on social media with pre-populated text
5. Review incorrect answers and retake quizzes as needed

### Tracking Progress
1. Visit the Progress page to view detailed analytics
2. Export complete learning data as JSON for external analysis
3. View interactive charts showing learning trends over time
4. Monitor course completion rates and quiz performance metrics

## 🏗️ Project Structure

```
iolearn/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Protected dashboard pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   ├── landing/          # Landing page components
│   └── auth/             # Authentication components
├── contexts/             # React Context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── data/                 # Static data and content
└── public/               # Static assets
```

## 🔧 Development

### Adding New Features
- Follow the existing component structure in `/components`
- Use the established theme system with design tokens in `globals.css`
- Implement animations with Framer Motion for consistency
- Add proper TypeScript interfaces in `/types`
- Maintain responsive design principles

### Testing
- Test responsive design across mobile (320px), tablet (768px), and desktop (1024px+) viewports
- Verify theme switching functionality in both light and dark modes
- Ensure code playground execution works correctly across all supported languages
- Test quiz animations and confetti effects for performance
- Validate form inputs and error handling

### Code Quality
- Use ESLint for code linting (`npm run lint`)
- Follow TypeScript strict mode guidelines
- Maintain consistent naming conventions
- Write descriptive commit messages

## 🚀 Deployment

The platform is optimized for deployment on modern hosting platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the existing code style and patterns
4. Test thoroughly across devices and themes
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Ensure all new code includes proper TypeScript types
- Add tests for new features when applicable
- Update documentation for API changes
- Follow the established component patterns
- Test accessibility features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies for an exceptional learning experience
- Special thanks to the open-source community for the amazing tools and libraries
- Inspired by the best practices from leading educational platforms

## 📞 Support

For support, email support@iolearn.com or join our [Discord community](https://discord.gg/iolearn).

---

**IOLEARN** - Empowering learners through interactive, engaging education.
