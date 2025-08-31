# Claude Code Custom Commands

This file defines custom commands for Claude Code to assist with portfolio development.

## generate-project

Generate a complete project page from a template file containing mixed text and JSON components.

**Usage:** `claude generate-project <template-file>`

**Examples:**
- `claude generate-project projects/templates/simple-project.txt`
- `claude generate-project projects/templates/complex-project.txt`

### Command Context

When you receive a `generate-project` command, you should:

1. **Read the template file** specified by the user
2. **Parse the mixed content** that contains regular text interspersed with JSON-like component definitions
3. **Transform the content** into a complete HTML project page using the existing `projects/project.html` as a template
4. **Generate the final HTML file** in the appropriate project directory

### Available Component Types

The template system supports 6 component types that should be converted to HTML:

#### 1. Data Point (pv-insight)
```json
{
  type: "data-point",
  data-text: "73%",
  subquote-text: "of users completed the task successfully"
}
```
Converts to:
```html
<div class="pv-insight info">
  <div class="pv-insight-number">73%</div>
  <p>of users completed the task successfully</p>
</div>
```

#### 2. Quote Subtitle (pv-highlight)  
```json
{
  type: "quote-subtitle",
  quote-text: "Design is not just what it looks like",
  subquote-text: "Steve Jobs"
}
```
Converts to:
```html
<div class="pv-highlight">
  <h3>Design is not just what it looks like</h3>
  <p>Steve Jobs</p>
</div>
```

#### 3. Image (pv-image)
```json
{
  type: "image", 
  image-source: "dashboard-mockup.png",
  alt-text: "Dashboard interface showing clean design",
  caption: "New dashboard design with improved user experience"
}
```
Converts to:
```html
<div class="pv-image">
  <img src="./img/dashboard-mockup.png" alt="Dashboard interface showing clean design">
  <div class="pv-image-caption">New dashboard design with improved user experience</div>
</div>
```

#### 4. Quote (pv-quote)
```json
{
  type: "quote",
  text: "Good design is as little design as possible"
}
```
Converts to:
```html
<div class="pv-quote">
  <p>Good design is as little design as possible</p>
</div>
```

#### 5. Icon Caption (pv-icon-caption)
```json
{
  type: "icon-caption",
  icon: "🎯",
  quote-text: "User-Centered Design",
  subquote-text: "Always designing with user needs in mind"
}
```
Converts to:
```html
<div class="pv-icon-caption">
  <span class="pv-icon-caption-icon">🎯</span>
  <h4 class="pv-icon-caption-title">User-Centered Design</h4>
  <p class="pv-icon-caption-subtitle">Always designing with user needs in mind</p>
</div>
```

#### 6. Callout (pv-callout)
```json
{
  type: "callout",
  text: "¿Qué opinan los usuarios sobre la app Tarjeta Transporte de la EMT y qué cambios les ayudarían a usarla de forma más cómoda en su día a día?"
}
```
Converts to:
```html
<div class="pv-callout">
  <p>¿Qué opinan los usuarios sobre la app Tarjeta Transporte de la EMT y qué cambios les ayudarían a usarla de forma más cómoda en su día a día?</p>
</div>
```

**Callout Variants:** You can specify different callout styles by adding a variant field:
- Default (yellow): `type: "callout"` 
- Info (blue): `type: "callout", variant: "info"`
- Warning (red): `type: "callout", variant: "warning"`

**Note:** Callouts are visually distinct from quotes - they have a lightbulb icon (💡), info icon (ℹ️), or warning icon (⚠️) with colored borders and backgrounds, and are used for important questions, considerations, or key points that need attention.

### Template Processing Instructions

1. **Be forgiving with JSON syntax** - Handle missing quotes, extra commas, spacing issues
2. **Preserve regular text** as-is between components
3. **Maintain proper HTML structure** with sections, headings, and paragraphs
4. **Use the existing project.html** as the base template structure
5. **Replace placeholder content** in the 5 main sections (investigar, definir, idear, disenar, testear)
6. **Generate appropriate project metadata** (title, subtitle, duration, role, tools) based on content
7. **Create a new project folder** with appropriate naming based on the project title
8. **Include proper image paths** pointing to `./img/` directory
9. **Ensure accessibility** with proper alt texts and semantic markup
10. **Handle syntax errors gracefully** through natural language understanding
11. **Fix CSS/JS paths** - Use `../../assets/css/` and `../../assets/js/` from project subdirectories
12. **Handle image files correctly** - Check file types, copy/create missing images, ensure proper extensions

### Error Handling

- If JSON syntax is imperfect, interpret the intent and generate valid HTML
- If image sources are missing, use placeholder images
- If component types are unrecognized, treat as regular text
- Always generate valid HTML even with malformed input

### Output

Generate a complete HTML file that:
- Uses the same structure as `projects/project.html`
- Integrates seamlessly with the existing design system
- Contains all the transformed content in appropriate sections
- Is ready for immediate use in the portfolio

The command should be robust, user-friendly, and able to handle varying levels of template complexity and syntax accuracy.