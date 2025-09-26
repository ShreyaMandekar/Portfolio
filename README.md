# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases your projects, skills, and professional information in a clean and elegant design.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Display your projects with descriptions and links
- **Skills Section**: Highlight your technical skills and expertise
- **Social Links**: Connect your social media profiles
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
Portfolio_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── Cozy_Bedroom_Scene_Generation.mp4  # Sample project video
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons for social links and UI elements
- **Google Fonts**: Inter font family for typography

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

- A modern web browser
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download** this repository to your local machine
2. **Open** the project folder in your preferred text editor
3. **Customize** the content in `index.html` with your information:
   - Replace "Your Name" with your actual name
   - Update the hero section with your title and description
   - Add your projects in the projects section
   - Update your skills in the skills section
   - Add your contact information
   - Update social media links

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