# APEX - Sim Racing Coach

## Technical Requirements Document (TRD)

---

## 1. Document Overview

### 1.1 Purpose

This Technical Requirements Document (TRD) specifies the technical implementation of **Apex**, a client-only static web application for sim racing education. It translates the Product Requirements Document (PRD) into actionable technical specifications for developers.

### 1.2 Scope

- Frontend-only static web application
- No backend infrastructure
- No authentication or user accounts
- localStorage for data persistence
- Deployable to any static hosting service

### 1.3 Constraints

| Constraint | Specification |
|------------|---------------|
| Backend | ❌ None |
| APIs | ❌ None |
| Database | ❌ None |
| Authentication | ❌ None |
| Data Storage | `localStorage` only |
| Hosting | Static HTML/CSS/JS |
| Bundle Size | Target < 500KB (initial load) |
| Offline Support | Service Worker (optional) |

---

## 2. Platform Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER'S BROWSER                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Static Web Application                  │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │   HTML      │  │    CSS      │  │  JavaScript  │ │   │
│  │  │  (Content   │  │   (Theme,   │  │  (Logic,     │ │   │
│  │  │  Structure) │  │  Responsive)│  │   State)     │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │          localStorage / IndexedDB            │   │   │
│  │  │  • User Progress                            │   │   │
│  │  │  • Session History                          │   │   │
│  │  │  • Achievements                             │   │   │
│  │  │  • Preferences                              │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Static Hosting  │
                    │ GitHub Pages /   │
                    │ Netlify / Vercel │
                    └─────────────────┘
```

### 2.2 Data Flow

```
User Action → JavaScript Logic → localStorage Update → UI Update

Data Read Flow:
localStorage → Parse JSON → Application State → Render UI

Data Write Flow:
UI Input → Validate → Merge into State → Stringify → localStorage.setItem()
```

---

## 3. Technology Stack

### 3.1 Core Technologies

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Markup** | HTML5 | Semantic structure, accessibility |
| **Styling** | CSS3 | Custom properties, flexbox, grid, responsive |
| **Logic** | Vanilla JavaScript (ES6+) | No framework overhead, direct DOM control |
| **Data** | localStorage | Browser-native, 5MB+ capacity |
| **Icons** | SVG inline | Self-contained, scalable |
| **Charts** | Canvas API or Chart.js CDN | Lightweight visualization |

### 3.2 Optional Enhancements

| Enhancement | Technology | When to Use |
|-------------|------------|-------------|
| **Offline Support** | Service Worker | Phase 2 |
| **Interactive Diagrams** | SVG + JavaScript | MVP |
| **Dark Theme** | CSS Custom Properties | MVP |
| **Mobile Support** | CSS Media Queries | MVP |

### 3.3 No External Dependencies (Recommended)

```
External Dependencies: NONE
CDN Dependencies: NONE
NPM Packages: NONE
Build Tools: NONE

