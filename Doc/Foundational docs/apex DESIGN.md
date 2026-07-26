# APEX - Sim Racing Coach

## Design Document (DESIGN.md)

---

## 1. Introduction

### 1.1 Purpose

This document defines the visual identity, user interface, and interaction design for **Apex**—a client-only static web application for sim racing education. It translates the Product Requirements Document (PRD) and Technical Requirements Document (TRD) into a cohesive design system.

### 1.2 Design Philosophy

Apex is a **coach**, not a game. The design reflects:

- **Clarity over flash:** Information must be immediately understandable
- **Calm focus:** Racing is intense; the app should be a respite
- **Progress visualization:** Seeing improvement builds confidence
- **Privacy-first:** No glossy "social" features, no distractions

---

## 2. Brand Identity

### 2.1 Logo & Wordmark

```
    ┌──────────────────────────┐
    │   █████   ██   ███████   │
    │  ██        ██   ██   ██   │
    │  ██   ████ ██   ███████   │  ← abstract apex graphic
    │  ██    ██  ██   ██   ██   │
    │   █████   ██   ██   ██   │
    └──────────────────────────┘
              APEX
    your sim racing coach
```

**Concept:** A stylized apex (the point of the corner) formed by geometric shapes, suggesting precision, speed, and direction. The wordmark is clean, modern, and uppercase.

**Usage:**
- Top-left corner of all pages
- Favicon uses the apex icon alone

### 2.2 Color Palette

**Primary: Dark Theme (Default)**

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary Base | Deep Obsidian | `#0A0A0C` | Main app background |
| Secondary Base | Carbon | `#111114` | Secondary pages, distinct sections |
| Surface 1 (Default) | Gunmetal | `#18181C` | Standard cards, sidebars, data rows |
| Surface 2 (Elevated) | Dark Slate | `#222228` | Hover states, dropdowns, nested cards |
| Surface 3 (Highest) | Titanium | `#2C2C34` | Modals, pop-ups, tooltips, active states |
| Text Primary | White | `#FFFFFF` | Body text, headings, action buttons |
| Text Secondary | Muted | `#6C757D` | Labels, tertiary telemetry |
| Accent F1 Red / Warm Accent | Warm Red / Personal Best | `#FF1E00` | PB active session focus accent, brand accent, alerts |
| Accent F1 Green | Track Green | `#22C55E` | Complete, delta gains |
| Accent F1 Amber | Caution Amber | `#EAB308` | Warnings, pending challenges |
| Boundaries & Dividers | Subtle Border | `#3A3A45` @ 10-20% | Sleek flat-tech dividers |

**Light Theme (Optional)**

| Role | Color | Hex |
|------|-------|-----|
| Background | Off-white | `#f0f0f5` |
| Surface | White | `#ffffff` |
| Surface Light | Light gray | `#f5f5fa` |
| Text Primary | Dark | `#1a1a2e` |
| Text Secondary | Muted | `#666688` |

### 2.3 Typography

**Font Family:** Inter (system font stack fallback)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
```

**Scale:**

| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| H1 (Page Title) | 28px / 1.3 | 700 | -0.01em |
| H2 (Section Title) | 22px / 1.4 | 600 | 0 |
| H3 (Card Title) | 18px / 1.4 | 600 | 0 |
| Body (Regular) | 16px / 1.6 | 400 | 0 |
| Body (Small) | 14px / 1.5 | 400 | 0 |
| Meta / Labels | 12px / 1.4 | 500 | 0.02em (uppercase optional) |
| Button Text | 15px / 1 | 600 | 0 |

### 2.4 Iconography

All icons are **SVG inline** for crispness and control.

**Icons Needed:**

| Icon | Usage |
|------|-------|
| 🏁 | Logo / brand mark |
| ▶ | Continue / play |
| ← | Back navigation |
| ✓ | Complete / success |
| ⚠️ | Warning / alert |
| 📤 | Export |
| 📥 | Import |
| 📖 | Theory / reading |
| 🎯 | Practice / drills |
| 🏎️ | Practical / driving |
| 🏆 | Challenge / achievement |
| 📝 | Assessment / journal |
| ★ | Rating star |
| ✕ | Close / dismiss |

**Design Style:** Outline icons, 24px base, stroke width 2px.

---

## 3. UI Component Library

### 3.1 Buttons

**Primary Button**
```
┌──────────────────────────────┐
│  🚀  Start Your First Session │   ← 48px height
└──────────────────────────────┘
```
- Background: `#48dbfb`
- Text: `#0a0a0f` (dark for contrast)
- Hover: `#7fe5fa`
- Active: Press down effect (transform scale 0.98)
- Font: 15px / 600 / uppercase (optional)

