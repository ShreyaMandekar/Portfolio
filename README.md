# Shreya Mandekar - MERN Stack Portfolio

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js). This website showcases projects, skills, and professional information with a dynamic backend API and interactive frontend.

## 🚀 Features

### Frontend (React + TypeScript)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable React components

### Backend (Node.js + Express)
- **RESTful API**: Complete API endpoints for all portfolio features
- **Contact Form**: Functional contact form with validation and spam protection
- **Project Management**: Dynamic project showcase with like/view tracking
- **Visitor Analytics**: Track and analyze website visitors
- **Security**: Rate limiting, CORS, helmet, and input validation

### Database (MongoDB)
- **Contact Messages**: Store and manage contact form submissions
- **Projects**: Dynamic project management with categories and features
- **Visitor Tracking**: Analytics and visitor behavior tracking
- **Data Validation**: Mongoose schemas with validation rules

## 📁 Project Structure

```
Portfolio_website/
├── server.js                    # Express server entry point
├── package.json                 # Backend dependencies
├── config.env                   # Environment configuration
├── routes/                      # API routes
│   ├── contact.js              # Contact form endpoints
│   ├── projects.js             # Project management endpoints
│   └── visitors.js             # Visitor analytics endpoints
├── models/                      # MongoDB models
│   ├── Contact.js              # Contact message schema
│   ├── Project.js              # Project schema
│   └── Visitor.js              # Visitor tracking schema
├── client/                      # React frontend
│   ├── public/
│   │   ├── index.html          # HTML template
│   │   └── manifest.json       # PWA manifest
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── services/           # API services
│   │   ├── types/              # TypeScript types
│   │   ├── App.tsx             # Main App component
│   │   └── index.tsx           # React entry point
│   └── package.json            # Frontend dependencies
├── Cozy_Bedroom_Scene_Generation.mp4  # Sample project video
└── README.md                   # Project documentation
```

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript for better development experience
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Icons**: Beautiful icon library
- **CSS3**: Modern styling with Flexbox and Grid

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **Bcrypt**: Password hashing
- **Nodemailer**: Email sending functionality

### Development & Deployment
- **Git**: Version control
- **GitHub Pages**: Static site hosting
- **Heroku**: Backend hosting (optional)
- **MongoDB Atlas**: Cloud database (optional)

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful color gradients throughout
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and efficient code

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** for version control
- A modern web browser
- A text editor (VS Code recommended)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShreyaMandekar/Portfolio.git
   cd Portfolio
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**:
   - Copy `config.env` to `.env`
   - Update the configuration with your values:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/portfolio
     JWT_SECRET=your-super-secret-jwt-key
     ```

5. **Start MongoDB** (if using local installation):
   ```bash
   mongod
   ```

6. **Run the development server**:
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately:
   # Backend only
   npm run server
   
   # Frontend only (in another terminal)
   cd client && npm start
   ```

7. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/api/health

### Customization Guide

#### 1. Personal Information
```html
<!-- Update in index.html -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">
    A passionate developer creating amazing digital experiences
</p>
```

#### 2. Contact Information
```html
<!-- Update contact details -->
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

#### 3. Social Media Links
```html
<!-- Update social links -->
<a href="https://github.com/yourusername" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

#### 4. Projects
```html
<!-- Add your projects -->
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image or video -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <!-- Add project links -->
    </div>
</div>
```

#### 5. Skills
```html
<!-- Update your skills -->
<div class="skill-items">
    <span class="skill-item">Your Skill</span>
    <!-- Add more skills -->
</div>
```

## 🌐 Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select source**: Deploy from a branch
5. **Choose branch**: main (or master)
6. **Save** the settings
7. **Wait** for GitHub to build your site
8. **Visit** your site at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Command Line

1. **Initialize git repository**:
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Commit changes**:
   ```bash
   git commit -m "Initial portfolio website"
   ```

4. **Add remote repository**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

5. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```

6. **Enable GitHub Pages** in repository settings

## 🎯 Customization Tips

### Colors
The website uses CSS custom properties for easy color customization. Update these in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #fbbf24;
}
```

### Fonts
Change the font family by updating the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Animations
Adjust animation speeds and effects in `script.js` and `styles.css` to match your preferences.

## 📧 Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Update the form action** in `index.html`
3. **Configure the service** with your email address

### Example with Formspree:
```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <!-- form fields -->
</form>
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio contact form
- Reach out on social media

## 🎉 Acknowledgments

- Font Awesome for the beautiful icons
- Google Fonts for the Inter font family
- The open-source community for inspiration and resources

---

**Happy coding!** 🚀

Remember to replace all placeholder content with your actual information before deploying your portfolio.