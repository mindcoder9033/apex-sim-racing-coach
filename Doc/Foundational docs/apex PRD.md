# APEX - Sim Racing Coach

## Complete PRD (Updated: Client-Only Architecture)

---

## 1. Product Overview

### 1.1 Executive Summary

**Apex** is a **client-only static web application** that serves as a structured sim racing coach for complete beginners. Leveraging the techniques from *Going Faster! Mastering the Art of Race Driving*, Apex provides progressive 30-day training modules with zero backend infrastructure—all content, progress tracking, and reflections live entirely in the user's browser.

**Key Constraint:** No login, no backend, no APIs. Everything runs locally in the browser using `localStorage` for data persistence.

### 1.2 Vision Statement

To democratize professional race driving education through a **self-contained, instantly accessible** webapp—no accounts, no sign-ups, no data sharing. Just open, learn, practice, and improve.

### 1.3 Core Philosophy

- **Instant access:** No barriers to starting your first session
- **Privacy-first:** Your progress lives on your device, nowhere else
- **Simplicity:** Focus on driving, not managing accounts
- **Self-contained:** Works offline after initial load
- **Progress through practice:** Structured content you control

---

## 2. Target Audience

### 2.1 Primary User Persona

**Name:** Alex, 28
**Background:** Loves racing games, recently purchased Moza R3, overwhelmed by Forza's complexity
**Technical Comfort:** Moderate—can navigate a webapp, but doesn't want to manage accounts or passwords
**Pain Points:**
- Spinning out constantly with no understanding why
- Frustrated by lack of progression despite hours of practice
- Doesn't want another account to remember
- Wants structured guidance without commitment
**Goals:**
- Complete a full race without spinning
- See measurable improvement week over week
- Build confidence without pressure

---

## 3. Core Features

*(User selections remain unchanged: Q1-A, Q2-A, Q3-B, Q4-A, Q5-D, Q6-C, Q7-B, Q8-C, Q9-D, Q10-A, Q11-No Monetization, Q12-A)*

### 3.1 Module System

Each module is a 30-day program designed around a single fundamental skill.

| Module | Focus | Duration |
|--------|-------|----------|
| **Module 1** | The Line | Days 1-30 |
| **Module 2** | Braking & Entering | Days 31-60 |
| **Module 3** | Corner Exit & Car Control | Days 61-90 |
| **Module 4** | Racecraft | Days 91-120 |

### 3.2 Session Structure (45 Minutes)

| Segment | Duration | Activity |
|---------|----------|----------|
| **Theory** | 10 min | Reading + Interactive Diagrams |
| **Practice Drills** | 10 min | Focused Exercises in Forza |
| **Practical** | 15 min | Track Driving |
| **Challenge** | 5 min | One Measurable Goal |
| **Assessment & Reflection** | 5 min | Self-Evaluation & Journal |

### 3.3 Content Library

*Option B: Text & Interactive Diagrams*

All content is statically bundled with the webapp:
- **Theory Articles:** 500-800 word lessons with key takeaways
- **Interactive Diagrams:** Clickable track maps, corner visualizations
- **Reference Images:** Corner entry/apex/exit markers
- **Track Maps:** Laguna Seca, Road Atlanta (more added later)

### 3.4 Forza Integration

*Option A: Manual Telemetry Input*

Users manually log:
- **Best Lap Time** (recorded from Forza)
- **Sector Times** (optional)
- **Self-Ratings:** Brake consistency, apex accuracy, throttle control, overall control, confidence (1-5)
- **Free Notes:** What worked, what didn't

### 3.5 Self-Guided Experience

*Option D: Self-Guided*

The app provides the map; the user drives the road. No AI, no automated coaching—just clear guidance and structured practice.

### 3.6 Progress Tracking

*Option C: Balanced Scorecard*

**Three-Pillar System:**
- **Lap Time Metrics (30%):** Trend, consistency, sector improvement
- **Technique Metrics (40%):** Self-assessed skill ratings, challenge completion
- **Consistency & Control (30%):** Spin frequency, off-tracks, session completion

All calculated client-side from user-entered data.

### 3.7 Challenges & Gamification

*Option D: Mixed Approach*

Three challenge types per session:
1. **Mechanical** (Lap time target)
2. **Technique** (Specific skill goal)
3. **Creative** (Try something new)

**Achievement Badges:** Stored locally, displayed on dashboard

### 3.8 Solo Experience

*Option A: Solo Focus*

- Private progress only
- Reflection journal stored locally
- No leaderboards, no comparison

---

## 4. Technical Specifications (Client-Only Architecture)

### 4.1 Platform & Architecture

*Option A: Webapp Only*

**Architecture:** Static Single-Page Application (SPA)