Recommended for simplicity, security, and speed.
```

### 3.4 If Using a Framework (Optional)

If framework approach is preferred for maintainability:

```
Framework: Vue.js 3 (CDN) or React (CDN)
State: Pinia (Vue) or Zustand (React) — but localStorage persists
Build: Vite (for development) but output is static
```

**Recommendation:** Use Vanilla JS for simplicity, zero dependencies, and smallest bundle size.

---

## 4. Data Model

### 4.1 localStorage Keys

| Key | Description | Size Estimate |
|-----|-------------|---------------|
| `apex_progress` | Primary user progress data | ~10-50KB |
| `apex_settings` | User preferences | ~1KB |
| `apex_journal` | Reflection entries (optional separate) | ~10-50KB |

### 4.2 Core Data Structure

```javascript
// apex_progress
{
  // Current state
  currentModule: 1,          // 1-4
  currentSession: 1,         // 1-12
  currentStep: 'theory',     // 'theory' | 'practice' | 'practical' | 'challenge' | 'assessment'
  
  // Completion tracking
  completedSessions: [       // Array of session IDs
    '1-1', '1-2', '1-3'
  ],
  completedModules: [1],     // Modules fully completed
  
  // Session history (keyed by module-session)
  sessions: {
    '1-1': {
      completed: true,
      dateStarted: '2026-07-25T14:30:00.000Z',
      dateCompleted: '2026-07-25T15:15:00.000Z',
      timeSpent: 2700, // seconds (45 min)
      
      // Performance data
      lapTime: 92.5,        // seconds
      sectorTimes: [30.2, 31.1, 31.2],
      targetLapTime: 110.0, // from session config
      
      // Self-ratings (1-5)
      ratings: {
        brakeConsistency: 4,
        apexAccuracy: 3,
        throttleControl: 4,
        overallControl: 3,
        confidence: 4
      },
      
      // Challenges
      challengeCompleted: true,
      challengeType: 'mechanical', // 'mechanical' | 'technique' | 'creative'
      
      // Free text
      notes: 'Felt good, struggled with Turn 6 apex',
      reflection: 'I need to look further ahead...',
      
      // Incident tracking
      spinCount: 1,
      offTrackCount: 2,
      
      // Session metadata
      car: 'Mazda MX-5',
      track: 'Laguna Seca'
    }
  },
  
  // Achievements
  achievements: [
    { id: 'first_session', earned: '2026-07-25T15:15:00.000Z' },
    { id: 'the_completer', earned: '2026-08-01T14:30:00.000Z' }
  ],
  
  // Streak tracking
  currentStreak: 3,          // Consecutive weeks with 3+ sessions
  longestStreak: 5,
  lastSessionDate: '2026-07-25T15:15:00.000Z',
  
  // Module progress scores (calculated per module)
  moduleScores: {
    '1': 72,  // 0-100
    '2': null // Not started
  },
  
  // Export metadata
  lastExported: '2026-07-25T15:20:00.000Z',
  version: '1.0.0'
}
```

### 4.3 Settings Structure

```javascript
// apex_settings
{
  theme: 'dark',           // 'dark' | 'light'
  defaultCar: 'Mazda MX-5',
  defaultTrack: 'Laguna Seca',
  showNotifications: true,
  autoAdvance: true,       // Auto-advance through session steps
  exportReminderInterval: 7 // Days between backup reminders
}
```

### 4.4 Journal Structure (Optional Separate)

```javascript
// apex_journal
{
  entries: [
    {
      id: 'journal-1',
      sessionId: '1-1',
      date: '2026-07-25T15:15:00.000Z',
      confidence: 4,
      hardestPart: 'Finding the apex at Turn 6',
      clickMoment: 'When I hit the perfect apex at Turn 2',
      nextFocus: 'Earlier braking at Turn 1'
    }
  ]
}
```

---

## 5. Application State Management

### 5.1 State Store (Vanilla JS)

```javascript
// state.js
class ApexStore {
  constructor() {
    this.data = this.load();
    this.listeners = [];
  }
  
  load() {
    try {
      const raw = localStorage.getItem('apex_progress');
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to load data:', e);
    }
    return this.getDefaultData();
  }
  
  save() {
    try {
      localStorage.setItem('apex_progress', JSON.stringify(this.data));
      this.notifyListeners();
    } catch (e) {
      console.error('Failed to save data:', e);
      this.handleStorageError(e);
    }
  }
  
  getDefaultData() {
    return {
      currentModule: 1,
      currentSession: 1,
      currentStep: 'theory',
      completedSessions: [],
      completedModules: [],
      sessions: {},
      achievements: [],
      currentStreak: 0,
      longestStreak: 0,
      lastSessionDate: null,
      moduleScores: { '1': null, '2': null, '3': null, '4': null },
      lastExported: null,
      version: '1.0.0'
    };
  }
  
  // -- Getters --
  getSession(moduleId, sessionId) {
    const key = `${moduleId}-${sessionId}`;
    return this.data.sessions[key] || null;
  }
  
  getCurrentSession() {
    return this.getSession(this.data.currentModule, this.data.currentSession);
  }
  
  isSessionComplete(moduleId, sessionId) {
    const key = `${moduleId}-${sessionId}`;
    return this.data.completedSessions.includes(key);
  }
  
  getModuleProgress(moduleId) {
    const sessions = this.getModuleSessions(moduleId);
    const completed = sessions.filter(s => 
      this.isSessionComplete(moduleId, s.id)
    );
    return {
      total: sessions.length,
      completed: completed.length,
      percentage: (completed.length / sessions.length) * 100
    };
  }
  
  // -- Setters --
  completeSession(moduleId, sessionId, sessionData) {
    const key = `${moduleId}-${sessionId}`;
    if (!this.data.completedSessions.includes(key)) {
      this.data.completedSessions.push(key);
    }
    this.data.sessions[key] = {
      ...this.data.sessions[key],
      ...sessionData,
      completed: true,
      dateCompleted: new Date().toISOString()
    };
    this.updateStreak();
    this.save();
  }
  
  updateCurrentStep(step) {
    this.data.currentStep = step;
    this.save();
  }
  
