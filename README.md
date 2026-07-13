# Savio Joseph - Personal Portfolio

🌌 Architecture & Logic | Developer Portfolio  
🔗 Live Site: [portfolio-savi.vercel.app](https://portfolio-savi.vercel.app/)

An immersive, modern, and highly interactive software developer portfolio designed to showcase projects, skills, and academic trajectory. Moving away from standard flat layouts, this portfolio uses smooth kinetic animations, custom cursor tracking, and fluid scroll transitions to provide a premium interactive browsing experience.

## ✨ Key Features

- **Fluid Inertial Scrolling:** Integrates `Lenis` smooth scroll for a seamless, natural scrolling experience across all page sections.
- **3D Tilt Showcases:** Features interactive 3D parallax tilt cards (powered by `react-parallax-tilt`) for a tactile and premium project viewing experience.
- **Custom Cursor Follower:** A responsive custom cursor that dynamically scales, changes opacity, and adjusts style when interacting with hoverable buttons and links.
- **SVG-Guided Trajectory Timeline:** An animated timeline showcasing academic and professional experience with interactive SVG draw lines reacting to scroll depth.
- **Double-Deck Kinetic Marquees:** Showcases technical skills and soft skills using dual-direction infinite marquee bands powered by `Framer Motion`.

## 🛠️ Technology Stack

### Core Frameworks & Tooling
- **React (v19)** - A JavaScript library for building components and managing UI state.
- **Vite (v8)** - A lightning-fast, modern bundler and frontend tooling ecosystem.
- **JavaScript (ES6+)** - Clean, component-driven logic.

### Styling & Motion
- **Tailwind CSS (v3)** - A utility-first CSS framework with custom design tokens for volumetric background blobs.
- **Framer Motion (v12)** - A production-ready React motion library for complex layout transitions and scroll-bound animations.
- **Lucide React & React Icons** - Modern, clean, and consistent vector icon sets.

### Layout & Animation Utilities
- **Lenis** - Modern scroll normalization library for smooth scrolling.
- **React Parallax Tilt** - Add interactive, lightweight 3D hover effects to elements.
- **clsx & tailwind-merge** - Utilities for clean, conflict-free Tailwind CSS class merging.

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets (resume.pdf, icons, images)
├── src/
│   ├── assets/             # Fonts, styles, and asset imports
│   ├── components/         # React functional components
│   │   ├── About.jsx       # Educational history and academic overview
│   │   ├── Contact.jsx     # Engaging call-to-action & social links
│   │   ├── CustomCursor.jsx# Dynamic interactive custom cursor
│   │   ├── Experience.jsx  # SVG-guided professional trajectory timeline
│   │   ├── Footer.jsx      # copyright info & architectural credits
│   │   ├── Hero.jsx        # Volumetric mesh landing layout with scroll transforms
│   │   ├── Navbar.jsx      # Responsive sticky navigation bar
│   │   ├── Projects.jsx    # Selected works with 3D tilt interaction
│   │   └── Skills.jsx      # Double-deck scrolling marquees
│   ├── App.css             # Component-specific typography and noise layers
│   ├── App.jsx             # Main layout, custom cursor state & Lenis RAF loop
│   ├── index.css           # Tailwind directives and custom animation styles
│   └── main.jsx            # Entry point for rendering
├── index.html              # Core HTML shell
├── tailwind.config.js      # Custom design tokens, gradients, and typography config
└── package.json            # Configuration and script definitions
```

## 🚀 Getting Started

Follow these steps to set up and run the portfolio locally.

### 1. Clone the Repository
```bash
git clone https://github.com/savi-7/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` (or the port specified by Vite) in your browser to view the application.

### 4. Build for Production
To generate a highly optimized static build:
```bash
npm run build
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and optimizes the project files for production deployment.
- `npm run preview`: Runs a local server to preview the built production package.
- `npm run lint`: Performs linting checks via ESLint to ensure code cleanliness.

## 👤 Author

**Savio Joseph**  
📍 Koovappally, Kerala, India  

- **Website:** [portfolio-savi.vercel.app](https://portfolio-savi.vercel.app/)
- **GitHub:** [@savi-7](https://github.com/savi-7)  
- **LinkedIn:** [Savio Joseph](https://linkedin.com/in/saviojoseph007)  
- **Email:** [saviojoseph2581@gmail.com](mailto:saviojoseph2581@gmail.com)
