# Task Plan: Apex Sim Racing Coach Webapp Initiation

## Objective
Build and initiate **Apex**, a premium, client-only static web application for beginner sim racing coaching based on *Going Faster!*, designed specifically for Forza Motorsport 2023 + Moza R3 wheel setup. All data lives in `localStorage` with zero backend dependencies.

## Key Features & Architecture
1. **App Shell**: Desktop collapsible sidebar (`#0a0a0f` dark mode theme) + mobile adaptive bottom navigation tab bar (<768px). Smooth page fade transitions.
2. **Landing & Onboarding**: Hero section with "Start Your First Session", equipment setup check (Forza version, wheel type), privacy warning banner.
3. **Curriculum System**: Structured 30-day Modules (Module 1: The Line with 12 complete sessions, Modules 2-4 expandable structure).
4. **Interactive Session Flow (5 Steps)**:
   - Step 1: Theory (interactive SVG corner path diagrams with radius/speed calculations).
   - Step 2: Practice Drills (Level picker: Easy 🟢, Medium 🟡, Hard 🔴).
   - Step 3: Practical Driving (Skill-first focus guide, corner-by-corner checklist).
   - Step 4: Challenge Phase (Specific missions & user input).
   - Step 5: Assessment & Guided Reflection (1-5 star skill ratings, free text notes, lap times).
5. **Progress & Analytics**:
   - Custom Canvas/SVG Lap Time Trend Chart.
   - Pentagonal 5-Axis Skill Radar Chart (Braking, Apex, Throttle, Control, Confidence).
   - Streak counter, overall score, achievement badges system.
6. **Reflection Journal & Reference Library**: Searchable journal entries, categorized racing theory library.
7. **Data Persistence & Export/Import**: `localStorage` store engine, full JSON backup export & restore.

## Proposed File Structure
- `index.html`: Main SPA layout structure, headers, views, modals, and templates.
- `DESIGN.md`: Project Design Tokens & Specs (copied/updated from Doc/apex DESIGN.md).
- `css/main.css`: Core design system, tokens, typography, dark mode rules.
- `css/shell.css`: Sidebar, mobile navbar, responsive grid system, step bar.
- `css/components.css`: Buttons, cards, form inputs, stars, badges, diagrams.
- `js/state.js`: `ApexStore` class managing localStorage state, streaks, scores, export/import.
- `js/content.js`: Module & session curriculum data, articles, drill specifications.
- `js/diagrams.js`: Interactive SVG diagram builder for racing lines and corner paths.
- `js/charts.js`: Lightweight HTML5 Canvas renderer for trend lines and radar charts.
- `js/session.js`: Session step controller, timer, assessment logic, and completion trigger.
- `js/dashboard.js`: Dashboard UI manager, recap cards, progress metrics.
- `js/progress.js`: Progress page views, chart initialization, achievements gallery.
- `js/journal.js`: Journal listing, search filter, reflection manager.
- `js/reference.js`: Theory library reader and search index.
- `js/export.js`: File download/upload helpers for JSON backup.
- `js/app.js`: SPA routing, view switcher, event initialization.

## Verification Plan
1. Launch local dev server or test static files locally.
2. Verify onboarding flow, session step navigation, interactive SVG diagrams, rating forms, achievement triggers, canvas charts, and data backup JSON export/import.
