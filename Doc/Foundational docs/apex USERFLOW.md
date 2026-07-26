# APEX - Sim Racing Coach

## User Journey Document

---

## 1. Journey Overview

Based on your selections, here is the complete user journey for Apex—from discovery through long-term use.

---

## 2. Discovery & First Visit

### 2.1 How Users Find Apex

**Selected: F) Direct Link — Already knows the URL, just opens it directly**

**User Profile:** These users have heard about Apex through a friend, a forum post, or a content creator. They arrive with intent—they know what they're looking for.

**User Mindset:** **C) Determined — Ready to commit time and effort to improve**

These users are motivated. They've already decided they want to get better at sim racing. They're not browsing casually; they're ready to start a structured program.

**Key Insight:** No need to "sell" the program. Users arrive pre-sold and ready to commit.

---

### 2.2 First Landing

**Selected: A) Hero + Start Button — Big visual, clear call-to-action, minimal text**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ┌─────────────────────┐                     │
│                    │  █████   ██   ███████ │                    │
│                    │ ██        ██   ██   ██ │                   │
│                    │ ██   ████ ██   ███████ │  ← Brand mark    │
│                    │ ██    ██  ██   ██   ██ │                   │
│                    │  █████   ██   ██   ██ │                   │
│                    └─────────────────────┘                     │
│                                                                 │
│                      Your Structured Path to                   │
│                      Sim Racing Confidence                     │
│                                                                 │
│              ┌──────────────────────────────────┐              │
│              │   🚀  Start Your First Session    │              │
│              └──────────────────────────────────┘              │
│                                                                 │
│  ⚠️  Progress is stored locally in this browser. No account.   │
│     Your data stays yours.                                     │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Minimal text on first view
- Logo and tagline only
- One clear button: "Start Your First Session"
- Data warning visible but non-intrusive (subtle styling)
- No navigation, no distractions

**Interaction:**
- User clicks "Start Your First Session"
- Immediately progresses to equipment check

---

## 3. Onboarding Phase

### 3.1 Equipment Check

**Selected: D) Equipment Check — Asks for their setup (wheel type, Forza version) and offers tips if missing something**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Before we begin...                                             │
│  ──────────────────────────────                               │
│                                                                 │
│  Let's make sure you have everything you need:                 │
│                                                                 │
│  🎮  Do you have Forza Motorsport 2023?                       │
│     [Yes]  [No]  [Not sure]                                    │
│                                                                 │
│  🔧  What wheel are you using?                                 │
│     [Moza R3]  [Other Wheel]  [Controller]                    │
│                                                                 │
│  💡  Tips:                                                     │
│     • If using a controller, some exercises may be harder     │
│     • Force Feedback settings: recommend 80-100% strength    │
│     • Ensure your pedals are calibrated in Forza              │
│                                                                 │
│  [Continue →]                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Friendly, encouraging tone
- Simple yes/no questions
- Tips shown contextually based on answers
- Non-blocking: can skip and continue even without perfect equipment

**Validation Logic:**

| Response | Tip Displayed |
|----------|---------------|
| Forza: Yes | "Great! Make sure it's updated to the latest version." |
| Forza: No | "Apex is designed for Forza Motorsport 2023. Consider getting it for the full experience." |
| Wheel: Moza R3 | "Perfect! The Moza R3 is fully supported." |
| Wheel: Other | "Your wheel will work. Some force feedback recommendations may vary." |
| Wheel: Controller | "Apex is optimized for wheel users. You can still learn, but some drills may be harder." |

**After completing:** User clicks "Continue" → Moves to Module 1, Session 1

---

## 4. Session Journey

### 4.1 Session Structure Overview

Each session follows this 45-minute flow:

