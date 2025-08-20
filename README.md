# UX Designer Portfolio Website

A clean, professional portfolio website built with vanilla HTML, CSS, and JavaScript. Perfect for UX designers who want a simple, maintainable portfolio that can be easily deployed to GitHub Pages.

## Features

- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Professional Design** - Clean, modern aesthetic perfect for designers
- ⚡ **Fast Loading** - Optimized with vanilla JS, no heavy frameworks
- 🔧 **Easy to Customize** - JSON-based content management
- ♿ **Accessible** - Built with accessibility best practices
- 🚀 **GitHub Pages Ready** - Deploy directly from your repository

## Getting Started

### 1. Customize Your Content

Edit the JSON files in the `data/` folder to update your personal information:

- **`profile.json`** - Your name, bio, skills, and contact information
- **`experience.json`** - Your work experience and job history
- **`education.json`** - Your educational background
- **`projects.json`** - Your portfolio projects

### 2. Add Your Images

Replace placeholder images in the `assets/images/` folder:

- **`profile.jpg`** - Your profile photo (recommended: 400x400px, square)
- **Project images** - Add images for your projects as referenced in `projects.json`

### 3. Customize Styling

- **Colors**: Update CSS variables in `assets/css/styles.css` (lines 2-30)
- **Fonts**: Change font imports in HTML files and update CSS variables
- **Layout**: Modify sections in `index.html` as needed

## Adding New Projects

### Step 1: Add Project Data

Add a new project object to `data/projects.json`:

```json
{
  "title": "Your Project Title",
  "slug": "your-project-slug",
  "shortDescription": "Brief description for project cards",
  "description": "Detailed project overview",
  "image": "assets/images/your-project-image.jpg",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "categories": ["web", "mobile", "design-system", "research", "prototype"],
  "featured": true,
  "year": "2024",
  "role": "Your Role",
  "duration": "Project Duration",
  "team": "Team Description"
}
```

### Step 2: Create Project Page

1. Create a new folder: `projects/your-project-slug/`
2. Copy `projects/sample-project/index.html` to your new folder
3. Customize the content for your specific project
4. Add project images to `assets/images/`

## File Structure

```
portfolio/
├── index.html              # Main homepage
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # All images
├── data/
│   ├── profile.json        # Personal information
│   ├── experience.json     # Work experience
│   ├── education.json      # Education history
│   └── projects.json       # Portfolio projects
├── projects/
│   ├── index.html          # Projects listing page
│   └── [project-name]/
│       └── index.html      # Individual project pages
└── README.md               # This file
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages in your repository
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable HTTPS in your repository settings

## Customization Tips

### Colors
The color scheme uses CSS custom properties. Update these in `:root`:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary text color
- `--accent-color`: Accent color for highlights

### Typography
- Primary font: Inter (clean, modern sans-serif)
- Display font: Playfair Display (elegant serif for headings)

### Animations
All animations use CSS and are performance-optimized. You can:
- Adjust animation timing in CSS variables
- Add new animations using the existing patterns
- Disable animations by setting `--transition-fast: 0s`

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- No external dependencies except Google Fonts
- Optimized images with lazy loading
- Minimal JavaScript for maximum performance

## Support

For questions or issues, please refer to the code comments or create an issue in the repository.

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.