**Secondary Button**
```
┌──────────────────────────────┐
│  ←  Back to Dashboard         │
└──────────────────────────────┘
```
- Background: transparent
- Border: `#2a2a3e`
- Text: `#e8e8f0`
- Hover: background `#1e1e2d`

**Icon Button**
```
  ┌──┐
  │📤│  (small, circular)
  └──┘
```
- 36px square
- Background: transparent
- Hover: background `#1e1e2d`
- Used for export, import, close

### 3.2 Cards

**Standard Card**
```
┌──────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════╗ │
│  ║  (Content area)                        ║ │
│  ╚══════════════════════════════════════════╝ │
└──────────────────────────────────────────────┘
```
- Background: `#14141e`
- Border: `1px solid #2a2a3e`
- Border-radius: `12px`
- Padding: `20px 24px`
- Box-shadow: `0 4px 24px rgba(0,0,0,0.4)`

**Hover variant (clickable)**
- Border color: `#48dbfb` (subtle)
- Transform: translateY(-2px)

### 3.3 Progress Bars

**Module Progress**
```
  The Line  ████████░░░░ 8/12
```
- Height: 6px
- Background: `#2a2a3e`
- Fill: `#48dbfb` (linear gradient optional)
- Text: `8888aa` / small

**Step Progress (Session)**
```
  ●──●──○──○──○
  Theory Practice Practical Challenge Assessment
```
- Active step: filled circle, `#48dbfb`
- Completed: filled circle, `#2ecc71`
- Inactive: empty circle, `#2a2a3e`
- Line: `#2a2a3e`, 2px

### 3.4 Rating Stars

```
  ★ ★ ★ ☆ ☆   (3/5)
```
- 24px stars
- Filled: `#feca57`
- Unfilled: `#2a2a3e`
- Interactive hover effect on stars

### 3.5 Form Inputs

**Text Input**
```
┌──────────────────────────────────────────────┐
│  Best Lap Time (seconds)                    │
│  ┌──────────────────────────────────────────┐│
│  │  92.5                                    ││
│  └──────────────────────────────────────────┘│
└──────────────────────────────────────────────┘
```
- Background: `#1e1e2d`
- Border: `1px solid #2a2a3e`
- Border-radius: `8px`
- Padding: `10px 14px`
- Focus: border `#48dbfb`, shadow glow

**Textarea**
```
┌──────────────────────────────────────────────┐
│  Notes                                       │
│  ┌──────────────────────────────────────────┐│
│  │  (multi-line)                           ││
│  │                                         ││
│  └──────────────────────────────────────────┘│
└──────────────────────────────────────────────┘
```
- Same style, min-height 80px

### 3.6 Tags & Badges

**Module Badge**
```
  ┌──────┐
  │ 1/4  │   (small)
  └──────┘
```
- Background: `#48dbfb` (20% opacity)
- Text: `#48dbfb`
- Border-radius: `16px`
- Padding: `2px 10px`

**Achievement Badge**
```
  ┌─────────────┐
  │  🏆  Master  │
  └─────────────┘
```
- Background: `#feca57` (20% opacity)
- Text: `#feca57`

---

## 4. Page Designs

### 4.1 Landing Page

**Layout:** Centered vertical, max-width 720px

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ┌─────────────────────┐                     │
│                    │  █████   ██   ███████ │                    │
│                    │ ██        ██   ██   ██ │                   │
│                    │ ██   ████ ██   ███████ │  ← Logo          │
│                    │ ██    ██  ██   ██   ██ │                   │
│                    │  █████   ██   ██   ██ │                   │
│                    └─────────────────────┘                     │
│                                                                 │
│                      Your Structured Path to                   │
│                      Sim Racing Confidence                     │
│                                                                 │
│          Learn the techniques from Going Faster!               │
│          applied to Forza Motorsport 2023 + Moza R3            │
│                                                                 │
│              ┌─────────────────────────────────┐              │
│              │  ⏱️ 45 min  │  📅 3/week        │              │
│              │  📚 4 modules│  🎯 12 sessions   │              │
│              └─────────────────────────────────┘              │
│                                                                 │
│              ┌──────────────────────────────────┐              │
│              │   🚀  Start Your First Session    │              │
│              └──────────────────────────────────┘              │
│                                                                 │
│  ⚠️  Progress is stored locally in this browser. No account.   │
│     Your data stays yours. [Learn More]                        │
│                                                                 │
│  (If returning user, show "Welcome back! Continue" instead)   │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Dashboard