```
┌─────────────────────────────────────────────────────────────────┐
│  Session Title                                                 │
│  Focus: [skill]                                                │
│  Car: [car]  |  Track: [track]  |  Target Time: [time]        │
│                                                                 │
│  ●━━━●━━━○━━━○━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  Current Step Content...                                       │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Theory Section

**Selected: B) Read + Interactive Diagrams — Text with interactive elements (clickable corner diagrams, compare lines)**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━○━━━○━━━○━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  📖 The Single Most Important Skill                            │
│  ──────────────────────────────                               │
│                                                                 │
│  When you drive through a corner, you have many path choices.  │
│  The fastest path—the one that allows the highest cornering   │
│  speed—is the one with the largest radius.                     │
│                                                                 │
│  [Interactive Diagram: Corner Path Comparison]                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Click to explore different paths:                      │   │
│  │                                                         │   │
│  │  [Inside Line] [Outside Line] [Racing Line]             │   │
│  │                                                         │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │  (SVG corner diagram animates the selected path) │   │   │
│  │  │                                                   │   │   │
│  │  │  Radius: 195ft  Speed: 54mph  Time: 2.1s         │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Key Takeaways:                                                 │
│  ✅ Speed is directly related to radius                        │
│  ✅ The line determines both cornering and straightaway speed │
│  ✅ Outside-inside-outside is the fastest path                │
│                                                                 │
│  [Mark as Read] → Continue to Practice                        │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Clean, readable text with highlighted key phrases
- Interactive diagram with clickable path options
- Animated visual feedback showing the chosen path
- Speed/radius/time data shown for each path
- Key takeaways as checkmarks (visually distinct)

**User Action:**
- Reads content (estimated 5 minutes)
- Interacts with diagram to understand the concept
- Clicks "Continue" when done

---

### 4.3 Practice Drills

**Selected: D) Progressive Difficulty — Drill has levels (easy → medium → hard), user completes at least one**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━●━━━○━━━○━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  🎯 Practice Drills                                             │
│  ──────────────────────────────                               │
│                                                                 │
│  Focus: Finding the Markers                                    │
│                                                                 │
│  Choose your level:                                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🟢 Easy: Find the Turn-In Point                        │   │
│  │  Drive slowly through Turn 2. Identify the turn-in     │   │
│  │  point. Mark it mentally.                               │   │
│  │  Repetitions: 3  │  Time: 5 min                         │   │
│  │  [Select]                                                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🟡 Medium: Find Turn-In + Apex                        │   │
│  │  Drive slowly through Turn 2. Identify both turn-in    │   │
│  │  AND apex points.                                      │   │
│  │  Repetitions: 5  │  Time: 8 min                         │   │
│  │  [Select]                                                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  🔴 Hard: Find All 3 Markers                           │   │
│  │  Drive slowly through Turn 2. Identify turn-in, apex,  │   │
│  │  AND track-out points.                                  │   │
│  │  Repetitions: 8  │  Time: 10 min                        │   │
│  │  [Select]                                                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  💡  Tip: Start with Easy, then try Medium. You can           │
│      always come back to Hard later.                          │
│                                                                 │
│  [Open Forza and Start Practicing]                             │
│  ✅  I've completed at least one level                         │
│                                                                 │
│  [← Previous]  [Continue →]                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Clear difficulty levels with color coding (🟢🟡🔴)
- Each level shows: focus, repetitions, estimated time
- User selects one level to complete (can do more)
- "Continue" button only enabled after completing at least one level
- Encouraging tip: "Start with Easy"

**User Action:**
- Reviews levels
- Selects one (or more) to complete
- Opens Forza, practices the drill
- Returns to app, checks "I've completed at least one level"
- Clicks "Continue"

---

### 4.4 Practical Driving

**Selected: D) Skill-First, Time-Second — Focus only on the skill (e.g., hitting apexes), ignore lap time**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━●━━━●━━━○━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  🏎️ Practical Driving                                           │
│  ──────────────────────────────                               │
│                                                                 │
│  Today's Focus: Hit every apex within 6 inches                │
│                                                                 │
│  Forget lap times. Today is about precision.                   │
│                                                                 │
│  Instructions:                                                  │
│  1. Load: Mazda MX-5 @ Laguna Seca                            │
│  2. Drive 5-8 focused laps                                    │
│  3. For each corner, aim to hit the apex marker               │
│  4. Note: Are you hitting it? Early? Late?                    │
│  5. Make adjustments each lap                                 │
│                                                                 │
│  What to focus on:                                             │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • Turn 2: Are you turning in too early?               │   │
│  │  • Turn 4: Can you see the apex before you turn?       │   │
│  │  • Turn 6: Are you using all the road on exit?         │   │
│  │  • Turn 9: Is the apex where you expected?             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  💡  Tip: Drive at 70% speed. Accuracy first, speed later.    │
│                                                                 │
│  ✅  I've completed my focused laps                           │
│                                                                 │
│  [← Previous]  [Continue →]                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Clear, singular focus for the session
- Explicit instruction to ignore lap times
- Specific corner breakdowns
- Encouraging tone: "Accuracy first, speed later"

**User Action:**
- Opens Forza
- Drives 5-8 focused laps (estimated 15 minutes)
- Focuses solely on the skill
- Returns, checks the checkbox
- Clicks "Continue"

---

### 4.5 Challenge Phase

**Selected: C) Explicit Challenge Phase — Separate 5-minute segment after practical, focused solely on the challenge**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━●━━━●━━━●━━━○                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  🏆 Challenge                                                   │
│  ──────────────────────────────                               │
│                                                                 │
│  Your Mission:                                                  │
│                                                                 │
│  "Identify 3 reference points for every corner on the track"  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  What to do:                                             │   │
│  │  1. Load: Mazda MX-5 @ Laguna Seca                     │   │
│  │  2. Do ONE focused lap                                  │   │
│  │  3. For each corner, note:                              │   │
│  │     - Where is the turn-in?                            │   │
│  │     - Where is the apex?                               │   │
│  │     - Where is the track-out?                          │   │
│  │  4. Write your findings in the notes field below        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  📝  Your Reference Points:                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Turn 2: Turn-in at second cone, apex at the paint    │   │
│  │  stripe, track-out at the end of the curb.            │   │
│  │                                                         │   │
│  │  Turn 6: Turn-in at the 50m board, apex at the        │   │
│  │  inside curb, track-out at the outside curb.          │   │
│  │                                                         │   │
│  │  (Add more...)                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  💡  This builds your mental map of the track. You'll use     │
│      these references in future sessions.                     │
│                                                                 │
│  ✅  I've completed the challenge                             │
│                                                                 │
│  [← Previous]  [Continue →]                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Clear, singular challenge focus
- Specific instructions
- Notes field for recording findings
- Encouraging context: "This builds your mental map"

**User Action:**
- Opens Forza (if not already open)
- Drives ONE focused lap
- Notes reference points for each corner
- Records findings in the app
- Checks "I've completed the challenge"
- Clicks "Continue"

---

### 4.6 Assessment & Reflection

**Selected: E) Guided Reflection — Step-by-step questions: "What worked? What didn't? What will you try next time?"**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ●━━━●━━━●━━━●━━━●                                              │
│  Theory  Practice  Practical  Challenge  Assessment            │
│                                                                 │
│  📝 Session Assessment                                          │
│  ──────────────────────────────                               │
│                                                                 │
│  Take a moment to reflect on today's session...                │
│                                                                 │
│  1. How confident do you feel about the skill?                 │
│     ★ ★ ★ ★ ☆                                                  │
│                                                                 │
│  2. What worked well today?                                    │
│     ┌──────────────────────────────────────────────────────┐   │
│     │  I felt really good at Turn 4 when I remembered    │   │
│     │  to look at the apex before turning.               │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
│  3. What didn't work well?                                     │
│     ┌──────────────────────────────────────────────────────┐   │
│     │  I kept turning in too early at Turn 6. It felt    │   │
│     │  natural but I kept missing the apex.              │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
│  4. What will you try next time?                               │
│     ┌──────────────────────────────────────────────────────┐   │
│     │  I'll brake slightly later at Turn 6 and aim for   │   │
│     │  a later apex.                                     │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
│  📊  Performance Summary:                                     │
│  Best Lap Time:  [92.5]  seconds                              │
│  Notes:  [Felt good, struggled with Turn 6 apex]             │
│                                                                 │
│  ✅  Session Complete ✓                                       │
│                                                                 │
│  [← Previous]  [Complete Session]                              │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Calm, reflective tone
- Step-by-step questions guide the reflection
- Stars for confidence rating
- Text areas for detailed answers
- Optional performance data fields

**User Action:**
- Rates confidence
- Answers all reflection questions
- Optional: enters lap time and notes
- Clicks "Complete Session"

---

## 5. Session Completion

### 5.1 Achievement Unlock

**Selected: C) Achievement Unlock — Shows any new achievements earned, celebrates progress**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ✅  Session Complete!                        │
│                                                                 │
│              ┌─────────────────────────────────┐              │
│              │                                 │              │
│              │       🏆  Achievement Unlocked! │              │
│              │                                 │              │
│              │        "First Session"          │              │
│              │  You've completed your first    │              │
│              │  structured practice session.   │              │
│              │                                 │              │
│              │        [Continue]                │              │
│              └─────────────────────────────────┘              │
│                                                                 │
│  Your Progress:                                                 │
│  Module 1: The Line  █░░░░░░░░░  1/12 Sessions               │
│  Confidence: ★★★☆☆                                            │
│                                                                 │
│  Next Session: Session 2 — Outside-Inside-Outside             │
│                                                                 │
│  [Continue to Next Session]  [View Dashboard]                  │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Celebration overlay (subtle animation)
- Achievement display with icon and description
- Progress update shown
- Next session preview
- Two options: continue or return to dashboard

**User Action:**
- Views achievement
- Decides: continue to next session or return to dashboard

---

## 6. Returning User Experience

### 6.1 Dashboard Landing

**Selected: A) Dashboard Landing — Immediately shows progress, continue button, last session recap**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
│                    [📤 Export] [📥 Import]                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Welcome back!                                                 │
│                                                                 │
│  ┌─────────────────────────────┐  ┌──────────────────────────┐ │
│  │  Module 1: The Line          │  │  Session 9               │ │
│  │  ████████░░░░ 8/12 Sessions │  │  Focus: Consistency      │ │
│  │                              │  │  Car: MX-5               │ │
│  │  ▶ Continue Session 9        │  │  Track: Road Atlanta     │ │
│  │                              │  │                          │ │
│  └─────────────────────────────┘  └──────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Last Session Recap — Session 8                            ││
│  │  Best Lap  Target    Confidence   Achievement             ││
│  │  1:41.2    1:41.0    4/5          🏆 Consistent Driver    ││
│  │                                                             ││
│  │  "Felt much more consistent..."                            ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ⚠️  It's been 5 days since your last backup.                  │
│  [Export Backup Now]  [Dismiss]                                │
│                                                                 │
│  Quick Links:  [📖 Module Guide] [📚 Reference] [📝 Journal]  │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements:**
- Immediate visibility of current progress
- One-click "Continue" button
- Last session recap for continuity
- Achievement reminder (if earned)
- Subtle backup reminder (if overdue)

**User Action:**
- Reads progress summary
- Clicks "Continue Session X"
- Resumes where they left off

---

## 7. Progress Visualization

### 7.1 Progress Page

**Selected: D) All of the Above — Multiple visualizations on the Progress page**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📊 Your Progress — Module 1: The Line                        │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  Overall Score: 72/100  |  Sessions: 8/12  |  💪 +12%        │
│                                                                 │
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
│  │        Target: 1:42.5  |  Best: 1:40.8                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────┐  ┌──────────────────────────────────┐ │
│  │  Skill Radar         │  │  Session Summary                │ │
│  │    (radar chart)     │  │  Sessions: 8/12                 │ │
│  │                     │  │  Avg Lap: 102.5 → 98.2         │ │
│  │   Braking            │  │  Best Lap: 1:40.8              │ │
│  │     ╱│╲              │  │  Spin Count: 4 total           │ │
│  │    ╱ │ ╲             │  │  Confidence Trend: ⬆⬆         │ │
│  │ Apex──│── Throttle   │  │  Current Streak: 3 weeks      │ │
│  │       │              │  │  Longest Streak: 5 weeks      │ │
│  │  Consistency         │  │  Module Score: 72/100         │ │
│  └─────────────────────┘  └──────────────────────────────────┘ │
│                                                                 │
│  Achievements Earned (4/12):                                   │
│  🏁 First Session  │  📍 Line Master  │  ⭐ Consistent        │
│  🚀 3-Week Streak  │  🔒 Locked       │  🔒 Locked           │
│                                                                 │
│  [View Full History]  [Export Progress]                        │
└─────────────────────────────────────────────────────────────────┘
```