  // -- Streak Calculation --
  updateStreak() {
    // Implementation: Check if session completed within last 7 days
    // If yes, increment streak; if no, reset
  }
  
  // -- Export --
  exportData() {
    const data = {
      version: '1.0.0',
      exported: new Date().toISOString(),
      progress: this.data,
      settings: this.loadSettings(),
      journal: this.loadJournal()
    };
    return JSON.stringify(data, null, 2);
  }
  
  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      // Validate structure
      if (data.version && data.progress) {
        this.data = data.progress;
        this.save();
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  
  // -- Listeners --
  onChange(callback) {
    this.listeners.push(callback);
  }
  
  notifyListeners() {
    this.listeners.forEach(fn => fn(this.data));
  }
}
```

---

## 6. Module & Session Content Schema

### 6.1 Content Structure

All content is statically defined in JavaScript/JSON and bundled with the application.

```javascript
// content.js
const CONTENT = {
  modules: [
    {
      id: 1,
      title: 'The Line',
      subtitle: 'Finding the Fastest Path',
      description: 'Before you can go fast, you must know where to go...',
      weeks: [
        {
          week: 1,
          title: 'Understanding the Line',
          sessions: [1, 2, 3]
        }
      ],
      sessions: [
        {
          id: 1,
          title: 'What is The Line?',
          focus: 'Understanding the racing line concept',
          car: 'Mazda MX-5',
          track: 'Laguna Seca',
          targetLapTime: 110.0, // seconds (1:50.0)
          difficulty: 1, // 1-5
          
          theory: {
            title: 'The Single Most Important Skill',
            content: '...', // 500-800 words
            keyTakeaways: [
              'Speed is directly related to radius',
              'The line determines both cornering and straightaway speed',
              'Outside-inside-outside is the fastest path'
            ],
            diagrams: [
              {
                type: 'interactive',
                id: 'corner-path-comparison',
                caption: 'Choose your path through the corner'
              }
            ]
          },
          
          practice: {
            drills: [
              {
                title: 'Find the Markers',
                description: 'Drive slowly (2nd gear) through Turn 2 only...',
                repetitions: 5,
                focus: 'Identify turn-in, apex, track-out points'
              }
            ]
          },
          
          practical: {
            description: 'Full laps focusing on hitting reference markers',
            laps: 5,
            focus: 'Reference point accuracy'
          },
          
          challenge: {
            type: 'mechanical', // 'mechanical' | 'technique' | 'creative'
            title: 'Find Your Reference Points',
            description: 'Identify 3 reference points per corner...',
            successCriteria: 'List all reference points in notes'
          },
          
          assessment: {
            questions: [
              { id: 'brakeConsistency', type: 'rating', label: 'Brake Consistency', scale: 5 },
              { id: 'apexAccuracy', type: 'rating', label: 'Apex Accuracy', scale: 5 },
              { id: 'throttleControl', type: 'rating', label: 'Throttle Control', scale: 5 },
              { id: 'overallControl', type: 'rating', label: 'Overall Control', scale: 5 },
              { id: 'confidence', type: 'rating', label: 'Confidence', scale: 5 },
              { 
                id: 'reflection', 
                type: 'text', 
                label: 'What did you learn today?',
                placeholder: 'Write your reflection here...'
              }
            ]
          }
        }
        // ... 11 more sessions
      ]
    }
    // ... 3 more modules
  ]
};
```

### 6.2 Interactive Diagrams

```javascript
// diagrams.js
const DIAGRAMS = {
  'corner-path-comparison': {
    type: 'corner-comparison',
    title: 'Choose Your Path Through the Corner',
    options: [
      {
        id: 'inside',
        label: 'Inside Line',
        radius: 103, // feet
        speed: 39.3, // mph
        color: '#ff6b6b'
      },
      {
        id: 'outside',
        label: 'Outside Line',
        radius: 130,
        speed: 44.1,
        color: '#feca57'
      },
      {
        id: 'racing',
        label: 'Racing Line',
        radius: 195,
        speed: 54.0,
        color: '#48dbfb'
      }
    ]
  }
};
```

---

## 7. UI Component Specifications

### 7.1 Page Structure

```
apex/
├── index.html              # Landing / Dashboard
├── session.html            # Active session view
├── progress.html           # Progress dashboard
├── journal.html            # Reflection journal
├── reference.html          # Reference library
├── css/
│   ├── main.css            # Global styles
│   ├── theme.css           # Dark/light themes
│   ├── components.css      # UI components
│   └── responsive.css      # Mobile/tablet styles
├── js/
│   ├── app.js              # Application entry
│   ├── state.js            # State management
│   ├── content.js          # Module/session content
│   ├── diagrams.js         # Interactive diagrams
│   ├── charts.js           # Progress visualizations
│   ├── session.js          # Session flow logic
│   ├── dashboard.js        # Dashboard rendering
│   ├── export.js           # Import/export functionality
│   └── service-worker.js   # Offline support
├── assets/
│   ├── diagrams/           # SVG diagrams
│   ├── tracks/             # Track map images
│   └── icons/              # SVG icons
└── sw.js                   # Service worker registration
```

### 7.2 Component Definitions

#### 7.2.1 Landing Page

```html
<!-- index.html -->
<section id="landing">
  <header>
    <div class="logo">🏁 APEX</div>
    <p class="tagline">Your Structured Path to Sim Racing Confidence</p>
  </header>
  