```
┌─────────────────────────────────────────────┐
│              USER'S BROWSER                 │
├─────────────────────────────────────────────┤
│  HTML / CSS / JavaScript (Static Bundle)    │
│  ┌───────────────────────────────────────┐  │
│  │         localStorage / IndexedDB       │  │
│  │  • Session progress                   │  │
│  │  • Lap times                          │  │
│  │  • Ratings & reflections              │  │
│  │  • Achievements                      │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
         │
         ▼
   Static Hosting
 (GitHub Pages, Netlify, Vercel, Cloudflare)
```

**Key Characteristics:**
- ✅ Zero backend infrastructure
- ✅ No servers to maintain
- ✅ No databases
- ✅ No user accounts or authentication
- ✅ No APIs required
- ✅ Works offline (after initial load with service worker)
- ✅ Data never leaves the user's device
- ✅ Instant load times (static assets only)

### 4.2 Technology Stack

**Frontend:**
- **HTML5** – Semantic markup
- **CSS3** – Responsive, mobile-friendly design, dark theme optimized
- **Vanilla JavaScript** – No framework dependency (keeps bundle small; can optionally use Vue/React CDN if preferred)
- **Service Worker** (optional) – For offline caching

**Data Persistence:**
- **localStorage** – Primary store for progress, settings, reflections
- **IndexedDB** – Fallback for larger datasets (if needed for future expansion)

**Hosting:**
- **GitHub Pages** (free) or **Netlify/Vercel** (free tier)
- Static file serving only
- Custom domain optional

### 4.3 Data Model (Client-Side Only)

All data stored under a single localStorage key or JSON structure.

```javascript
// Stored in localStorage under key: 'apex_progress'
{
  // Current state
  currentModule: 1,
  currentSession: 1,
  sessionsCompleted: [1, 2, 3], // array of completed session IDs
  
  // Session history
  sessions: {
    "1-1": { // module-session
      completed: true,
      date: "2026-07-25T14:30:00",
      lapTime: 92.5, // seconds
      sectorTimes: [30.2, 31.1, 31.2],
      ratings: {
        brakeConsistency: 4,
        apexAccuracy: 3,
        throttleControl: 4,
        overallControl: 3,
        confidence: 4
      },
      notes: "Felt good, struggled with Turn 6 apex",
      reflection: "I need to look further ahead...",
      challengeCompleted: true,
      spinCount: 1,
      offTrackCount: 2
    }
  },
  
  // Achievements earned
  achievements: ["the_completer", "line_master"],
  
  // User preferences
  settings: {
    theme: "dark",
    car: "Mazda MX-5", // default selection
    track: "Laguna Seca"
  }
}
```

### 4.4 No-Backend Architecture Benefits

| Aspect | Implementation |
|--------|----------------|
| **Authentication** | ❌ None required |
| **Data Storage** | Browser localStorage |
| **Data Sync** | ❌ Not supported (device-only) |
| **Backup/Export** | ✅ JSON export/import feature |
| **Cross-Device** | ❌ Manual export/import only |
| **Privacy** | ✅ Data never leaves device |
| **Cost** | ✅ $0 for backend infrastructure |
| **Maintenance** | ✅ No server maintenance |
| **Offline** | ✅ Works after initial load |

### 4.5 Data Export/Import

Since there is no cloud sync, Apex provides:

**Export Progress:**
```
Click "Export" → Download `apex_backup.json`
```
**Import Progress:**
```
Click "Import" → Select `apex_backup.json` → Data restored
```

**User Guidance:** Clear on-screen warnings about browser data clearing:
> *"Your progress is stored only in this browser. Clearing your browser history will delete your progress. Use Export to backup your data."*

### 4.6 Security & Privacy

- **No PII collected:** No names, emails, or tracking
- **No external requests:** All logic runs client-side
- **HTTPS only:** Recommended for hosting (free via GitHub Pages/Netlify)
- **No cookies:** Uses localStorage only
- **Privacy-first:** Readable by user only

### 4.7 Browser Support

- Chrome (latest 2 versions) – Best experience
- Firefox (latest 2 versions)
- Safari (latest 2 versions) – Desktop only (limited mobile support)
- Edge (latest 2 versions)

**localStorage Requirements:** Minimum 5MB (ample for text-based progress data)

---

## 5. User Flow (No Login)

### 5.1 First Visit

```
Step 1: Landing Page
  - "Welcome to Apex"
  - Brief overview (45 sec read)
  - "Start Your First Session" button
  ↓
Step 2: Session 1 Begins Immediately
  - No account creation
  - No email
  - No friction
  ↓
Step 3: After Session 1 Complete
  - Data saved to localStorage
  - Dashboard appears on next visit
```