**Key Visualizations:**
1. **Lap Time Chart** — Line chart showing improvement over sessions
2. **Skill Radar** — Pentagonal radar chart (Braking, Apex, Throttle, Control, Confidence)
3. **Session Summary** — Key metrics in compact card
4. **Achievements** — Badge gallery with locked/unlocked states

**Data Points Shown:**
- Lap time progression
- Skill development across 5 categories
- Session counts
- Streak tracking
- Spin count (reducing over time)
- Confidence trend

---

## 8. Module Completion

### 8.1 Module Complete Experience

**Selected: E) All of the Above — Celebration, summary, and next module preview**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              🎉  Module Complete! 🎉                          │
│                                                                 │
│              Module 1: The Line                                │
│              12/12 Sessions Completed                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Your Module Summary                                      ││
│  │                                                            ││
│  │  📈  Lap Time Improvement: 1:50.0 → 1:42.5  (-7.5s)     ││
│  │  ⭐  Module Score: 72/100                                 ││
│  │  🏆  Achievements Earned: 4                              ││
│  │  💪  Confidence: ★★☆☆☆ → ★★★★☆ (+2.5)                 ││
│  │  🔄  Spin Count: 12 → 2  (-83%)                         ││
│  │                                                            ││
│  │  Skills Developed:                                        ││
│  │  • Finding the racing line                              ││
│  │  • Hitting apexes consistently                         ││
│  │  • Identifying early vs late apex                     ││
│  │  • Track memorization techniques                     ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  🎮  What's Next?                                              │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  Module 2: Braking & Entering                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Focus: Threshold braking, trail-braking, corner entry │   │
│  │  Duration: 12 sessions, 30 days                         │   │
│  │  What you'll learn:                                     │   │
│  │  • How to brake at the limit                           │   │
│  │  • Carrying speed into corners                         │   │
│  │  • Brake-turning techniques                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  💡  Suggestion: Take 1-2 days to let this sink in.           │
│      Then start Module 2 when you're ready.                   │
│                                                                 │
│  [Start Module 2]  [View Dashboard]                            │
└─────────────────────────────────────────────────────────────────┘
```

**Key Elements:**
1. **Celebration** — Animated celebration overlay (subtle confetti or glow)
2. **Summary** — Lap time improvement, module score, achievements earned, confidence change
3. **Skills List** — What was learned
4. **Next Module Preview** — What's coming next
5. **Break Suggestion** — Encourages 1-2 day break before continuing

---

## 9. Journal & Reflection

### 9.1 Journal Experience

**Selected: E) All of the Above — Journal is searchable, shows trends, and prompts periodic reviews**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│  🏁 APEX          [Dashboard] [Progress] [Journal] [Reference] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📝 Your Reflection Journal                                    │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  [Search journal...]  [Filter by Module] [Export Journal]      │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Confidence & Lap Time Trends                              ││
│  │  ┌──────────────────────────────────────────────────────┐ ││
│  │  │  Confidence: ★★☆☆☆ → ★★★★☆                       │ ││
│  │  │  Lap Time: 1:50.0 → 1:42.5                         │ ││
│  │  │  (Chart showing both trends over time)              │ ││
│  │  └──────────────────────────────────────────────────────┘ ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  📅  July 2026                                                 │
│                                                                 │
│  Session 12: Module Mastery  (July 30, 2026)                   │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Confidence: ★★★★★                                       ││
│  │  What worked: "I finally feel consistent. I can see the   ││
│  │  line before I turn in."                                  ││
│  │  What didn't: "Still working on Turn 6 apex."            ││
│  │  Next time: "Earlier braking at Turn 1 for more exit speed"││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  Session 11: Putting It Together  (July 27, 2026)               │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Confidence: ★★★★☆                                       ││
│  │  What worked: "Connected all the corners for the first    ││
│  │  time."                                                    ││
│  │  What didn't: "Lost focus on lap 4."                     ││
│  │  Next time: "Better concentration and consistency."      ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  🔍  Monthly Review                                            │
│  ───────────────────────────────────────────────────────────── │
│  "You've completed Module 1! Looking back at Session 1...    │
│                                                                 │
│  Session 1, July 1: "I don't know where to look, I keep      │
│  missing apexes."                                            │
│                                                                 │
│  Session 12, July 30: "I can see the line before I turn in." │
│                                                                 │
│  You've come a long way! Great job! 🏁                       │
│  [Write Your Monthly Reflection]                               │
└─────────────────────────────────────────────────────────────────┘
```