  <main>
    <div class="hero">
      <p class="description">
        Learn the techniques from <em>Going Faster!</em>
        applied to Forza Motorsport 2023 + Moza R3
      </p>
      <div class="features">
        <span>⏱️ 45 min sessions</span>
        <span>📅 3 per week</span>
        <span>📚 4 modules</span>
        <span>🎯 12 sessions each</span>
      </div>
      <button id="startBtn" class="btn-primary">
        🚀 Start Your First Session
      </button>
    </div>
    
    <div class="data-warning">
      ⚠️ Progress is stored locally in this browser.
      No account required. Your data stays yours.
      <a href="#" id="learnMore">Learn More</a>
    </div>
    
    <div class="returning-user" style="display:none">
      <p>Welcome back!</p>
      <button id="continueBtn">▶ Continue Where You Left Off</button>
    </div>
  </main>
</section>
```

#### 7.2.2 Dashboard

```html
<!-- dashboard view -->
<section id="dashboard" style="display:none">
  <header>
    <div class="logo">🏁 APEX</div>
    <nav>
      <button class="nav-btn active" data-view="dashboard">Dashboard</button>
      <button class="nav-btn" data-view="progress">Progress</button>
      <button class="nav-btn" data-view="journal">Journal</button>
      <button class="nav-btn" data-view="reference">Reference</button>
    </nav>
    <div class="user-actions">
      <button class="icon-btn" id="exportBtn" title="Export Progress">📤</button>
      <button class="icon-btn" id="importBtn" title="Import Progress">📥</button>
    </div>
  </header>
  
  <main>
    <!-- Progress Overview -->
    <div class="overview-card">
      <div class="module-info">
        <h2 id="moduleTitle">Module 1: The Line</h2>
        <div class="progress-bar">
          <div class="progress-fill" id="moduleProgress" style="width:67%"></div>
        </div>
        <span id="sessionCount">8/12 Sessions</span>
      </div>
      <div class="score-display">
        <div class="score">72</div>
        <div class="score-label">Overall Score</div>
      </div>
      <div class="confidence-display">
        <span class="stars" id="confidenceStars">★★★★☆</span>
        <span class="label">Confidence</span>
      </div>
    </div>
    
    <!-- Continue Button -->
    <button class="btn-primary continue-btn" id="continueSession">
      ▶ Continue Session 9
    </button>
    
    <!-- Last Session Recap -->
    <div class="recap-card">
      <h3>Last Session Recap</h3>
      <div class="recap-grid">
        <div class="recap-item">
          <span class="label">Best Lap</span>
          <span class="value" id="lastLap">1:41.2</span>
        </div>
        <div class="recap-item">
          <span class="label">Target</span>
          <span class="value" id="lastTarget">1:41.0</span>
        </div>
        <div class="recap-item">
          <span class="label">Confidence</span>
          <span class="value" id="lastConfidence">4/5</span>
        </div>
      </div>
      <div class="recap-notes" id="lastNotes">
        "Felt much more consistent..."
      </div>
    </div>
    
    <!-- Quick Links -->
    <div class="quick-links">
      <button class="link-btn" data-view="module-guide">📖 Module Guide</button>
      <button class="link-btn" data-view="reference">📚 Reference Library</button>
      <button class="link-btn" data-view="journal">📝 Journal</button>
    </div>
  </main>
</section>
```

#### 7.2.3 Session View

```html
<!-- session.html -->
<section id="session" style="display:none">
  <header>
    <button class="back-btn" id="sessionBack">← Back</button>
    <div class="session-breadcrumb">
      <span id="moduleLabel">Module 1: The Line</span>
      <span>›</span>
      <span id="sessionLabel">Session 8: Road Atlanta Mastery</span>
    </div>
  </header>
  
