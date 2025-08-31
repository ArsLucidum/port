# Project Template System Documentation

This directory contains template files for generating project pages using Claude's AI-powered parsing system.

## How to Use

Use the Claude command: `claude generate-project <template-file>`

**Examples:**
```bash
claude generate-project projects/templates/simple-project.txt
claude generate-project projects/templates/complex-project.txt
```

## Template Format

Templates are written in a human-friendly format mixing regular text with JSON-like components. The AI parser is forgiving with syntax errors and missing quotes.

### Available Components

The template system supports 6 component types:

#### 1. Data Point (`pv-insight`)
Display statistics or key metrics with large numbers.

**Template syntax:**
```json
{
type: "data-point",
data-text: "73%",
subquote-text: "of users completed the task"
}
```

**Variants:** You can add style hints that will map to CSS classes:
- `"critical"` → red accent color
- `"warning"` → brand accent color  
- `"info"` → blue accent color (default)

#### 2. Quote Subtitle (`pv-highlight`)
Highlighted text blocks with quotes and attributions.

**Template syntax:**
```json
{
type: "quote-subtitle",
quote-text: "Design is thinking made visual",
subquote-text: "Saul Bass"
}
```

#### 3. Image (`pv-image`)
Responsive images with optional captions.

**Template syntax:**
```json
{
type: "image",
image-source: "dashboard-mockup.png",
alt-text: "Dashboard showing improved user interface",
caption: "New dashboard design with better usability"
}
```

**Note:** Images are automatically placed in the `./img/` directory of the generated project.

#### 4. Quote (`pv-quote`)
Stylized standalone quotes without attribution.

**Template syntax:**
```json
{
type: "quote",
text: "Good design is as little design as possible"
}
```

#### 5. Icon Caption (`pv-icon-caption`)
Cards with emoji icons, titles, and descriptions.

**Template syntax:**
```json
{
type: "icon-caption",
icon: "🎯",
quote-text: "User-Centered Design",
subquote-text: "Always designing with user needs in mind"
}
```

#### 6. Callout (`pv-callout`)
Important notices, questions, or key considerations that need attention. Visually distinct from quotes.

**Template syntax:**
```json
{
type: "callout",
text: "¿Qué opinan los usuarios sobre la app Tarjeta Transporte de la EMT y qué cambios les ayudarían a usarla de forma más cómoda en su día a día?"
}
```

**Visual difference:** Callouts have a lightbulb icon, colored background/border, and are styled like information boxes rather than quoted text.

## Syntax Flexibility

The AI parser handles imperfect JSON syntax gracefully:

- **Missing quotes:** `type: data-point` works the same as `type: "data-point"`
- **Inconsistent quotes:** Mix of single and double quotes is fine
- **Extra/missing commas:** Parser will figure out the intent
- **Spacing variations:** Indentation and spacing don't need to be perfect

## Template Structure

### Recommended Sections

1. **Project Title** - Use `## Title` format
2. **Project Overview** - Brief introduction paragraph
3. **Multiple content sections** with headings (`### Section Name`)
4. **Mix components throughout** - Intersperse with regular text
5. **Conclusion** - Key learnings or impact

### Example Structure
```
## Project Title

Brief project description paragraph.

### Research Phase

Regular text about research...

{
type: "data-point",
data-text: "85%",
subquote-text: "user satisfaction increase"
}

More regular text...

### Design Solutions

{
type: "image",
image-source: "mockups.png",
alt-text: "Design mockups",
caption: "Final design concepts"
}

Regular text continues...
```

## Sample Templates

- **`simple-project.txt`** - Basic template with minimal components
- **`medium-project.txt`** - All component types demonstrated
- **`complex-project.txt`** - Heavy component usage, real-world complexity
- **`messy-syntax.txt`** - Intentionally imperfect syntax for testing
- **`real-world.txt`** - Comprehensive case study format

## Output

The generator creates:
- Complete HTML project page using the portfolio design system
- New project directory with appropriate naming
- Integrated navigation and styling
- Responsive design with accessibility features
- Ready-to-use project page

## Technical Details

### Generated File Structure
```
projects/
  project-name/
    index.html          (generated project page)
    img/               (directory for project images)
```

### CSS Classes Used
- `.pv-insight` - Data points with variants (critical, warning, info)
- `.pv-highlight` - Quote subtitle blocks
- `.pv-image` - Image containers with captions
- `.pv-quote` - Standalone quote blocks
- `.pv-icon-caption` - Icon-based content cards
- `.pv-callout` - Important callout boxes with variants (default, info, warning)

### Design System Integration
All generated components automatically integrate with:
- Existing color tokens and typography
- Responsive breakpoints
- Accessibility standards (WCAG 2.1)
- Project page layout system
- Navigation and timeline functionality