**Key Features:**
- **Search** — Find past entries by keyword
- **Trends** — Confidence and lap time progress over time
- **Monthly Review** — Prompts reflection on overall progress
- **Export** — Export journal entries (JSON or text)

---

## 10. Motivation & Engagement

### 10.1 Achievement System

**Selected: B) Achievement Badges — Collectible badges for milestones**

**Achievement Badge System:**

| Badge | Icon | Unlock Criteria |
|-------|------|-----------------|
| First Session | 🏁 | Complete Session 1 |
| First Week | 📅 | Complete 3 sessions in 7 days |
| Line Master | 📍 | Complete Module 1 |
| Brake Master | 🛑 | Complete Module 2 |
| Exit Master | ⚡ | Complete Module 3 |
| Racecraft | 🏆 | Complete Module 4 |
| Consistent Driver | ⭐ | Complete 5 sessions with 0 spins |
| Streak Keeper | 🔥 | 3-week streak |
| Marathon Runner | 🏃 | 5-week streak |
| Perfect Session | 💎 | Complete a session with all 5 ratings at 5 |
| Complete Driver | 🏁🏁 | Complete all 4 modules |

**Achievement Display:**
- Gallery view on dashboard and progress page
- Locked badges shown with subtle glow (motivation)
- Badge earned: brief animation and celebration notification