  <main>
    <!-- Session Info -->
    <div class="session-header">
      <h1 id="sessionTitle">Road Atlanta Mastery</h1>
      <div class="session-meta">
        <span class="meta-item">🎯 Focus: <span id="sessionFocus">Consistency</span></span>
        <span class="meta-item">🚗 Car: <span id="sessionCar">Mazda MX-5</span></span>
        <span class="meta-item">🏁 Track: <span id="sessionTrack">Road Atlanta</span></span>
        <span class="meta-item">⏱️ Target: <span id="sessionTarget">1:41.0</span></span>
        <span class="meta-item">📊 Difficulty: <span id="sessionDifficulty">★★★☆☆</span></span>
        <span class="meta-item">⏱️ Time: 45 min</span>
      </div>
    </div>
    
    <!-- Step Progress -->
    <div class="step-progress">
      <div class="step completed">1. Theory</div>
      <div class="step active">2. Practice</div>
      <div class="step">3. Practical</div>
      <div class="step">4. Challenge</div>
      <div class="step">5. Assessment</div>
    </div>
    
    <!-- Step Content -->
    <div id="stepContent" class="step-content">
      <!-- Dynamically rendered based on current step -->
    </div>
    
    <!-- Navigation -->
    <div class="step-navigation">
      <button class="btn-secondary" id="stepPrev" disabled>Previous</button>
      <button class="btn-primary" id="stepNext">Continue →</button>
    </div>
  </main>
</section>
```

### 7.3 CSS Architecture

```css
/* theme.css - CSS Custom Properties */
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
  --radius: 12px;
  --spacing: 16px;
  --max-width: 800px;
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Dark theme (default) */
body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-family);
  line-height: 1.6;
  margin: 0;
  padding: var(--spacing);
}

/* Light theme override */
body.light-theme {
  --color-bg: #f0f0f5;
  --color-surface: #ffffff;
  --color-surface-light: #f5f5fa;
  --color-text: #1a1a2e;
  --color-text-muted: #666688;
}
```

---

## 8. Session Flow Logic

### 8.1 Step Progression

```javascript
// session.js
class SessionController {
  constructor(moduleId, sessionId) {
    this.moduleId = moduleId;
    this.sessionId = sessionId;
    this.steps = ['theory', 'practice', 'practical', 'challenge', 'assessment'];
    this.currentStepIndex = 0;
    this.sessionData = this.loadExistingData() || {};
  }
  
  getContent() {
    return CONTENT.modules[this.moduleId - 1].sessions[this.sessionId - 1];
  }
  
  loadExistingData() {
    return store.getSession(this.moduleId, this.sessionId) || {};
  }
  
  getStepData(step) {
    const content = this.getContent();
    switch(step) {
      case 'theory': return content.theory;
      case 'practice': return content.practice;
      case 'practical': return content.practical;
      case 'challenge': return content.challenge;
      case 'assessment': return content.assessment;
      default: return null;
    }
  }
  
  renderStep(step) {
    const container = document.getElementById('stepContent');
    const data = this.getStepData(step);
    
    switch(step) {
      case 'theory':
        container.innerHTML = this.renderTheory(data);
        break;
      case 'practice':
        container.innerHTML = this.renderPractice(data);
        break;
      case 'practical':
        container.innerHTML = this.renderPractical(data);
        break;
      case 'challenge':
        container.innerHTML = this.renderChallenge(data);
        break;
      case 'assessment':
        container.innerHTML = this.renderAssessment(data);
        break;
    }
    
    this.updateProgress();
  }
  
  renderTheory(data) {
    return `
      <div class="theory-content">
        <h2>${data.title}</h2>
        <div class="theory-text">${this.markdownToHtml(data.content)}</div>
        <div class="key-takeaways">
          <h4>Key Takeaways</h4>
          <ul>
            ${data.keyTakeaways.map(t => `<li>✅ ${t}</li>`).join('')}
          </ul>
        </div>
        ${data.diagrams ? this.renderDiagrams(data.diagrams) : ''}
      </div>
    `;
  }
  