**Layout:** Two-column (left: main progress, right: quick stats) on desktop; stacked on mobile

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
│                    [📤 Export] [📥 Import]                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────┐  ┌──────────────────────────┐ │
│  │ Welcome back!               │  │ Module 1                 │ │
│  │                             │  │ Score: 72/100            │ │
│  │ Module 1: The Line          │  │ Confidence: ★★★★☆       │ │
│  │ ████████░░░░ 8/12 Sessions  │  │                          │ │
│  │                             │  │ Streak: 3 weeks          │ │
│  │ ▶ Continue Session 9        │  │                          │ │
│  │                             │  │                          │ │
│  └─────────────────────────────┘  └──────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Last Session Recap                                         ││
│  │  Best Lap   Target    Confidence    Notes                  ││
│  │  1:41.2     1:41.0    4/5          "Felt consistent..."   ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Quick Links:  [📖 Module Guide] [📚 Reference] [📝 Journal] ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Session View

**Layout:** Full-width, max-width 800px, centered

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back                Module 1 › Session 8                    │
├─────────────────────────────────────────────────────────────────┤
│  Road Atlanta Mastery                                         │
│  🎯 Consistency  🚗 MX-5  🏁 Road Atlanta  ⏱️ 1:41.0         │
│                                                                 │
│  ●━━━●━━━○━━━○━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  (Theory content)                                          ││
│  │  ──────────────────────────────                            ││
│  │  [Interactive diagram]                                     ││
│  │                                                             ││
│  │  Key Takeaways:                                            ││
│  │  ✅ Track memorization is the first step to speed          ││
│  │  ✅ Reference points should be visible from the car        ││
│  │  ✅ Consistency beats hero laps                            ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  [Mark as Read] → Continue to Practice                    ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

**Practice Step:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━●━━━●━━━○━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Practice Drills                                           ││
│  │  ──────────────────────────────                            ││
│  │  Drill 1: Find the Markers                                ││
│  │  Drive slowly (2nd gear) through Turn 2 only...          ││
│  │  Repetitions: 5  │  Focus: Reference point accuracy       ││
│  │                                                             ││
│  │  ⏱️ 10 minutes  │  🚗 MX-5  │  🏁 Laguna Seca            ││
│  │                                                             ││
│  │  [Open Forza and start practicing]                         ││
│  │                                                             ││
│  │  When done, continue...                                    ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  [← Previous]  [Continue →]                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Assessment Step:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━●━━━●━━━●━━━●                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Session Assessment                                        ││
│  │  ──────────────────────────────                            ││
│  │  Rate your performance:                                    ││
│  │                                                             ││
│  │  Brake Consistency     ★ ★ ★ ☆ ☆                        ││
│  │  Apex Accuracy          ★ ★ ★ ★ ☆                        ││
│  │  Throttle Control       ★ ★ ★ ☆ ☆                        ││
│  │  Overall Control        ★ ★ ★ ☆ ☆                        ││
│  │  Confidence             ★ ★ ★ ★ ☆                        ││
│  │                                                             ││
│  │  Best Lap Time:  [92.5]  seconds                          ││
│  │  Notes:                                                    ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │  Felt good, struggled with Turn 6 apex             │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  │                                                             ││
│  │  Reflection:                                               ││
│  │  ┌──────────────────────────────────────────────────────┐  ││
│  │  │  I need to look further ahead...                   │  ││
│  │  └──────────────────────────────────────────────────────┘  ││
│  │                                                             ││
│  │                 [Complete Session ✓]                       ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 4.4 Progress Dashboard