---

## 11. Post-Module & Long-Term Use

### 11.1 After All Modules Complete

**Selected: E) All of the Above — Badge + recommendations + reference mode**

**The Experience:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│          🏁🏁🏁🏁  You've Completed All 4 Modules! 🏁🏁🏁🏁     │
│                                                                 │
│              "Complete Driver" Badge Unlocked                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  Your Journey Summary                                     ││
│  │                                                            ││
│  │  📈  Total Lap Time Improvement: 1:50.0 → 1:35.2        ││
│  │  🏆  Achievements Earned: 12/12                          ││
│  │  💪  Confidence: ★☆☆☆☆ → ★★★★★                          ││
│  │  🔄  Spin Count: 45 → 3                                  ││
│  │  🏁  Total Sessions Completed: 48                         ││
│  │  📅  Total Days: 120                                      ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  What's Next?                                                   │
│  ───────────────────────────────────────────────────────────── │
│                                                                 │
│  🏎️  Online Racing                                            │
│  You're ready to race against others. Try:                    │
│  • Forza multiplayer lobbies                                  │
│  • iRacing (entry level)                                      │
│  • Sim racing leagues                                         │
│                                                                 │
│  📚  Advanced Techniques                                      │
│  Dive deeper into racecraft:                                  │
│  • Overtaking techniques                                     │
│  • Defensive driving                                        │
│  • Race starts and restarts                                 │
│                                                                 │
│  🔄  Retake & Refine                                          │
│  Revisit modules at higher speeds. Try:                      │
│  • Faster car (e.g., Porsche Cup)                            │
│  • New track (e.g., Nürburgring)                             │
│  • With AI opponents                                         │
│                                                                 │
│  📖  Reference Mode                                           │
│  All theory content is now available as a searchable         │
│  reference library.                                           │
│                                                                 │
│  [Go to Reference Library]  [Retake Module 1]                 │
└─────────────────────────────────────────────────────────────────┘
```

**Post-Completion Features:**

1. **Complete Driver Badge** — Earned, displayed on profile
2. **Advanced Recommendations** — Specific next steps
3. **Retake & Refine** — Revisit modules with faster cars or new tracks
4. **Reference Mode** — All theory becomes a searchable library
5. **Export Complete History** — Full progress export

---

## 12. Complete Journey Flowchart

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            DISCOVERY                                      │
│                   Direct Link → URL opens                                 │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         LANDING PAGE                                      │
│              Hero + Start Button (minimal friction)                       │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        EQUIPMENT CHECK                                    │
│         Forza? Moza R3? → Tips if missing something                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       SESSION 1: THEORY                                   │
│         Read + Interactive Diagrams → Click to explore paths              │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      SESSION 1: PRACTICE                                  │
│         Progressive Difficulty (Easy → Medium → Hard)                     │
│                   Complete at least one level                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     SESSION 1: PRACTICAL                                  │
│              Skill-First, Time-Second (focus only on skill)               │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     SESSION 1: CHALLENGE                                  │
│               Explicit 5-minute challenge phase                           │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SESSION 1: ASSESSMENT                                  │
│         Guided Reflection: What worked? What didn't? Next time?          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SESSION COMPLETE                                       │
│              Achievement Unlock + Progress Update                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
                          ┌──────────┴──────────┐
                          │                     │
                          ▼                     ▼
              ┌───────────────────┐  ┌─────────────────────┐
              │  Continue to      │  │  Return to          │
              │  Next Session     │  │  Dashboard          │
              └───────────────────┘  └─────────────────────┘
                          │                     │
                          ▼                     ▼
              ┌───────────────────┐  ┌─────────────────────┐
              │  Session 2-12     │  │  Dashboard          │
              │  (Repeat cycle)   │  │  (Progress visible) │
              └───────────────────┘  └─────────────────────┘
                          │                     │
                          └──────────┬──────────┘
                                     │
                                     ▼
                    ┌─────────────────────────────────────┐
                    │         MODULE COMPLETE             │
                    │  Celebration + Summary + Next       │
                    │  Module Preview                     │
                    └─────────────────────────────────────┘
                                     │
                                     ▼
                    ┌─────────────────────────────────────┐
                    │           MODULE 2-4                │
                    │    (Repeat Module Cycle)            │
                    └─────────────────────────────────────┘
                                     │
                                     ▼
                    ┌─────────────────────────────────────┐
                    │        ALL MODULES COMPLETE         │
                    │   Complete Driver Badge +           │
                    │   Recommendations + Reference Mode  │
                    └─────────────────────────────────────┘
```