  renderAssessment(data) {
    return `
      <div class="assessment-content">
        <h2>Session Assessment</h2>
        <p>Rate your performance in today's session:</p>
        <form id="assessmentForm">
          ${data.questions.map(q => {
            if (q.type === 'rating') {
              return `
                <div class="rating-group">
                  <label>${q.label}</label>
                  <div class="rating-stars" data-question="${q.id}">
                    ${[1,2,3,4,5].map(i => 
                      `<span class="star" data-value="${i}">★</span>`
                    ).join('')}
                  </div>
                  <input type="hidden" name="${q.id}" value="0">
                </div>
              `;
            } else if (q.type === 'text') {
              return `
                <div class="text-group">
                  <label>${q.label}</label>
                  <textarea name="${q.id}" placeholder="${q.placeholder || ''}"></textarea>
                </div>
              `;
            }
          }).join('')}
          
          <div class="form-group">
            <label>Best Lap Time (seconds)</label>
            <input type="number" name="lapTime" step="0.1" placeholder="92.5">
          </div>
          
          <div class="form-group">
            <label>Notes</label>
            <textarea name="notes" placeholder="What worked? What didn't?"></textarea>
          </div>
          
          <button type="submit" class="btn-primary">Complete Session ✓</button>
        </form>
      </div>
    `;
  }
  
  completeSession(formData) {
    const sessionData = {
      ...formData,
      completed: true,
      dateCompleted: new Date().toISOString()
    };
    
    store.completeSession(this.moduleId, this.sessionId, sessionData);
    
    // Check for module completion
    if (this.isModuleComplete()) {
      this.showModuleComplete();
    } else {
      this.showNextSessionPrompt();
    }
  }
  
  isModuleComplete() {
    const sessions = CONTENT.modules[this.moduleId - 1].sessions;
    return sessions.every(s => 
      store.isSessionComplete(this.moduleId, s.id)
    );
  }
}
```

---

## 9. Progress Visualization

### 9.1 Lap Time Chart

```javascript
// charts.js
class LapTimeChart {
  constructor(canvasId, data) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.data = data;
    this.render();
  }
  
  render() {
    const { width, height } = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height || 200;
    
    const ctx = this.ctx;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = this.canvas.width - padding.left - padding.right;
    const chartHeight = this.canvas.height - padding.top - padding.bottom;
    
    // Draw background
    ctx.fillStyle = '#14141e';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#2a2a3e';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(this.canvas.width - padding.right, y);
      ctx.stroke();
    }
    
    // Draw data points
    const points = this.data.map((value, index) => ({
      x: padding.left + (index / (this.data.length - 1)) * chartWidth,
      y: padding.top + chartHeight - ((value / this.getMaxY()) * chartHeight)
    }));
    
    // Draw line
    ctx.strokeStyle = '#48dbfb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
    
    // Draw points
    points.forEach((p, i) => {
      ctx.fillStyle = '#48dbfb';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Labels
      ctx.fillStyle = '#8888aa';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`S${i+1}`, p.x, this.canvas.height - 5);
    });
  }
}
```

### 9.2 Skill Radar Chart

```javascript
class SkillRadar {
  constructor(canvasId, skills) {
    // skills: { brakeConsistency, apexAccuracy, throttleControl, overallControl, confidence }
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.skills = skills;
    this.render();
  }
  
  render() {
    const ctx = this.ctx;
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    
    const labels = ['Braking', 'Apex', 'Throttle', 'Control', 'Confidence'];
    const values = [
      this.skills.brakeConsistency || 0,
      this.skills.apexAccuracy || 0,
      this.skills.throttleControl || 0,
      this.skills.overallControl || 0,
      this.skills.confidence || 0
    ];
    const maxValue = 5;
    const angles = labels.map((_, i) => (i / labels.length) * 2 * Math.PI - Math.PI / 2);
    
    // Draw background grid
    ctx.strokeStyle = '#2a2a3e';
    ctx.lineWidth = 0.5;
    for (let ring = 1; ring <= 4; ring++) {
      const r = (radius / 4) * ring;
      ctx.beginPath();
      for (let i = 0; i <= labels.length; i++) {
        const angle = angles[i % angles.length];
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }
    
    // Draw axes
    angles.forEach(angle => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
      ctx.stroke();
    });
    
    // Draw data
    const dataPoints = values.map((val, i) => {
      const r = (val / maxValue) * radius;
      const angle = angles[i];
      return {
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle)
      };
    });
    
