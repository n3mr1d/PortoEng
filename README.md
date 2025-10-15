# Portfolio Website - PortoEng

A modern, interactive portfolio website built with React, TypeScript, and Vite. This portfolio showcases my skills, projects, GitHub activity, and provides a seamless way to connect with visitors.

## 🚀 Features

### 1. Interactive Hero Section
- Animated typing effect with custom text rotation
- Dynamic light ray background effects
- Smooth hover effects and animations using Framer Motion
- Downloadable CV with dropdown menu options

### 2. Animated Navigation
- Responsive navigation bar with desktop and mobile layouts
- Smooth transitions with active page highlighting
- GSAP animations for logo interactions
- Mobile-friendly hamburger menu toggle

### 3. About Me Section
- Personal information display with age calculation
- Interactive animated elements with mouse tracking
- Grid layout with hover effects and scaling

### 4. Skills & Expertise
- Categorized skills display (Frontend, Backend, Database, Tools, Frameworks)
- Icon-based categorization with Lucide React icons
- Animated card reveals using GSAP ScrollTrigger
- Responsive grid layout across devices

### 5. GitHub Profile Integration
- Real-time GitHub data fetching using GraphQL API
- Display of profile information (avatar, bio, location, company, etc.)
- Statistics cards showing followers, following, repositories, and contributions
- Top repositories showcase with stars, forks, and language information
- GitHub contribution calendar visualization

### 6. Featured Projects
- Project showcase with images, descriptions, and technologies used
- Interactive cards with hover effects
- Direct links to live projects and GitHub repositories
- Technology tags displayed as badges

### 7. Certificate Section
- Professional certificates display (though not fully visible in the code)
- Interactive elements for certificate viewing

### 8. Contact Form
- Fully functional contact form with validation
- Integration with Formspree for backend handling
- Loading states and success/error notifications
- Form validation for all fields (name, email, subject, message)

### 9. Footer Section
- Complete page structure with proper navigation
- Consistent styling and animations throughout

### 10. Advanced Animations
- Mouse position tracking with interactive grid pattern
- Radial gradient effects that follow the cursor
- GSAP animations for page elements
- Scroll-triggered animations for content sections

### 11. Loading Animation
- Custom loader animation on page load
- 3-second timeout before revealing main content

## 🛠 Technologies Used

### Frontend Framework
- **React 19.1.1** - Component-based UI library
- **TypeScript 5.9.3** - Type-safe JavaScript superset
- **Vite 7.1.7** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation library with ScrollTrigger
- **Lucide React** - Beautiful icon library

### UI Components
- **@radix-ui/react components** - Accessible, customizable UI primitives
- **shadcn/ui** - Reusable component library
- **Sonner** - Notification library
- **react-github-calendar** - GitHub contribution visualization

### Form Handling & Validation
- **react-hook-form** - Performant form library
- **zod** - Schema validation

### Data Fetching & State Management
- **SWR** - React Hooks library for data fetching
- **React Router DOM** - Client-side routing

### Utilities & Libraries
- **date-fns** - Date manipulation
- **recharts** - Charting library
- **cmdk** - Command menu component
- **input-otp** - One-time password input
- **react-resizable-panels** - Resizable panel groups
- **vaul** - Accessible modal component

## 📁 Project Structure

```
portoeng/
├── public/
├── src/
│   ├── assets/           # Static assets
│   ├── components/       # UI components
│   │   ├── pages/        # Page components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Feature components (Navbar, Hero, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and libraries
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🛠 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portoeng
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_MEKEY=your_github_personal_access_token
VITE_FORM=your_formspree_endpoint
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Environment Variables

- `VITE_MEKEY`: Your GitHub personal access token for fetching GitHub profile data
- `VITE_FORM`: Your Formspree endpoint URL for the contact form

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Locally preview the production build
- `npm run lint` - Run ESLint to check for code issues

## 🧪 Development

### Adding New Components
1. Create a new component in the `src/components` directory
2. Use Radix UI primitives for accessibility
3. Follow the existing naming convention and folder structure

### Adding New Features
1. Create feature-specific components
2. Integrate with existing layout and styling patterns
3. Add proper TypeScript interfaces and types

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

### Deployment Options
- Vercel: Place the project in the root directory and configure
- Netlify: Create a new site and deploy from the main branch
- GitHub Pages: Deploy the dist folder as a GitHub Pages site

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐱‍💻 About the Developer

This portfolio was created to showcase my skills and projects as a full-stack developer. It includes:
- Interactive design elements
- Modern UI/UX patterns
- Performance optimizations
- Responsive design for all devices
- Integration with external APIs
- Form handling and validation

The portfolio demonstrates proficiency in React, TypeScript, and modern web development practices.