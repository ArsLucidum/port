# Content Management Guide

This guide helps non-developers update content on the portfolio website.

## Quick Updates

### Updating Your Name and Basic Info
Edit `data/profile.json`:
- Change `"name"` to your full name
- Update `"role"` with your professional title
- Modify `"description"` and `"aboutDescription"` with your bio
- Update contact information in the `"contact"` section

### Adding Work Experience
Edit `data/experience.json`:
- Add new jobs at the beginning of the list
- Use `null` for `"endDate"` if it's your current job
- Keep descriptions concise but impactful

### Adding Education
Edit `data/education.json`:
- Add new degrees/certifications
- Include relevant details in the description

### Managing Projects
Edit `data/projects.json`:
- Set `"featured": true` for projects you want on the homepage
- Use clear, descriptive titles and descriptions
- Categories: "web", "mobile", "design-system", "research", "prototype"

## Adding Images

1. **Profile Photo**: Replace `assets/images/profile.jpg` (400x400px recommended)
2. **Project Images**: Add to `assets/images/` and reference in JSON files

## Image Guidelines

- **Format**: JPG for photos, PNG for graphics with transparency
- **Size**: Keep under 1MB for web performance
- **Dimensions**: 
  - Profile photo: 400x400px (square)
  - Project images: 800x600px (4:3 ratio)
  - Project gallery: 600x400px

## Creating New Project Pages

1. **Copy Template**: Duplicate `projects/sample-project/` folder
2. **Rename Folder**: Use your project slug (lowercase, hyphens for spaces)
3. **Update Content**: Edit the HTML file with your project details
4. **Add to JSON**: Add project entry to `data/projects.json`

## Common Tasks

### Changing Colors
In `assets/css/styles.css`, find the `:root` section and update:
- `--brand`: Main brand color
- `--accent-color`: Secondary highlight color

### Updating Skills
In `data/profile.json`, modify the `"skills"` array:
```json
"skills": [
  "Your Skill 1",
  "Your Skill 2",
  "Your Skill 3"
]
```

### Social Links
In `data/profile.json`, update the contact section:
```json
"contact": {
  "email": "your-email@example.com",
  "linkedin": "linkedin.com/in/yourprofile",
  "location": "Your City, State"
}
```

## Testing Changes

1. Open `index.html` in a web browser
2. Check that all content displays correctly
3. Test navigation between pages
4. Verify images load properly

## Getting Help

- Check the README.md for technical details
- Ensure JSON files have proper syntax (no missing commas or quotes)
- Test locally before pushing changes to live site