---

## 13. Journey Summary Table

| Phase | Selection | Key Behavior |
|-------|-----------|--------------|
| **Discovery** | F) Direct Link | User arrives with intent |
| **Mindset** | C) Determined | Ready to commit |
| **Landing** | A) Hero + Start Button | Low friction start |
| **Onboarding** | D) Equipment Check | Ensures proper setup |
| **Theory** | B) Read + Interactive | Active learning |
| **Practice** | D) Progressive Difficulty | Builds confidence |
| **Practical** | D) Skill-First | Focus on technique, not time |
| **Challenge** | C) Explicit Phase | Clear, separate goal |
| **Assessment** | E) Guided Reflection | Self-awareness building |
| **Completion** | C) Achievement Unlock | Celebration + motivation |
| **Returning** | A) Dashboard Landing | Immediate progress visibility |
| **Progress** | D) All of the Above | Comprehensive visual feedback |
| **Module Complete** | E) All of the Above | Full celebration + preview |
| **Journal** | E) All of the Above | Searchable + trends + reviews |
| **Motivation** | B) Achievement Badges | Collectible milestones |
| **Post-Module** | E) All of the Above | Badge + recs + reference |

---

**User Journey Complete.** Ready for front-end implementation. Would you like me to draft the actual HTML/CSS for any specific screen shown above?