    ctx.fillStyle = 'rgba(72, 219, 251, 0.2)';
    ctx.strokeStyle = '#48dbfb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    dataPoints.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw labels
    ctx.fillStyle = '#e8e8f0';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    labels.forEach((label, i) => {
      const x = centerX + (radius + 20) * Math.cos(angles[i]);
      const y = centerY + (radius + 20) * Math.sin(angles[i]);
      ctx.fillText(label, x, y + 4);
    });
  }
}
```

---

## 10. Export/Import System

### 10.1 Export Functionality

```javascript
// export.js
function exportData() {
  const data = {
    version: '1.0.0',
    exported: new Date().toISOString(),
    progress: store.data,
    settings: store.loadSettings(),
    journal: store.loadJournal()
  };
  
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `apex_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  
  URL.revokeObjectURL(url);
  
  store.data.lastExported = new Date().toISOString();
  store.save();
}
```

### 10.2 Import Functionality

```javascript
function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      
      // Validate structure
      if (!data.version || !data.progress) {
        alert('Invalid backup file. Please check the file and try again.');
        return;
      }
      
      // Confirm import
      if (confirm('This will replace all current progress. Continue?')) {
        store.data = data.progress;
        if (data.settings) store.saveSettings(data.settings);
        if (data.journal) store.saveJournal(data.journal);
        store.save();
        location.reload(); // Refresh to show imported data
      }
    } catch (err) {
      alert('Failed to read file. Please check the file and try again.');
    }
  };
  reader.readAsText(file);
}
```

### 10.3 Data Warning Banner

```html
<div id="dataWarning" class="data-warning-banner">
  <div class="warning-content">
    <span class="warning-icon">⚠️</span>
    <span class="warning-text">
      Your progress is stored in this browser only.
      <a href="#" id="learnMoreLink">Learn More</a>
      <button id="exportNowBtn" class="btn-sm">Export Backup</button>
    </span>
    <button id="dismissWarning" class="btn-close">✕</button>
  </div>
</div>
```

```javascript
// Show warning on dashboard
function checkDataWarning() {
  const lastExport = store.data.lastExported;
  const settings = store.loadSettings();
  const interval = settings.exportReminderInterval || 7; // days
  
  if (!lastExport) {
    showWarning('You haven\'t exported your progress yet. Back up your data now!');
    return;
  }
  
  const daysSinceExport = (Date.now() - new Date(lastExport)) / (1000 * 60 * 60 * 24);
  if (daysSinceExport > interval) {
    showWarning(`It's been ${Math.floor(daysSinceExport)} days since your last backup. Export your data to stay safe!`);
  }
}
```

---

## 11. Offline Support (Service Worker)

### 11.1 Service Worker Registration

```javascript
// app.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered');
    })
    .catch(err => {
      console.log('Service Worker registration failed:', err);
    });
}
```

### 11.2 Service Worker Implementation

```javascript
// sw.js
const CACHE_NAME = 'apex-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/session.html',
  '/css/main.css',
  '/css/theme.css',
  '/js/app.js',
  '/js/state.js',
  '/js/content.js',
  '/js/session.js',
  '/assets/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Fallback for offline
        return caches.match('/offline.html');
      })
  );
});
```

---

## 12. Error Handling

### 12.1 localStorage Errors

```javascript
function handleStorageError(error) {
  if (error.name === 'QuotaExceededError' || error.code === 22) {
    // Storage full
    alert('Storage is full. Please export your data and clear some space.');
    return;
  }
  
  if (error.name === 'SecurityError') {
    // Private browsing mode
    alert('This browser is in private/incognito mode. Progress will not be saved.');
    return;
  }
  
  console.error('Storage error:', error);
}
```

### 12.2 Data Corruption Detection

```javascript
function validateData(data) {
  if (!data || typeof data !== 'object') return false;
  if (!data.currentModule || data.currentModule < 1 || data.currentModule > 4) return false;
  if (!data.currentSession || data.currentSession < 1 || data.currentSession > 12) return false;
  if (!Array.isArray(data.completedSessions)) return false;
  if (!Array.isArray(data.completedModules)) return false;
  if (!data.sessions || typeof data.sessions !== 'object') return false;
  if (!data.achievements || !Array.isArray(data.achievements)) return false;
  return true;
}
```

---

## 13. Performance Requirements

| Metric | Target |
|--------|--------|
| Initial Load Time | < 2 seconds (3G) |
| Time to Interactive | < 3 seconds |
| Bundle Size | < 500KB (gzipped) |
| Page Loads | Instant (static) |
| localStorage Operations | < 10ms |
| Chart Rendering | < 50ms |
| Session Navigation | < 100ms |

### 13.1 Size Budget

```
Total Bundle: < 500KB
├── HTML: 20KB (gzipped)
├── CSS: 30KB (gzipped)
├── JavaScript: 400KB (gzipped)
│   ├── Core app: 100KB
│   ├── Content data: 250KB
│   ├── Diagrams: 50KB
│   └── Charts: 50KB
└── Assets: 50KB (SVG icons, track maps)
```

---

## 14. Development Phases (Technical)

### Phase 1: MVP (Weeks 1-4)

| Task | Priority | Estimate |
|------|----------|----------|
| Set up HTML structure | P0 | 2 days |
| CSS theme (dark/light) | P0 | 2 days |
| localStorage state management | P0 | 2 days |
| Module 1 content (12 sessions) | P0 | 5 days |
| Session flow logic | P0 | 3 days |
| Dashboard rendering | P0 | 2 days |
| Export/Import functionality | P1 | 1 day |
| Deploy to hosting | P0 | 1 day |

**Deliverable:** Fully functional Module 1 with all 12 sessions.

### Phase 2: Enhancement (Weeks 5-8)

| Task | Priority | Estimate |
|------|----------|----------|
| Progress charts (lap time trend) | P1 | 2 days |
| Skill radar chart | P1 | 1 day |
| Reflection journal | P1 | 2 days |
| Badge/achievement system | P2 | 1 day |
| Service Worker (offline) | P2 | 1 day |
| Interactive diagrams (SVG) | P1 | 3 days |
| Module 2 content | P1 | 5 days |

### Phase 3: Full Experience (Weeks 9-12)

| Task | Priority | Estimate |
|------|----------|----------|
| Module 3 content | P1 | 5 days |
| Module 4 content | P1 | 5 days |
| Advanced visualizations | P2 | 2 days |
| Mobile optimization | P2 | 2 days |
| Analytics integration (optional) | P3 | 1 day |
| Performance optimization | P2 | 2 days |

---

## 15. Testing Requirements

### 15.1 Unit Tests

```javascript
// Example test structure
describe('ApexStore', () => {
  test('should load default data when localStorage is empty', () => {
    // ...
  });
  
  test('should save data to localStorage', () => {
    // ...
  });
  
  test('should complete a session correctly', () => {
    // ...
  });
  
  test('should calculate module progress correctly', () => {
    // ...
  });
});
```

### 15.2 Manual Testing Checklist

- [ ] First visit → Landing page displayed
- [ ] Click "Start" → Session 1 loads
- [ ] Complete all steps → Data saved
- [ ] Refresh page → Progress preserved
- [ ] Complete multiple sessions → Dashboard updates
- [ ] Export → JSON file downloaded
- [ ] Import → JSON file loaded correctly
- [ ] Clear localStorage → Fresh start
- [ ] Private browsing → Warning displayed
- [ ] Mobile view → Responsive layout
- [ ] Session completed → Module completion detected

---

## 16. Deployment Instructions

### 16.1 GitHub Pages

```bash
# Clone repository
git clone https://github.com/username/apex.git