**Layout:** Full-width, with charts and metrics

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Module 1: The Line — Overall Score: 72/100                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Lap Time Progress (seconds)                            │  │
│  │  110 ┤                                                  │  │
│  │  108 ┤   ╭╮                                            │  │
│  │  106 ┤ ╭╯│╭╮                                          │  │
│  │  104 ┤╭╯  │││                                          │  │
│  │  102 ┤│   ╰╯╰╮                                        │  │
│  │  100 ┤│      ╰╮                                       │  │
│  │       └─────────────────────────────────────            │  │
│  │        S1 S2 S3 S4 S5 S6 S7 S8 S9 S10 S11 S12          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────┐  ┌──────────────────────────────────┐ │
│  │  Skill Radar         │  │  Session Summary                │ │
│  │    (radar chart)     │  │  Sessions: 8/12                 │ │
│  │                     │  │  Avg Lap: 102.5 → 98.2         │ │
│  │                     │  │  Best Lap: 1:40.8              │ │
│  │                     │  │  Spin Count: 4 total           │ │
│  │                     │  │  Confidence Trend: ⬆⬆         │ │
│  │                     │  │  Current Streak: 3 weeks       │ │
│  └─────────────────────┘  └──────────────────────────────────┘ │
│                                                                 │
│  Achievements Earned:                                          │
│  🏁 First Session  │  📍 Line Master  │  ⭐ Consistent        │
└─────────────────────────────────────────────────────────────────┘
```

### 4.5 Journal View

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Your Reflection Journal                                      │
│  ──────────────────────────────                               │
│                                                                 │
│  Session 8: Road Atlanta Mastery  (July 25, 2026)              │
│  Confidence: ★★★★☆                                            │
│  Hardest part: Finding the apex at Turn 6                     │
│  Click moment: When I hit the perfect apex at Turn 2         │
│  Next focus: Earlier braking at Turn 1                        │
│                                                                 │
│  Session 7: Practice + New Track  (July 22, 2026)              │
│  Confidence: ★★★☆☆                                            │
│  Hardest part: Remembering the track layout                   │
│  Click moment: Finally hit the braking point consistently     │
│  Next focus: Smooth throttle application                      │
│                                                                 │
│  [Export Journal]  [Clear Journal]                             │
└─────────────────────────────────────────────────────────────────┘
```

### 4.6 Reference Library

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📚 Reference Library                                          │
│  ──────────────────────────────                               │
│                                                                 │
│  [Search...]                                                    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐│
│  │  🏁  The Racing Line                                     ││
│  │  The fastest path through any corner is the one with the  ││
│  │  largest radius. Learn how to find it.                   ││
│  │  [View]                                                    ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌────────────────────────────────────────────────────────────┐│
│  │  🛑  Braking & Trail-Braking                             ││
│  │  Understanding threshold braking and how to carry brakes ││
│  │  into corners.                                           ││
│  │  [View]                                                    ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌────────────────────────────────────────────────────────────┐│
│  │  ⚡  Corner Exit & Throttle Control                      ││
│  │  Maximizing exit speed through smooth throttle           ││
│  │  application and car control.                            ││
│  │  [View]                                                    ││
│  └────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Responsive Design Strategy

### 5.1 Breakpoints

| Breakpoint | Device | Layout Changes |
|------------|--------|----------------|
| ≥ 1024px | Desktop | Two-column dashboard, full-width session view |
| 768–1023px | Tablet | Reduced padding, stacked cards, still readable |
| < 768px | Mobile | Single-column, larger touch targets, condensed text |

### 5.2 Mobile Adaptations

**Landing Page:**
- Logo smaller (48px)
- Features as a grid (2x2) with smaller icons
- Button full-width

**Dashboard:**
- Stats cards stacked vertically
- Last session recap becomes a single column
- Quick links as horizontal scroll or dropdown

**Session View:**
- Step labels shortened (e.g., "Practice" → "Drill")
- Theory text font-size reduced to 15px
- Touch targets minimum 44px

**Charts:**
- Lap time chart simplified (fewer grid lines)
- Radar chart scaled to fit mobile width

### 5.3 Typography Scaling

```css
/* Mobile */
html { font-size: 15px; }
h1 { font-size: 24px; }
h2 { font-size: 20px; }

/* Tablet */
@media (min-width: 768px) {
  html { font-size: 16px; }
  h1 { font-size: 28px; }
  h2 { font-size: 22px; }
}
```

