# VESA Website - VTE Faculty School Website

![VESA Website](https://via.placeholder.com/800x400?text=VESA+Website)

A modern, responsive website for the Vocational and Technical Education (VTE) Faculty School built with React, Vite, and Tailwind CSS. Developed by the Cresea Tech Society team.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Data Management](#-data-management)
- [Design System](#-design-system)
- [Pages Overview](#-pages-overview)
- [Development Guidelines](#-development-guidelines)
- [Troubleshooting](#-troubleshooting)
- [Contact & Support](#-contact--support)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Project Overview

The VESA website serves as a comprehensive platform for the VTE Faculty School, showcasing departments, events, news, and academic information. The website features a modern UI with responsive design, providing an excellent user experience for students, faculty, and visitors.

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

Each department has a dedicated page with specialized content:

- **Agriculture and Bioresources Education** - Sustainable agriculture, food security
- **Business Education** - Entrepreneurship, management, finance
- **Computer Science Education** - Programming, cybersecurity, AI
- **Home Economics Education** - Nutrition, textiles, family studies
- **Industrial Technical Education** - Engineering, manufacturing, design

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.6.2
- **Animation**: AOS 2.3.4, Framer Motion 12.20.1
- **Form Handling**: EmailJS 4.4.1
- **UI Components**: React Icons 5.5.0, Swiper 11.2.10
- **Notifications**: React Toastify 11.0.5
- **SEO**: React Helmet Async 2.0.5
- **Linting**: ESLint 9.29.0

## 📁 Project Structure

```
vesa-website/
├── public/                 # Static assets
│   ├── images/             # Public images (blogs, events, etc.)
│   └── logo.png            # Site logo
├── src/
│   ├── api/                # Data management
│   │   ├── data.js         # Data exports
│   │   └── data/           # Modular data files
│   │       ├── blogs.js    # Blog posts data
│   │       ├── departments.js # Department information
│   │       ├── events.js   # Events data
│   │       ├── notices.js  # Notices and announcements
│   │       └── ...         # Other data modules
│   ├── assets/
│   │   ├── documentation/  # Project documentation
│   │   ├── images/         # Image assets
│   │   └── wireframe-images/ # Wireframe mockups
│   ├── components/
│   │   ├── UI/             # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── NotFound.jsx
│   ├── pages/              # Main page components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Departments.jsx
│   │   ├── Events.jsx
│   │   ├── Home.jsx
│   │   └── Notice.jsx
│   ├── routes/
│   │   └── routes.jsx      # Application routing
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
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
# Clone the repository
git clone https://github.com/Cresa-Tech-Society/vte-website.git

# Navigate to the project directory
cd vte-website
```

#### Step 2: Install Dependencies

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

#### Step 3: Start Development Server

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

The application will be available at `http://localhost:5173`

#### Step 4: Building for Production

```bash
# Using npm
npm run build

# OR using yarn
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 👥 Development Workflow

### Branch Management

**Important: Never push directly to the main branch!** Always create a feature branch for your work.

#### Creating a New Branch

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

### Commit Message Guidelines

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## 📊 Data Management

The VESA website uses a modular data management system located in the `src/api/` directory. This approach allows for easy updates and maintenance of content without changing the core application code.

### Data Structure

- **`src/api/data.js`**: Central export file that re-exports all data and functions
- **`src/api/data/`**: Directory containing individual data modules

### Available Data Modules

- **`blogs.js`**: Blog posts and articles
- **`departments.js`**: Faculty departments information
- **`events.js`**: Events and activities
- **`notices.js`**: Announcements and notices
- **`testimonials.js`**: User testimonials
- **`benefits.js`**: Faculty benefits
- **`features.js`**: Faculty features and statistics
- **`downloads.js`**: Downloadable resources
- **`studentPresidents.js`**: Student leadership information

### How to Update Data

#### Adding a New Blog Post

1. Open `src/api/data/blogs.js`
2. Add a new object to the `blogs` array:

```javascript
{
  id: 6, // Increment from the last ID
  title: "Your New Blog Title",
  slug: "your-new-blog-title", // URL-friendly version of the title
  image: blogImg1, // Reference an imported image or use a URL
  tags: ["Tag1", "Tag2", "Tag3"],
  date: "2024-07-15", // Use YYYY-MM-DD format
  author: "Author Name",
  content: `Your blog content goes here.
  You can use multiple paragraphs.

  **Markdown** formatting is supported.`
}
```

#### Adding a New Department

1. Open `src/api/data/departments.js`
2. Add a new object to the `departments` array:

```javascript
{
  id: 6, // Increment from the last ID
  name: "New Department Name",
  icon: LuIcon, // Import an icon from react-icons
  image: departmentImage, // Reference an imported image
  summary: "Brief department summary",
  description: "Detailed department description...",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  details: {
    head: "Department Head Name",
    faculty: [
      "Faculty Member 1 - Specialization",
      "Faculty Member 2 - Specialization"
    ],
    coreCourses: [
      "Course Code: Course Name",
      "Course Code: Course Name"
    ],
    blogIds: [1, 3], // IDs of related blog posts
    eventIds: [2, 4] // IDs of related events
  }
}
```

#### Adding a New Event

1. Open `src/api/data/events.js`
2. Add a new object to the `events` array:

```javascript
{
  id: 6, // Increment from the last ID
  title: "New Event Title",
  description: "Brief event description",
  date: "2024-08-20T14:00:00", // ISO date format with time
  department: "Department Name",
  image: eventImage, // Reference an imported image
  location: "Event Location",
  upcoming: new Date("2024-08-20T14:00:00") > new Date(), // Automatically calculated
  content: "Detailed event description and information..."
}
```

#### Adding a New Notice

1. Open `src/api/data/notices.js`
2. Add a new object to the appropriate array (`notices`, `pinnedNotices`, or `allNotices`):

```javascript
{
  id: 6, // Increment from the last ID
  title: "New Notice Title",
  content: "Detailed notice content...",
  summary: "Brief notice summary",
  date: "2024-07-10", // YYYY-MM-DD format
  category: "Academic", // Or other category
  isPinned: false // Set to true for important notices
}
```

### Data Helper Functions

Each data module exports helper functions to access the data:

- `getBlogs()`, `getBlogById(id)`, `getRelatedBlogs(id)`
- `getDepartments()`, `getDepartmentById(id)`
- `getEvents()`, `getEventById(id)`, `getUpcomingEvents()`
- `getNotices()`, `getPinnedNotices()`, `getAllNotices()`, `getNoticeById(id)`

Use these functions in your components to access the data:

```javascript
import { getBlogById } from "../api/data";

function BlogPost({ id }) {
  const blog = getBlogById(id);
  // Use blog data in your component
}
```

## 🎨 Design System

### Color Palette

- Primary: Green shades (#10b981, #059669)
- Secondary: Gray shades (#f3f4f6, #e5e7eb)
- Accent: Yellow/Orange for highlights
- Text: Dark gray (#1f2937) for body, Black (#000000) for headings

### Typography

- Headings: Sans-serif, bold (font-semibold, font-bold)
- Body: Sans-serif, regular weight
- Consistent sizing scale using Tailwind's text utilities

### Components

- Reusable UI components in `src/components/UI/`
- Consistent styling across all pages
- Mobile-first responsive design

## 📱 Pages Overview

### 1. Home Page

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

### 6. Events Page

- Calendar view of upcoming events
- Event cards with date, time, location
- Department filtering
- Registration links
- Past events archive

### 7. Notice Page

- Pinned important notices
- Categorized announcements
- Downloadable resources
- Academic calendar highlights
- Dean's announcements

## 🔧 Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Add comments for complex logic

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
   ```

2. **Node modules issues:**

   ```bash
   # Delete node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

3. **Vite build errors:**
   - Check for syntax errors in your components
   - Verify all imports are correct
   - Ensure all required dependencies are installed

## 📞 Contact & Support

### Development Team

For questions, issues, or contributions, contact the Cresea Tech Society team:

- **Email**: [contact@creseatech.org](mailto:contact@creseatech.org)
- **GitHub**: [Cresa-Tech-Society](https://github.com/Cresa-Tech-Society)
- **Website**: [creseatech.org](https://creseatech.org)

### Reporting Issues

1. Check existing issues on GitHub
2. Create a new issue with detailed information:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable
   - Browser/device information

## 🤝 Contributing

We welcome contributions from everyone! Here's how to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and ensure code quality
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is developed by Cresea Tech Society for VTE Faculty School.

---

**Happy Coding! 🚀**

_Built with ❤️ by Cresea Tech Society_
