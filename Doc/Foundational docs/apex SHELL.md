# APEX - Sim Racing Coach

## APP SHELL.md

---

## 1. Shell Overview

### 1.1 Purpose

The Application Shell (App Shell) is the persistent UI structure that wraps all content pages in Apex. It provides navigation, branding, and session context while maintaining a clean, focused experience for the user.

### 1.2 Design Philosophy

- **Content-first:** Shell recedes to let content shine
- **Sidebar-driven:** Navigation is accessible but unobtrusive
- **Session-aware:** Shell adapts during active sessions
- **Mobile-friendly:** Adapts gracefully to all screen sizes
- **Clean & minimal:** No clutter, no distractions

---

## 2. Shell Components

Based on your selections, here is the complete App Shell architecture:

| Component | Selected Option |
|-----------|-----------------|
| Navigation Structure | B) Sidebar Navigation |
| Progress Visibility | C) Dashboard Only |
| Session Context | E) Step-by-Step Progress Bar |
| Mobile Responsiveness | E) Adaptive Tabs |
| Quick Actions | E) Minimal Only |
| Logo Placement | C) Top-Left with Tagline |
| Footer Content | A) No Footer |
| Shell Animations | B) Fade Transition |

---

## 3. Shell Architecture

### 3.1 Desktop Layout (≥ 1024px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ┌──────┐  ┌─────────────────────────────────────────────────────────┐    │
│  │      │  │  🏁 APEX                    │    │
│  │ LOGO │  │  Your Sim Racing Coach      │    │
│  │      │  │                               │    │
│  ├──────┤  │                               │    │
│  │      │  │                               │    │
│  │  📊  │  │                               │    │
│  │ Dash │  │                               │    │
│  │      │  │           CONTENT             │    │
│  │ 📈  │  │                               │    │
│  │ Prog │  │                               │    │
│  │      │  │                               │    │
│  │ 📝  │  │                               │    │
│  │ Jour │  │                               │    │
│  │      │  │                               │    │
│  │ 📚  │  │                               │    │
│  │ Ref  │  │                               │    │
│  │      │  │                               │    │
│  ├──────┤  │                               │    │
│  │ 🔒  │  │                               │    │
│  │ (ex) │  │                               │    │
│  └──────┘  └─────────────────────────────────────────────────────────┘    │
│             SIDEBAR (collapsible)     MAIN CONTENT AREA                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Mobile Layout (< 768px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  🏁 APEX                    [☰]  │
│  │  Your Sim Racing Coach      [📤]  │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │                                                                      │ │
│  │                                                                      │ │
│  │                     CONTENT                                          │ │
│  │                                                                      │ │
│  │                                                                      │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  [📊]  [📈]  [📝]  [📚]  [🔒]  │
│  │  Dash  Prog  Jour  Ref   (ex) │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Session Mode (Active Session)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ┌──────┐  ┌─────────────────────────────────────────────────────────┐    │
│  │      │  │  ← Back              Module 1 › Session 8               │    │
│  │ LOGO │  │                                                         │    │
│  │      │  │  Road Atlanta Mastery                                   │    │
│  ├──────┤  │  🎯 Consistency  🚗 MX-5  🏁 Road Atlanta  ⏱️ 1:41.0  │    │
│  │      │  │                                                         │    │
│  │ 📊  │  │  ●━━━●━━━○━━━○━━━○                                     │    │
│  │ Dash │  │  Theory  Practice  Practical  Challenge  Assessment    │    │
│  │      │  │                                                         │    │
│  │ 📈  │  │  ┌─────────────────────────────────────────────────────┐ │    │
│  │ Prog │  │  │                                                   │ │    │
│  │      │  │  │              SESSION CONTENT                      │ │    │
│  │ 📝  │  │  │                                                   │ │    │
│  │ Jour │  │  │                                                   │ │    │
│  │      │  │  └─────────────────────────────────────────────────────┘ │    │
│  │ 📚  │  │                                                         │    │
│  │ Ref  │  │  [← Previous]  [Continue →]                            │    │
│  │      │  │                                                         │    │
│  ├──────┤  │                                                         │    │
│  │ 🔒  │  │                                                         │    │
│  └──────┘  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Component Specifications

### 4.1 Sidebar Navigation

**Behavior:**
- Collapsible sidebar on desktop (default: expanded)
- Can be collapsed to icons-only view
- On mobile, sidebar becomes a bottom tab bar

**Desktop Sidebar (Expanded):**

```
┌──────────────────────────────────────────┐
│  🏁 APEX                                 │  ← Logo Section
│  Your Sim Racing Coach                  │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │ 📊  Dashboard                     │ │  ← Active state
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │ 📈  Progress                      │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │ 📝  Journal                       │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │ 📚  Reference                     │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │ 🔒  Exports & Settings            │ │  ← Bottom section
│  └────────────────────────────────────┘ │
│                                          │
│  Version 1.0.0                          │  ← Version info
└──────────────────────────────────────────┘
```

**Desktop Sidebar (Collapsed - Icons Only):**

```
┌────────┐
│ 🏁     │  ← Logo (icon only)
│        │
│ 📊     │  ← Active
│ 📈     │
│ 📝     │
│ 📚     │
│        │
│ 🔒     │
│        │
│ v1.0   │
└────────┘
```

**CSS Implementation:**

```css
/* Sidebar Container */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, transform 0.3s ease;
  z-index: 100;
  overflow: hidden;
}

/* Collapsed State */
.sidebar.collapsed {
  width: 64px;
}

.sidebar.collapsed .nav-label {
  display: none;
}

.sidebar.collapsed .tagline {
  display: none;
}

/* Logo Section */
.sidebar-header {
  padding: 20px 16px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 72px;
}

.logo-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

.tagline {
  font-size: 11px;
  color: var(--color-text-muted);
  font-weight: 400;
  display: block;
  margin-top: -2px;
}

/* Navigation Links */
.nav-links {
  flex: 1;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.15s ease;
  cursor: pointer;
}

.nav-link:hover {
  background: var(--color-surface-light);
  color: var(--color-text);
}

.nav-link.active {
  background: rgba(72, 219, 251, 0.12);
  color: var(--color-primary);
}

.nav-link .icon {
  font-size: 20px;
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.nav-link .nav-label {
  white-space: nowrap;
}

/* Bottom Section */
.nav-bottom {
  padding: 12px 8px;
  border-top: 1px solid var(--color-border);
}

.version {
  font-size: 11px;
  color: var(--color-text-muted);
  padding: 10px 12px;
  text-align: center;
}
```

---

### 4.2 Main Content Area

**Behavior:**
- Expands to fill remaining space
- Has padding to accommodate sidebar
- Fades in/out on page transitions

**Desktop Layout:**

```css
.main-content {
  margin-left: 240px; /* Matches sidebar width */
  padding: 24px 32px;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
}

.sidebar.collapsed ~ .main-content {
  margin-left: 64px;
}
```

**Session Mode Content:**

```css
.session-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}
```

---

### 4.3 Header Area (Inside Main Content)

**Behavior:**
- Top of main content area
- Shows page title and optional actions
- In session mode, shows progress bar

**Header Components:**

```html
<!-- Dashboard Header -->
<header class="page-header">
  <h1 class="page-title">Dashboard</h1>
  <!-- No quick actions visible -->
</header>

<!-- Session Header -->
<header class="session-header">
  <div class="session-breadcrumb">
    <button class="back-btn">← Back</button>
    <span>Module 1 › Session 8</span>
  </div>
  <h1 class="session-title">Road Atlanta Mastery</h1>
  <div class="session-meta">
    <span>🎯 Consistency</span>
    <span>🚗 MX-5</span>
    <span>🏁 Road Atlanta</span>
    <span>⏱️ 1:41.0</span>
  </div>
  
  <!-- Step Progress Bar -->
  <div class="step-progress">
    <div class="step completed">
      <span class="step-number">1</span>
      <span class="step-label">Theory</span>
    </div>
    <div class="step-line"></div>
    <div class="step active">
      <span class="step-number">2</span>
      <span class="step-label">Practice</span>
    </div>
    <div class="step-line"></div>
    <div class="step">
      <span class="step-number">3</span>
      <span class="step-label">Practical</span>
    </div>
    <div class="step-line"></div>
    <div class="step">
      <span class="step-number">4</span>
      <span class="step-label">Challenge</span>
    </div>
    <div class="step-line"></div>
    <div class="step">
      <span class="step-number">5</span>
      <span class="step-label">Assessment</span>
    </div>
  </div>
</header>
```

**Step Progress Bar CSS:**

```css
.step-progress {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 16px 0 8px 0;
  width: 100%;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  background: var(--color-border);
  color: var(--color-text-muted);
  transition: all 0.3s ease;
}

.step.completed .step-number {
  background: var(--color-success);
  color: var(--color-bg);
}

.step.active .step-number {
  background: var(--color-primary);
  color: var(--color-bg);
  box-shadow: 0 0 20px rgba(72, 219, 251, 0.3);
}

.step-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.step.completed .step-label {
  color: var(--color-text);
}

.step.active .step-label {
  color: var(--color-primary);
}

.step-line {
  flex: 1;
  height: 2px;
  background: var(--color-border);
  min-width: 20px;
}

.step-line.completed {
  background: var(--color-success);
}
```

---

### 4.4 Mobile Bottom Navigation

**Behavior:**
- Appears on screens < 768px
- Replaces sidebar
- Shows icons only (text hidden on very small screens)

```css
/* Mobile Bottom Navigation */
.mobile-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 8px 0 env(safe-area-inset-bottom);
  z-index: 100;
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 0;
  color: var(--color-text-muted);
  font-size: 10px;
  cursor: pointer;
  border: none;
  background: none;
  flex: 1;
}

.mobile-nav-item .icon {
  font-size: 24px;
}

.mobile-nav-item.active {
  color: var(--color-primary);
}

.mobile-nav-item .label {
  font-size: 10px;
  font-weight: 500;
}

/* Hide labels on very small screens */
@media (max-width: 420px) {
  .mobile-nav-item .label {
    display: none;
  }
}

/* Show mobile nav only on small screens */
@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
  .mobile-nav {
    display: flex;
  }
  .main-content {
    margin-left: 0;
    padding-bottom: 80px; /* Space for bottom nav */
  }
}
```

---

### 4.5 Page Transitions (Fade)

**Behavior:**
- 300ms fade transition between page changes
- Content fades out → page changes → content fades in

**CSS Implementation:**

```css
/* Page Container */
.page {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.page.fade-out {
  opacity: 0;
}

.page.fade-in {
  opacity: 1;
}
```

**JavaScript Implementation:**

```javascript
function navigateTo(page) {
  const current = document.querySelector('.page.active');
  const next = document.getElementById(page);
  
  // Fade out current
  current.classList.add('fade-out');
  current.classList.remove('active');
  
  setTimeout(() => {
    current.classList.remove('fade-out');
    current.style.display = 'none';
    
    // Show and fade in next
    next.style.display = 'block';
    next.classList.add('fade-in');
    next.classList.add('active');
    
    setTimeout(() => {
      next.classList.remove('fade-in');
    }, 300);
  }, 300);
}
```

---

## 5. Responsive Behavior

### 5.1 Breakpoints

| Breakpoint | Device | Sidebar | Content | Navigation |
|------------|--------|---------|---------|------------|
| ≥ 1024px | Desktop | Expanded (240px) | Normal | Sidebar |
| 768-1023px | Tablet | Collapsed (64px) | Normal | Sidebar (icons only) |
| < 768px | Mobile | Hidden | Full width | Bottom tabs |

### 5.2 Sidebar Toggle

**Desktop:**
- Toggle button at bottom of sidebar or header
- Click to expand/collapse
- State persisted in localStorage

```javascript
// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('collapsed');
  
  // Save state
  const isCollapsed = sidebar.classList.contains('collapsed');
  localStorage.setItem('sidebar_collapsed', isCollapsed);
}

// Restore state on load
document.addEventListener('DOMContentLoaded', () => {
  const isCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
  if (isCollapsed) {
    document.querySelector('.sidebar').classList.add('collapsed');
  }
});
```

**Mobile:**
- Sidebar hidden
- Bottom navigation shows
- No toggle needed

---

## 6. Accessibility

### 6.1 Keyboard Navigation

```html
<!-- Sidebar links should be focusable -->
<a href="#" class="nav-link" role="link" tabindex="0">
  <span class="icon">📊</span>
  <span class="nav-label">Dashboard</span>
</a>

<!-- Toggle button -->
<button 
  class="sidebar-toggle" 
  aria-label="Toggle navigation"
  aria-expanded="true"
>
  ☰
</button>
```

### 6.2 ARIA Labels

```html
<!-- Sidebar -->
<nav class="sidebar" role="navigation" aria-label="Main navigation">
  <!-- ... -->
</nav>

<!-- Mobile Nav -->
<nav class="mobile-nav" role="navigation" aria-label="Mobile navigation">
  <!-- ... -->
</nav>

<!-- Progress Bar -->
<div class="step-progress" role="progressbar" aria-valuenow="2" aria-valuemax="5">
  <!-- ... -->
</div>
```

### 6.3 Focus Management

```css
/* Focus indicators */
.nav-link:focus-visible,
.mobile-nav-item:focus-visible,
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 7. Performance Considerations

### 7.1 Critical Path

```
1. HTML Shell
2. Critical CSS (sidebar, layout)
3. JavaScript (navigation, state)
4. Page Content (lazy-loaded as needed)
5. Non-critical CSS (session view, charts)
```

### 7.2 Caching

- Sidebar state stored in localStorage
- Content pages can be cached with Service Worker

---

## 8. Code Implementation

### 8.1 HTML Shell Template

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apex - Sim Racing Coach</title>
  <link rel="stylesheet" href="css/shell.css">
  <link rel="stylesheet" href="css/theme.css">
</head>
<body>
  <!-- Sidebar -->
  <aside class="sidebar" role="navigation" aria-label="Main navigation">
    <div class="sidebar-header">
      <span class="logo-icon">🏁</span>
      <div class="logo-text">
        APEX
        <span class="tagline">Your Sim Racing Coach</span>
      </div>
    </div>
    
    <nav class="nav-links">
      <a href="#" class="nav-link active" data-page="dashboard">
        <span class="icon">📊</span>
        <span class="nav-label">Dashboard</span>
      </a>
      <a href="#" class="nav-link" data-page="progress">
        <span class="icon">📈</span>
        <span class="nav-label">Progress</span>
      </a>
      <a href="#" class="nav-link" data-page="journal">
        <span class="icon">📝</span>
        <span class="nav-label">Journal</span>
      </a>
      <a href="#" class="nav-link" data-page="reference">
        <span class="icon">📚</span>
        <span class="nav-label">Reference</span>
      </a>
    </nav>
    
    <div class="nav-bottom">
      <a href="#" class="nav-link" data-page="settings">
        <span class="icon">🔒</span>
        <span class="nav-label">Settings</span>
      </a>
      <div class="version">v1.0.0</div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="main-content" id="mainContent">
    <!-- Pages -->
    <div class="page active" id="dashboard">
      <!-- Dashboard content -->
    </div>
    
    <div class="page" id="progress" style="display:none;">
      <!-- Progress content -->
    </div>
    
    <div class="page" id="journal" style="display:none;">
      <!-- Journal content -->
    </div>
    
    <div class="page" id="reference" style="display:none;">
      <!-- Reference content -->
    </div>
    
    <div class="page" id="session" style="display:none;">
      <!-- Session content -->
    </div>
  </main>

  <!-- Mobile Bottom Navigation -->
  <nav class="mobile-nav" role="navigation" aria-label="Mobile navigation">
    <button class="mobile-nav-item active" data-page="dashboard">
      <span class="icon">📊</span>
      <span class="label">Home</span>
    </button>
    <button class="mobile-nav-item" data-page="progress">
      <span class="icon">📈</span>
      <span class="label">Progress</span>
    </button>
    <button class="mobile-nav-item" data-page="journal">
      <span class="icon">📝</span>
      <span class="label">Journal</span>
    </button>
    <button class="mobile-nav-item" data-page="reference">
      <span class="icon">📚</span>
      <span class="label">Ref</span>
    </button>
  </nav>

  <script src="js/shell.js"></script>
</body>
</html>
```

### 8.2 Shell JavaScript

```javascript
// shell.js
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navLinks = document.querySelectorAll('.nav-link[data-page]');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item[data-page]');
  const pages = {
    dashboard: document.getElementById('dashboard'),
    progress: document.getElementById('progress'),
    journal: document.getElementById('journal'),
    reference: document.getElementById('reference'),
    session: document.getElementById('session')
  };
  
  let currentPage = 'dashboard';
  
  // Navigation function
  function navigateTo(pageId) {
    if (pageId === currentPage) return;
    if (!pages[pageId]) return;
    
    const current = pages[currentPage];
    const next = pages[pageId];
    
    // Fade out current
    current.classList.add('fade-out');
    
    setTimeout(() => {
      current.style.display = 'none';
      current.classList.remove('active');
      current.classList.remove('fade-out');
      
      // Show next with fade in
      next.style.display = 'block';
      next.classList.add('fade-in');
      next.classList.add('active');
      
      setTimeout(() => {
        next.classList.remove('fade-in');
      }, 300);
    }, 300);
    
    // Update nav states
    updateNavState(pageId);
    currentPage = pageId;
    
    // Update URL hash
    window.location.hash = pageId;
  }
  
  // Update navigation active states
  function updateNavState(pageId) {
    // Sidebar
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.page === pageId);
    });
    
    // Mobile nav
    mobileNavItems.forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageId);
    });
  }
  
  // Event listeners
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });
  
  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      navigateTo(item.dataset.page);
    });
  });
  
  // Restore session state
  function restoreSession() {
    const currentSession = store.getCurrentSession();
    if (currentSession && !currentSession.completed) {
      // Show session page with progress
      document.querySelector('.step-progress').style.display = 'flex';
    }
  }
  
  // Handle hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && pages[hash]) {
    navigateTo(hash);
  }
  
  // Sidebar toggle (desktop only)
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('collapsed');
    });
  }
});
```

---

## 9. Summary

### 9.1 Component Decisions

| Component | Decision |
|-----------|----------|
| **Navigation** | Collapsible sidebar with icon + label |
| **Progress** | Dashboard only (clean shell) |
| **Session Context** | Step-by-step progress bar |
| **Mobile** | Bottom navigation, icons only |
| **Quick Actions** | None in shell (on dashboard) |
| **Logo** | Top-left with tagline |
| **Footer** | No footer |
| **Transitions** | Fade (300ms) |

### 9.2 Key Benefits

- **Content-focused:** Shell doesn't compete for attention
- **Progressive disclosure:** Sidebar collapses to save space
- **Session awareness:** Step progress keeps users oriented
- **Mobile-first:** Bottom navigation is thumb-friendly
- **Minimal friction:** No visible quick actions to distract

---

**APP SHELL.md Complete.** Ready for development implementation.