# Build (if using build tools, skip if static)
npm run build

# Deploy to GitHub Pages
git push origin main
# Enable GitHub Pages in repository settings
# Set source to / (root) or /docs
```

### 16.2 Netlify (Recommended)

```bash
# Drag and drop folder to Netlify dashboard
# Or connect GitHub repository
# Deploy automatically on push
```

### 16.3 Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

---

## 17. Quick Start Checklist

- [ ] Create `index.html` with landing/dashboard
- [ ] Create `session.html` with session flow
- [ ] Implement `state.js` with localStorage CRUD
- [ ] Create `content.js` with Module 1 sessions
- [ ] Implement `session.js` with step navigation
- [ ] Create `dashboard.js` with progress display
- [ ] Implement `charts.js` for visualizations
- [ ] Create `export.js` with import/export
- [ ] Add CSS dark theme and responsive
- [ ] Test manually across browsers
- [ ] Deploy to hosting
- [ ] Share with test users

---

## 18. Summary

### Tech Stack Summary

| Layer | Technology |
|-------|------------|
| **Hosting** | GitHub Pages / Netlify (free) |
| **Markup** | HTML5 |
| **Styling** | CSS3 (Custom Properties, Flexbox, Grid) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Data** | localStorage |
| **Offline** | Service Worker |
| **Charts** | Canvas API |
| **Diagrams** | SVG + JavaScript |

### Key Differentiators

- ✅ Zero backend infrastructure
- ✅ No authentication required
- ✅ Zero hosting costs
- ✅ Complete privacy (data never leaves device)
- ✅ Works offline (with Service Worker)
- ✅ Instant access, no sign-up friction

---

**TRD Complete.** Ready for development implementation.