### 5.2 Returning Visit

```
Step 1: Open Webapp
  ↓
Step 2: Detect localStorage
  ↓
Step 3: Dashboard Loads
  - Show current progress
  - "Continue Session X" button
  - Or "Start a New Module" if current complete
```

### 5.3 Session Flow

*(Unchanged from original PRD)*

```
Theory → Practice Drills → Practical → Challenge → Assessment & Reflection
```

### 5.4 New Device Flow

```
User opens on new device
  ↓
No progress found
  ↓
Prompt: "Start Fresh or Import Progress?"
  - "Start Fresh" → Begin Module 1, Session 1
  - "Import Progress" → Upload JSON backup file
```

---

## 6. Content Specifications (Unchanged)

*(Full content structure remains as per original PRD)*

**Module 1: The Line** – 12 Sessions  
**Car Progression:** Week 1 (MX-5) → Week 2 (BRZ) → Week 3 (Cayman)  
**Track Progression:** Sessions 1-4 (Laguna Seca) → Sessions 5-8 (Road Atlanta) → Sessions 9-12 (Laguna Seca return)

---

## 7. User Interface Mockups (Client-Only)

### 7.1 Landing Page (First Visit)

```
+--------------------------------------------------+
|                                                    |
|           🏁 APEX                                 |
|     Your Structured Path to                      |
|     Sim Racing Confidence                         |
|                                                    |
|  "Learn the techniques from Going Faster!         |
|   applied to Forza Motorsport 2023 + Moza R3"    |
|                                                    |
|  ⏱️ 45 min sessions  |  📅 3 per week            |
|  📚 4 modules         |  🎯 12 sessions each     |
|                                                    |
|  [🚀 Start Your First Session]                    |
|                                                    |
|  ⚠️ Progress is stored locally in this browser.   |
|     No account required. Your data stays yours.   |
+--------------------------------------------------+
```

### 7.2 Dashboard (Returning User)

```
+--------------------------------------------------+
| 🏁 APEX                    [Progress] [Export]    |
+--------------------------------------------------+
|  Welcome back!                                    |
|                                                    |
|  Current Module: The Line                         |
|  Progress: ████████░░░░ 8/12 Sessions            |
|  Overall Score: 72/100                           |
|  Confidence: ★★★★☆                               |
|                                                    |
|  [▶ Continue Session 9]                          |
|                                                    |
|  Last Session:                                     |
|  ✓ Best lap: 1:41.2 (Target: 1:41.0)             |
|  ✓ Confidence: 4/5                                |
|  📝 "Felt much more consistent..."                |
|                                                    |
|  Quick Links:                                      |
|  [Module Guide] [Reference Library] [Journal]     |
|  [Export Progress] [Import Progress]              |
+--------------------------------------------------+
```

### 7.3 Data Warning Banner (Persistent)

```
⚠️ Your progress is stored in this browser only.
   [Learn More] | [Export Backup Now]
```

---

## 8. Session Content Example

### Session 1: What is The Line?

**Theory Content (10 min reading)**

> **The Single Most Important Skill**
>
> When you drive through a corner, you have many path choices. The inside line? The outside? Somewhere in between? The fastest path—the one that allows the highest cornering speed—is the one with the largest radius.
>
> **[Interactive Diagram: Corner path comparison]**
> - Click "Inside Line" → Shows tight radius (slow)
> - Click "Outside Line" → Shows medium radius (medium)
> - Click "Racing Line" → Shows largest radius (fastest)
>
> **The Ideal Path (Outside-Inside-Outside):**
> 1. Start wide at corner entry (largest radius)
> 2. Clip the inside apex at the corner's midpoint
> 3. Use all the road on exit (carrying speed onto the straight)
>
> **Why This Works:**
> - Speed is directly related to radius (larger radius = more speed)
> - Exit speed determines straightaway speed
> - One mistake amplifies throughout the lap

**Practice Drills (10 min in Forza)**
- Load: Mazda MX-5 @ Laguna Seca
- Drill: Drive slowly (2nd gear) through Turn 2 only
- Objective: Identify turn-in point, apex, track-out
- Repeat 5 times

**Practical (15 min)**
- Full laps, focus ONLY on hitting reference markers
- Record best lap time

**Challenge (5 min)**
- Identify 3 reference points per corner (turn-in, apex, track-out)
- Write them down in the notes

**Reflection (5 min)**
- Rate: Brake consistency, apex accuracy, throttle control, overall control, confidence
- Free text: "Could you see the apex before you turned?"

---

## 9. Development Roadmap (No Backend)

### Phase 1: MVP (Month 1-2)

