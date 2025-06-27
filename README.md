# VESA Website - VTE Faculty School Website

A modern, responsive website for VTE Faculty School built with React, Vite, and Tailwind CSS. This project is developed by the Cresea Tech Society team.

## 🌟 Project Overview

The VESA website is a comprehensive platform designed to showcase the VTE Faculty School's departments, events, news, and academic information. The website features a modern UI with responsive design and provides an excellent user experience for students, faculty, and visitors.

## 🚀 Features

### Core Pages

- **Home Page** - Landing page with hero section, highlights, and department previews
- **About Page** - Mission, vision, history, and faculty information
- **Contact Page** - Contact form, location, and social media links
- **Blog Page** - News, insights, and faculty content
- **Departments Page** - Overview of all academic departments
- **Events Page** - Faculty events and activities
- **Notice Page** - Important announcements and updates

### Department Pages

- **Computer Science** - AI, Software Development, Cybersecurity
- **Mathematics** - Mathematical modeling and logical rigor
- **Physics** - Quantum physics, electronics, materials science
- **Chemistry** - Industrial chemistry and lab-intensive learning
- **Biological Sciences** - Environmental biology and genetics

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Routing**: React Router DOM 7.6.2
- **Linting**: ESLint 9.29.0

## 📁 Project Structure

```
vesa-website/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── data.js        # Mock data for departments, blogs, notices, events
│   ├── assets/
│   │   ├── documentation/ # Project documentation
│   │   ├── images/        # Image assets
│   │   └── wireframe-images/ # Wireframe mockups
│   ├── components/
│   │   ├── UI/           # Reusable UI components
│   │   │   ├── BlogDetails.jsx
│   │   │   ├── DepartmentsDetails.jsx
│   │   │   └── NoticeDetails.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── NotFound.jsx
│   ├── pages/            # Main page components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Departments.jsx
│   │   ├── Events.jsx
│   │   ├── Home.jsx
│   │   └── Notice.jsx
│   ├── routes/
│   │   └── routes.jsx    # Application routing configuration
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation & Setup

#### Step 1: Clone the Repository

```bash
# Clone the main repository
git clone https://github.com/Cresa-Tech-Society/vte-website.git

# Navigate to the project directory
cd vte-website
```

#### Step 2: Install Dependencies

```bash
# Install all required dependencies
npm install
```

#### Step 3: Start Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 👥 Team Development Workflow

### Creating a New Branch (IMPORTANT!)

**Never push directly to the main branch!** Always create a feature branch for your work.

#### Step-by-Step Branch Creation:

1. **Ensure you're on the main branch and it's up to date:**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create and switch to a new feature branch:**

   ```bash
   # Format: person-name/feature-description
   git checkout -b john/home-page-hero-section

   # Or for bug fixes: person-name/bugfix-description
   git checkout -b sarah/fix-navigation-issue
   ```

3. **Make your changes and commit them:**

   ```bash
   # Add your changes
   git add .

   # Commit with a descriptive message
   git commit -m "feat: add hero section to home page"
   ```

4. **Push your branch to remote:**

   ```bash
   git push origin john/home-page-hero-section
   ```

5. **Create a Pull Request:**
   - Go to the GitHub repository
   - Click "Compare & pull request" for your branch
   - Add description of your changes
   - Request review from team members
   - Merge only after approval

### Branch Naming Conventions

- **Feature branches**: `person-name/feature-description` (e.g., `john-branch`, `sarah-branch`)

**Examples:**

````bash
# Feature branch examples
git checkout -b john-branch
git checkout -b sarah-branch
git checkout -b mike-branch


### Commit Message Guidelines

Use conventional commit messages:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## 🎨 Design System

### Color Palette
- Primary colors defined in Tailwind CSS configuration
- Consistent spacing and typography
- Responsive design breakpoints

### Components
- Reusable UI components in `src/components/UI/`
- Consistent styling across all pages
- Mobile-first responsive design

## 📱 Pages Overview

### 1. Home Page (Landing Page)
- Hero section with faculty name and motto
- Quick highlights (student count, departments, years of excellence)
- Slideshow/banner featuring faculty events
- Department preview cards
- Mini-news/announcements ticker

### 2. About Page
- Mission & Vision statements
- Timeline section showing faculty growth
- Dean's message with photo
- Core values presentation
- Faculty structure/organogram

### 3. Contact Page
- Contact form (name, email, message)
- Faculty map/location
- Social media icons
- Contact information display
- FAQ section

### 4. Blog Page
- Blog cards layout with thumbnails
- Tag/filtering system
- Featured post section
- Author information
- Search functionality

### 5. Departments Page
- Department grid layout
- Individual department links
- Infographic showing statistics
- Photo carousel
- Filter by specialization

### 6. Individual Department Pages
Each department has its own detailed page with:
- Course listings
- Lab/workshop galleries
- Student project showcases
- Faculty highlights
- Department-specific events

## 🔧 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Add comments for complex logic

### File Organization
- Keep related files together
- Use descriptive file names
- Organize components by feature
- Maintain consistent folder structure

### Performance
- Optimize images and assets
- Use lazy loading where appropriate
- Minimize bundle size
- Follow React performance best practices

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
````

## 📞 Support

For questions or issues:

- Create an issue on GitHub
- Contact the Cresea Tech Society team
- Check the project documentation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is developed by Cresea Tech Society for VTE Faculty School.

---

**Happy Coding! 🚀**

_Built with ❤️ by Cresea Tech Society_
