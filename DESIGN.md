# APEX - Sim Racing Coach Design System (DESIGN.md)

## 1. Design System Overview & Tokens

Apex is designed as a focused, dark-themed, high-contrast racing coach. The design emphasizes clarity, calm focus, and visual progress without distraction.

### 1.1 Color Tokens (`:root`)

```css
:root {
  /* Base Colors (Backgrounds) */
  --color-bg: #0A0A0C;            /* Primary Base (Deep Obsidian) - Main app background */
  --color-bg-secondary: #111114;  /* Secondary Base (Carbon) - Secondary pages or distinct sections */
  
  /* Surface Colors (Containers) */
  --color-surface: #18181C;       /* Surface 1 / Default (Gunmetal) - Standard cards, sidebars, data rows */
  --color-surface-1: #18181C;
  --color-surface-light: #222228; /* Surface 2 / Elevated (Dark Slate) - Dropdowns, nested cards */
  --color-surface-2: #222228;
  --color-surface-hover: #222228; /* Surface 2 Hover State */
  --color-surface-highest: #2C2C34; /* Surface 3 / Highest (Titanium) - Modals, pop-ups, tooltips, active states */
  --color-surface-3: #2C2C34;
  
  --color-text: #FFFFFF;          /* Primary Text / Action (Pure White) - highest contrast */
  --color-text-muted: #6C757D;    /* Tertiary Data (Cool Grey) - non-critical telemetry */
  --color-text-dim: #495057;      /* Subtle metadata */
  
  --color-primary: #FFFFFF;       /* Primary Action */
  --color-primary-hover: #E0E0E0;
  --color-primary-glow: rgba(255, 255, 255, 0.2);
  
  /* F1 Timing & Telemetry Colors */
  --color-f1-purple: #FF1E00;      /* F1 Personal Best / Active Session Accent (Warm Red) */
  --color-f1-purple-glow: rgba(255, 30, 0, 0.25);
  
  --color-f1-green: #22C55E;       /* Track Green - Completed / Mastered / Delta Gain */
  --color-f1-green-glow: rgba(34, 197, 94, 0.25);
  
  --color-f1-amber: #EAB308;       /* Caution Amber - In Progress / Pending Challenge */
  --color-f1-amber-glow: rgba(234, 179, 8, 0.25);
  
  --color-f1-red: #FF1E00;         /* Warm Red - Pit Limiter / Alerts / Critical Danger */
  --color-f1-red-glow: rgba(255, 30, 0, 0.25);
  
  --color-accent-red: var(--color-f1-red);
  --color-secondary-accent: var(--color-f1-red);
  --color-danger: var(--color-f1-red);
  --color-danger-glow: var(--color-f1-red-glow);
  
  --color-tertiary-data: #6C757D; /* Tertiary Data (Cool Grey) */

  --color-success: var(--color-f1-green);
  --color-success-glow: var(--color-f1-green-glow);
  
  --color-warning: var(--color-f1-amber);
  --color-warning-glow: var(--color-f1-amber-glow);
  
  /* Boundaries & Dividers */
  --color-border-raw: #3A3A45;
  --color-border: rgba(58, 58, 69, 0.2);       /* Subtle Border (#3A3A45 at 20% opacity) - sleek flat-tech look */
  --color-border-subtle: rgba(58, 58, 69, 0.1);/* Subtle Border (10% opacity) */
  --color-border-light: rgba(58, 58, 69, 0.25);/* Boundaries & dividers */

  /* Typography Strategy - Strict Motorsport Coach Protocol */
  --font-heading: 'Rajdhani', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-menu: var(--font-heading);
  --font-gear-speed: 'Titillium Web', sans-serif;
  --font-telemetry: 'JetBrains Mono', monospace;
  --font-family: var(--font-body);
  
  /* Radii & Shadows - Sharp Motorsport Terminal Geometry */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-full: 9999px;
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 24px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 24px var(--color-primary-glow);
  --shadow-purple-glow: 0 0 20px var(--color-f1-purple-glow);
  --shadow-green-glow: 0 0 20px var(--color-f1-green-glow);
  
  /* Layout Dimensions */
  --sidebar-width: 240px;
  --sidebar-width-collapsed: 64px;
  --max-content-width: 960px;
  
  /* Animations */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 1.2 Typography Hierarchy & Purpose

- **Headings & Navigation (`Rajdhani`, Bold 700/800, Uppercase, Tracked)**: Angular, condensed, tactical motorsport HUD font that commands strict racing coach authority across all section headers and navigation links.
- **Body & Coach Directives (`Space Grotesk`, Regular 400 / Medium 500)**: Mechanical, high-clarity monospace-inspired sans-serif for coach instructions, session notes, and reference content.
- **Telemetry & Lap Times (`JetBrains Mono`, Medium 500/700)**: Tabular monospaced numbers ensuring lap times, deltas, wheel angles, and telemetry values align precisely.
- **Gear & Speed Displays (`Titillium Web`, Bold Italic 700/900)**: High-speed F1 telemetry HUD numbers delivering authentic momentum.

### 1.3 Iconography Tokens & Standards

- **Library & Engine**: Lucide Icons (SVG line vector engine) rendered at stroke width `1.75px` to `2px`. Emojis are strictly banned from UI elements to maintain a serious, high-contrast telemetry aesthetic.
- **Sizing Tokens**:
  - `.icon-sm`: `16px × 16px` (Subtle metadata, inline badges)
  - `.icon-md`: `20px × 20px` (Sidebar navigation, standard buttons, step list items)
  - `.icon-lg`: `24px × 24px` (Section headers, card highlights)
  - `.icon-xl`: `32px × 32px` (Module hero badges, achievement trophies)
- **Color & State Behavior**: Icons inherit `currentColor` by default, adopting `--color-accent-red` for active/warning states, `--color-success` for mastered items, and `--color-text-muted` for secondary data.
- **Semantic Icon Tokens**:
  - Logo / Identity: `gauge` / `flag-triangle-right`
  - Dashboard: `layout-dashboard`
  - Modules: `layers`
  - Progress Analytics: `line-chart`
  - Journal / Notes: `notebook-pen`
  - Reference Library: `book-open`
  - Data Sync / Backup: `download` / `upload`
  - Technical Objectives: `crosshair`
  - Physics / Weight Transfer: `sliders`
  - Braking Dynamics: `disc-3`
  - Track Geometry & Lines: `spline` / `compass`
  - Session Completion / Finish: `flag` / `check-circle-2`
  - Interactive Action / Back: `arrow-left`


## 2. Component Guidelines

- **Primary Action / Buttons**:
  - Primary: `#FFFFFF` Pure White background with `#0A0A0C` (Deep Obsidian) text for maximum contrast & quick focus.
  - Secondary: Outlined with `var(--color-border)` (`#3A3A45` at 20% opacity), transparent background.
  - Warning / Danger: `#FF1E00` Warm Red for pit limiter, low fuel, critical flags.
- **Cards**: Surface 1 `#18181C` (Gunmetal), subtle border `rgba(58, 58, 69, 0.2)` (`#3A3A45` @ 20%), rounded corners (12px).
- **Modals & Popups**: Surface 3 `#2C2C34` (Titanium).
- **Progress Bars**: Track `rgba(58, 58, 69, 0.2)`, Pure White `#FFFFFF` or Green `#22C55E` fill.
- **Telemetry Cards**: Telemetry values set in `JetBrains Mono` (`.font-telemetry`) with tertiary metrics in Cool Grey (`#6C757D`).
- **Gear & Speed Displays**: High-visibility numbers rendered in `Titillium Web` (`.font-gear-speed`).
- **Difficulty Badges**:
  - Easy: 🟢 `#2ecc71`
  - Medium: 🟡 `#feca57`
  - Hard / Warning: 🔴 `#FF1E00` (Warm Red)