**Deliverables:**
- ✅ Static HTML/CSS/JS webapp
- ✅ localStorage for progress persistence
- ✅ Module 1: The Line (all 12 sessions)
- ✅ Full session structure (Theory → Practice → Practical → Challenge → Reflection)
- ✅ Manual tracking (lap times, ratings, notes)
- ✅ Basic dashboard with progress visualization
- ✅ Export/Import JSON functionality
- ✅ Deploy to GitHub Pages/Netlify

**Content:**
- 12 theory articles (500-800 words each)
- 12 interactive diagrams (corner visualizations)
- 2 track maps (Laguna Seca, Road Atlanta)
- 36 practice drills

### Phase 2: Enhancement (Month 3-4)

**Deliverables:**
- ✅ Module 2: Braking & Entering
- ✅ Enhanced progress charts (lap time trend, skill radar)
- ✅ Reflection journal with search/filter
- ✅ Badge system (local storage)
- ✅ Service Worker for offline support

### Phase 3: Full Experience (Month 5-8)

**Deliverables:**
- ✅ Module 3: Corner Exit & Car Control
- ✅ Module 4: Racecraft
- ✅ Advanced visualizations
- ✅ Printable session summaries

---

## 10. Success Metrics (Unchanged)

| Category | Metric | Target |
|----------|--------|--------|
| **Completion** | Module 1 completion rate | >70% |
| **Engagement** | Avg sessions/week | 2.5+ |
| **Satisfaction** | NPS (self-reported) | >40 |
| **Improvement** | Lap time improvement | >5% |
| **Confidence** | Confidence score increase | >1.5 points |

---

## 11. Risks & Mitigations (Updated)

| Risk | Impact | Mitigation |
|------|--------|------------|
| **User clears browser data** | High | ⚠️ Prominent warnings, export reminders, clear backup instructions |
| **User switches devices** | Medium | Export/Import feature, clear guidance on transferring |
| **User finds theory boring** | Medium | Short content, visual emphasis, key takeaways |
| **User gets discouraged** | Medium | Celebrate small wins, show progress, positive reinforcement |
| **User drops off after Week 1** | High | Keep early sessions engaging, immediate wins |
| **localStorage limits** | Low | Text data is tiny; 5MB limit is ample |
| **Safari private mode** | Medium | Detect and inform user that progress won't persist |

---

## 12. User Acquisition Strategy (Unchanged)

| Channel | Strategy |
|---------|----------|
| **Reddit** | r/simracing, r/forza, r/Moza — share value, not ads |
| **YouTube** | Create companion content (session previews) |
| **Word of Mouth** | Shareable progress, exportable achievements |
| **Forza Communities** | Car clubs, Discord servers |
| **Content Marketing** | Articles on sim racing fundamentals |

---

## 13. Development Checklist (Client-Only)

### Frontend Tasks

- [ ] Build static HTML pages (index, dashboard, session, progress)
- [ ] Implement CSS (dark theme, responsive, mobile-friendly)
- [ ] JavaScript: Session logic, progress tracking, localStorage CRUD
- [ ] Export/Import JSON feature
- [ ] Interactive diagrams (SVG or Canvas-based)
- [ ] Charts/visualizations (lap time trend, skill radar)
- [ ] Service Worker for offline caching (optional)

### Content Tasks

- [ ] Write Module 1 theory articles (12 sessions)
- [ ] Create track maps for Laguna Seca & Road Atlanta
- [ ] Design interactive corner diagrams
- [ ] Define practice drills for each session
- [ ] Write challenge descriptions
- [ ] Create assessment/reflection questions

### Deployment Tasks

- [ ] Deploy to GitHub Pages / Netlify
- [ ] Custom domain (optional)
- [ ] HTTPS enabled (free via hosting)
- [ ] Analytics (optional, privacy-friendly like Plausible)

---

## 14. Summary: Key Architecture Decisions

| Decision | Implementation |
|----------|----------------|
| **Login Required?** | ❌ No |
| **Backend?** | ❌ None |
| **APIs?** | ❌ None |
| **Data Storage** | `localStorage` (browser) |
| **Data Sync** | ❌ No (export/import only) |
| **Hosting** | Static (GitHub Pages/Netlify) |
| **Cost** | $0 (free tiers) |
| **Offline** | ✅ Yes (with Service Worker) |
| **PII Collected** | None |
| **Cookies** | None |

---

## 15. Final PRD Summary

**Apex** is a **pure static webapp** that delivers a professional-grade sim racing curriculum entirely in the browser.

**The Value Proposition:**  
*Zero friction. Zero sign-ups. Zero excuses. Just open, learn, practice, improve—your progress, your device, your pace.*

---

**Ready for Development.** All content and technical specifications are documented. The implementation is straightforward: a static bundle of HTML, CSS, and JavaScript with localStorage for persistence.