---

## 6. Interaction & Animation

### 6.1 Micro-interactions

| Action | Animation | Duration |
|--------|-----------|----------|
| Button hover | Background color transition, lift (translateY(-1px)) | 150ms |
| Button click | Scale down (0.98) then return | 100ms |
| Step transition | Fade in content (opacity 0→1, slide up 8px) | 200ms |
| Rating star hover | Scale up 1.2, gold fill | 100ms |
| Progress bar fill | Smooth width transition | 500ms |
| Card hover | Border glow, translateY(-2px) | 200ms |
| Data saving | Checkmark flash | 300ms |

### 6.2 Page Transitions

- **Session to Dashboard:** Fade out/in with slight slide (300ms)
- **Step to Step:** Content fade + slide up (200ms)
- **Module complete:** Confetti burst (lightweight Canvas animation)

### 6.3 Loading States

- **Initial load:** Skeleton screens for dashboard cards (pulsing gray blocks)
- **Data save:** Inline "Saved ✓" feedback after assessment submission

---

## 7. Accessibility (WCAG 2.1 AA)

### 7.1 Color Contrast

| Element | Foreground | Background | Ratio |
|---------|------------|------------|-------|
| Body text | `#e8e8f0` | `#0a0a0f` | 14.5:1 |
| Secondary text | `#8888aa` | `#0a0a0f` | 6.9:1 |
| Primary button text | `#0a0a0f` | `#48dbfb` | 8.5:1 |
| Links | `#48dbfb` | `#0a0a0f` | 6.9:1 |

All pass AA contrast ratio (≥4.5:1).

### 7.2 Keyboard Navigation

- All interactive elements focusable
- Focus indicator: `outline: 2px solid #48dbfb`
- Tab order logical: header → main content → navigation

### 7.3 Screen Readers

- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`)
- ARIA labels on icon buttons: `aria-label="Export Progress"`
- Role attributes for dynamic content updates

### 7.4 Motion

- Respect `prefers-reduced-motion` media query (disable animations)

---

## 8. Design Assets

### 8.1 Track Maps (SVG)

- **Laguna Seca:** Simplified track outline with corner numbers and markers
- **Road Atlanta:** Same style
- Both will be used in theory and reference sections

### 8.2 Corner Diagrams (SVG)

- **Outside-Inside-Outside:** Animated line path
- **Early vs Late Apex:** Side-by-side comparison
- **Braking Zone:** Illustration of braking point, turn-in, apex

### 8.3 Icons

- All icons in a single SVG sprite sheet (or inline)
- 24x24px viewBox, scalable

### 8.4 Typography Examples

**Font Pairing:** Inter (Google Fonts) — clean, modern, excellent readability.

---

## 9. Implementation Notes

### 9.1 CSS Variables

```css
:root {
  --color-bg: #0a0a0f;
  --color-surface: #14141e;
  --color-surface-light: #1e1e2d;
  --color-text: #e8e8f0;
  --color-text-muted: #8888aa;
  --color-primary: #48dbfb;
  --color-primary-hover: #7fe5fa;
  --color-success: #2ecc71;
  --color-warning: #feca57;
  --color-danger: #ff6b6b;
  --color-border: #2a2a3e;
  --radius: 12px;
  --radius-sm: 8px;
  --spacing: 16px;
  --max-width: 800px;
  --font-family: 'Inter', system-ui, sans-serif;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
}
```

### 9.2 Component Classes

```css
/* Button */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-bg);
  border: none;
  padding: 12px 32px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}
.btn-primary:hover {
  background: var(--color-primary-hover);
}
.btn-primary:active {
  transform: scale(0.98);
}

/* Card */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow);
}
```

---

## 10. Summary

| Aspect | Decision |
|--------|----------|
| **Theme** | Dark default (light optional) |
| **Typography** | Inter, system font stack |
| **Colors** | Cyan accent on dark blue-gray |
| **Layout** | Centered, max-width 800px |
| **Components** | Clean cards, clear buttons, intuitive progress |
| **Responsive** | Mobile-first, breakpoints at 768px, 1024px |
| **Accessibility** | WCAG AA compliant |
| **Animations** | Subtle, purposeful, respects reduced-motion |

---

**DESIGN.md Complete.** Ready for front-end implementation.