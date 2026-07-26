/**
 * Psychology Controller & Mental Game of Racing
 * Interactive guide & quick reference for driver mindset based on Doc/motor psychology.md
 */

class PsychologyController {
  constructor() {
    this.searchQuery = '';
    this.breathingTimer = null;
    this.breathingPhaseIndex = 0;
    this.breathingCount = 4;
    this.isBreathingActive = false;

    this.initData();
  }

  initData() {
    this.items = [
      {
        id: 'flow-state',
        title: '1. The Flow State & Yerkes-Dodson Law',
        category: 'Flow & Yerkes-Dodson',
        icon: 'zap',
        badge: 'Peak Performance',
        summary: 'Achieve total immersion where driver and car become one. Master stress levels for optimal arousal.',
        takeaways: [
          'Flow is achieved when skills match challenge with 100% focus and zero self-consciousness',
          'Yerkes-Dodson Law: Performance peaks at optimal stress; panic causes choking',
          'Prevent choking by focusing on process over outcome and maintaining steady breathing'
        ],
        content: `
### 1. The Flow State (The Racing Mind)
Flow is a state of complete immersion in driving where action and awareness merge. Time appears to slow down, and car control becomes automatic.

#### Characteristics of Flow:
- **Total Concentration:** 100% focus on apexes and brake points.
- **Time Distortion:** High-speed decisions feel comfortable and calm.
- **Automaticity:** Instinctive steering adjustments without internal doubt.
- **Clarity:** Road feedback and wheel sensations are crystal clear.

#### The Yerkes-Dodson Stress Curve:
Performance improves with arousal (stress) up to an optimal zone. 
- **Too Low Arousal:** Bored, sluggish, late reactions.
- **Optimal Arousal (Zone):** Alert, hyper-focused, peak lap times.
- **Too High Arousal:** Anxious, gripping wheel too hard, lockups, choking.

#### Overcoming the Choke Phenomenon:
Choking occurs when pressure causes overthinking and loss of trust in motor memory.
1. **Trust Preparation:** You have practiced the muscle memory—let it execute.
2. **Process Focus:** Focus on braking at 100m, not on who is behind you.
3. **Physical Relaxation:** Unclench jaw, relax shoulders, loosen grip on the wheel.
`
      },
      {
        id: 'concentration-focus',
        title: '2. Concentration & The Racing Focus Ladder',
        category: 'Core Mental Skills',
        icon: 'target',
        badge: 'Attention Control',
        summary: 'Direct and maintain focus on relevant track stimuli while ignoring distractions and pressure.',
        takeaways: [
          'Use the 5-Level Focus Ladder to climb from basic self-talk to deep flow state',
          'Broad focus on straights for traffic; Narrow focus in braking and apex zones',
          'Train visual focus to look farther down the track to slow down perceived speed'
        ],
        content: `
### 2. Concentration & Visual Focus
Concentration is your ability to direct mental energy toward apexes, braking markers, and force feedback cues while filtering out external noise.

#### The Racing Focus Ladder:
- **Level 5 (Flow State):** Total immersion—car and driver are one.
- **Level 4 (Narrow External):** Eyes locked on brake board, turn-in point, and apex curb.
- **Level 3 (Broad External):** Scanning mirrors, traffic, delta timing, and track temperature.
- **Level 2 (Broad Internal):** Feeling force feedback resistance, tire slip, and pedal resistance.
- **Level 1 (Narrow Internal):** Instructional self-talk: "Brake at 100m, trail brake smoothly, hit apex."

#### Visual Technique:
Look where you **want to go**, not where you are currently pointing. Looking far ahead expands your visual field, lowers perceived speed, and gives your brain more time to make micro-corrections.
`
      },
      {
        id: 'visualization-selftalk',
        title: '3. Mental Rehearsal & Instructional Self-Talk',
        category: 'Core Mental Skills',
        icon: 'eye',
        badge: 'Neural Conditioning',
        summary: 'Use mental imagery to condition neural pathways and swap negative chatter with instructional scripts.',
        takeaways: [
          'Visualization activates identical motor neurons as physical driving',
          'Rehearse problem corners 5x mentally before starting a session',
          'Replace "Don\'t spin here" with "Smooth throttle application at exit"'
        ],
        content: `
### 3. Visualization & Self-Talk Systems
Your brain cannot easily distinguish between real physical practice and vivid mental rehearsal.

#### Pre-Session 6-Step Visualization Routine:
1. **Close your eyes** and take 5 deep relaxing breaths.
2. **Visualize the track** from cockpit perspective (visor view).
3. **Feel the steering weight** as you turn into turn 1.
4. **Hear the engine revs** and tire scrubbing on the curb.
5. **Drive a flawless lap** mentally with smooth pedal inputs.
6. **Open eyes** ready with primed muscle memory.

#### Self-Talk Instant Swaps:
| Situation | Negative Self-Talk (Avoid) | Positive Instructional Swap |
|---|---|---|
| Approach to tricky corner | *"Don't spin here again"* | *"Smooth turn-in, trail-brake to apex"* |
| After a mistake | *"I'm useless, lap ruined"* | *"Lesson learned. Reset focus to next corner"* |
| Under pressure | *"They're gonna crash into me"* | *"Hold my line, control my pace"* |
| Chasing PB | *"Don't mess this up!"* | *"Relax hands, look far ahead"* |
`
      },
      {
        id: 'emotional-regulation-redmist',
        title: '4. Emotional Regulation & The Red Mist',
        category: 'Emotional Control & Tilt',
        icon: 'shield-alert',
        badge: 'Tilt Defense',
        summary: 'Control adrenaline, eliminate anger, and avoid the destructive "Red Mist" tunnel vision.',
        takeaways: [
          'Red Mist causes aggressive driving, missed apexes, and preventable crashes',
          'Recognize physical warning signs: clenched jaw, tight wheel grip, hot face',
          'Use 4-2-4 Box Breathing immediately after an incident to reset heart rate'
        ],
        content: `
### 4. Emotional Control & Eradicating Red Mist
"The Red Mist" is a state of severe anger or frustration triggered by getting hit, spinning, or missing a lap. It destroys rational judgment and guarantees mistakes.

#### Symptoms of Red Mist:
- Gripping the wheel with white knuckles.
- Overdriving into corners (braking way too late).
- Staring at the rear bumper of the car ahead instead of the track.
- Re-joining unsafely out of anger.

#### 4-Step Reset Protocol:
1. **Recognize:** Acknowledge: "I am feeling frustrated right now."
2. **Breathe:** Take 3 deep 4-2-4 box breaths on the next straight.
3. **Reframe:** Shift focus from revenge to lap precision.
4. **Execute:** Focus 100% on the very next braking marker.
`
      },
      {
        id: 'confidence-resilience',
        title: '5. Confidence Building & Post-Mistake Recovery',
        category: 'Confidence & Resilience',
        icon: 'award',
        badge: 'Mental Toughness',
        summary: 'Build durable confidence through preparation and master rapid bounce-back from lap mistakes.',
        takeaways: [
          'Confidence = Competence x Experience x Positive Self-Talk',
          'Separate your self-worth from individual lap times or race positions',
          'Execute the 6-step recovery cycle: Acknowledge -> Accept -> Analyze -> Learn -> Reset -> Move On'
        ],
        content: `
### 5. Building Unshakeable Driver Confidence
Durable confidence comes from deliberate preparation, not fake bravado.

#### The Confidence Equation:
\`Confidence = Practice + Preparation + Positive Self-Talk\`

#### Post-Mistake Recovery Cycle:
When you spin or blow a corner:
1. **Acknowledge:** "I locked up the fronts in Turn 4."
2. **Accept:** "Mistakes are part of pushing limits."
3. **Analyze:** "I came off the brake too fast while steering."
4. **Learn:** "I need to bleed off brake pressure smoothly."
5. **Reset:** "Mind clean."
6. **Move On:** "Next apex is Turn 5."
`
      },
      {
        id: 'practice-raceday',
        title: '6. Deliberate Practice & Race Day Warm-Up',
        category: 'Practice & Race Day',
        icon: 'clock',
        badge: 'Routine & Process',
        summary: 'Structure sessions with intent instead of mindlessly burning laps. Build a pre-race routine.',
        takeaways: [
          'Deliberate practice requires a specific micro-goal for every session',
          'Mindless lap driving leads to plateaus and ingrained bad habits',
          'Follow the 1-hour pre-race mental timeline for peak readiness'
        ],
        content: `
### 6. Deliberate Practice & Race Readiness

#### Casual vs. Deliberate Practice:
- **Casual Practice:** "I'll drive 20 laps and see if my lap time improves." (Low retention)
- **Deliberate Practice:** "For the next 5 laps, I will focus exclusively on releasing the brake smoothly into Turn 3." (High mastery)

#### Pre-Race Timeline Routine:
- **60 Mins Before:** Mental visualization of track layout and brake references.
- **30 Mins Before:** Physical stretch, hydrate, adjust seating and rig setup.
- **15 Mins Before:** Centering breathing exercises to enter optimal Yerkes-Dodson zone.
- **5 Mins Before:** Final positive intention statement: "Calm, precise, smooth."
`
      },
      {
        id: 'sim-vs-real',
        title: '7. Sim Racing Specific Psychology',
        category: 'Sim Racing Psychology',
        icon: 'monitor',
        badge: 'Virtual Environment',
        summary: 'Overcome the unique psychological traps of virtual sim racing vs. real motorsport.',
        takeaways: [
          'Sim racing lacks physical G-force feedback—train visual & audio sensitivity',
          'Virtual crashes have no physical pain, leading to reckless habits if unmonitored',
          'Avoid the "Rage Quit" button—treat every incident as a real-world endurance test'
        ],
        content: `
### 7. Virtual Sim Racing Mental Traps

#### Unique Sim Racing Challenges:
1. **Lack of Vestibular (G-Force) Cues:** You must rely 100% on Force Feedback (FFB) torque and tire sound pitch.
2. **Zero Physical Consequences:** Spins don't hurt your body or wallet, which can breed sloppy habits.
3. **The Esc Key Trap:** Quitting mid-session deprives your brain of resilience training.

#### Sim Driver Discipline Code:
- Treat every session as if real car damage costs money.
- Drive out of spins and return to pits cleanly rather than instantly hitting Restart.
- Focus on your own delta and progression rather than comparing yourself to leaderboard aliens.
`
      },
      {
        id: 'mental-drills',
        title: '8. Interactive Driver Centering Drills',
        category: 'Mental Drills',
        icon: 'activity',
        badge: 'Toolkit & Routines',
        summary: 'Active exercises to lower heart rate, re-ground sensory awareness, and sharpen concentration.',
        takeaways: [
          '4-2-4 Box Breathing calms the central nervous system within 60 seconds',
          '5-4-3-2-1 Grounding pulls you out of anxiety back into cockpit reality',
          'Concentration drills train unbroken focus across 5 consecutive laps'
        ],
        content: `
### 8. Practical Mental Drills

#### Drill 1: 4-2-4 Box Breathing (Pre-Race Centering)
- Inhale deeply through nose for **4 seconds**
- Hold breath for **2 seconds**
- Exhale slowly through mouth for **4 seconds**
- Repeat 5 times before sitting in the cockpit.

#### Drill 2: 5-4-3-2-1 Grounding (Tilt Recovery)
Acknowledge around your rig:
- **5 things you SEE** (Monitor, wheel rim, brake marker, apex curb, rev LEDs)
- **4 things you FEEL** (Alcantara grip, pedal resistance, seat pressure, fan airflow)
- **3 things you HEAR** (Engine note, tire squeal, wind noise)
- **2 things you SMELL** (Room air, electronics warmth)
- **1 thing you TASTE** (Water, hydration)

#### Drill 3: The 5-Lap Callout Challenge
For 5 consecutive laps, call out loud every brake point, turn-in point, and exit throttle point. If your mind wanders, reset the lap count to zero.
`
      }
    ];
  }

  render() {
    const container = document.getElementById('psychology');
    if (!container) return;

    const filteredItems = this.getFilteredItems();

    container.innerHTML = `
      <div class="page-container">
        <!-- Page Header -->
        <div class="page-header flex justify-between items-center flex-wrap gap-4 mb-4">
          <div class="page-header-title">
            <h1 class="flex items-center gap-3">
              <span class="icon-xl text-accent"><i data-lucide="brain"></i></span>
              Motor Psychology & Driver Mindset
            </h1>
            <p class="text-muted" style="font-size:0.95rem; margin-top:0.25rem;">
              Master the mental attitude of a disciplined, calm, and hyper-focused driver
            </p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <button class="btn btn-primary flex items-center gap-2" id="btnOpenBreathingModal">
              <i data-lucide="wind" class="icon-sm"></i>
              <span>4-2-4 Box Breathing</span>
            </button>
            <button class="btn btn-secondary flex items-center gap-2" id="btnOpenGroundingModal">
              <i data-lucide="compass" class="icon-sm"></i>
              <span>5-4-3-2-1 Grounding</span>
            </button>
          </div>
        </div>

        <!-- High-Impact Quick Reference Banner (Driver Mindset Cheat Sheet) -->
        <div class="card mb-6" style="background: linear-gradient(135deg, rgba(255,30,0,0.12) 0%, rgba(24,24,28,0.95) 100%); border-left: 4px solid var(--color-f1-purple); border-color: var(--color-f1-purple-glow);">
          <div class="flex items-center justify-between flex-wrap gap-4 mb-3">
            <h3 class="flex items-center gap-2" style="font-size:1.15rem;">
              <i data-lucide="shield-check" class="icon-md text-accent"></i>
              The Disciplined Driver's Mindset (Quick Reference)
            </h3>
            <span class="badge badge-f1-pb">Always Active Protocol</span>
          </div>

          <div class="grid-3 gap-4 mt-3">
            <div class="card" style="background: var(--color-surface-light); padding: 1rem;">
              <div class="flex items-center gap-2 mb-2 text-accent" style="font-weight:700;">
                <i data-lucide="feather" class="icon-sm"></i> 1. Smooth is Fast
              </div>
              <p class="text-muted" style="font-size:0.85rem; line-height:1.4;">
                Never muscle or force the car under stress. Smooth hands and progressive pedal pressure yield maximum grip.
              </p>
            </div>

            <div class="card" style="background: var(--color-surface-light); padding: 1rem;">
              <div class="flex items-center gap-2 mb-2 text-accent" style="font-weight:700;">
                <i data-lucide="flame-off" class="icon-sm"></i> 2. Zero Red Mist
              </div>
              <p class="text-muted" style="font-size:0.85rem; line-height:1.4;">
                Mistakes happen. The moment frustration hits, exhale deeply and immediately lock focus onto the very next corner.
              </p>
            </div>

            <div class="card" style="background: var(--color-surface-light); padding: 1rem;">
              <div class="flex items-center gap-2 mb-2 text-accent" style="font-weight:700;">
                <i data-lucide="disc" class="icon-sm"></i> 3. Process Over Delta
              </div>
              <p class="text-muted" style="font-size:0.85rem; line-height:1.4;">
                Stop staring at delta timers. Focus 100% on execution: brake point, turn-in, apex, and smooth exit throttle.
              </p>
            </div>
          </div>
        </div>

        <!-- Search Controls -->
        <div class="card mb-4">
          <div class="form-group mb-0">
            <input type="text" class="form-control" id="txtPsychSearch" value="${this.escapeHtml(this.searchQuery)}" placeholder="Search mental techniques (e.g. Red Mist, Flow State, Choking, Self-Talk, Breathing)...">
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid-2 gap-4" id="psychCardsContainer">
          ${this.renderCards(filteredItems)}
        </div>
      </div>
    `;

    this.bindEvents();
    window.renderLucideIcons();
  }

  getFilteredItems() {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) return this.items;
    return this.items.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.takeaways.some(t => t.toLowerCase().includes(q)) ||
      item.content.toLowerCase().includes(q)
    );
  }

  renderCards(items) {
    if (!items || items.length === 0) {
      return `
        <div class="card text-center py-8" style="grid-column: 1 / -1;">
          <div class="mb-3 text-muted flex justify-center"><i data-lucide="search-x" style="width:48px; height:48px;"></i></div>
          <h3 class="mt-2">No Psychology Modules Found</h3>
          <p class="text-muted mt-1" style="font-size:0.9rem;">Try resetting your search query.</p>
        </div>
      `;
    }

    return items.map(item => `
      <div class="card card-interactive psych-card" data-psych-id="${item.id}">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <span class="icon-lg text-accent flex items-center">${window.getIconSvg(item.icon, 'icon-lg')}</span>
            <h3 style="font-size:1.1rem; line-height:1.3;">${item.title}</h3>
          </div>
          <span class="badge badge-f1-amber" style="font-size:0.75rem;">${item.badge}</span>
        </div>

        <p class="text-muted mb-3" style="font-size:0.875rem; line-height:1.4;">${item.summary}</p>

        <div style="background:var(--color-surface-light); padding:0.75rem; border-radius:var(--radius-sm); margin-bottom:1rem;">
          <strong style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-text);">Key Mindset Takeaways:</strong>
          <ul style="margin-top:0.35rem; margin-left:1.2rem; font-size:0.825rem; color:var(--color-text-muted);">
            ${item.takeaways.map(t => `<li style="margin-bottom:0.2rem;">${t}</li>`).join('')}
          </ul>
        </div>

        <button class="btn btn-outline w-full justify-center" style="font-size:0.8rem; padding:0.4rem; pointer-events:none;">
          Read Full Psychological Guide →
        </button>
      </div>
    `).join('');
  }

  bindEvents() {
    // Search Input
    const txtSearch = document.getElementById('txtPsychSearch');
    txtSearch?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.updateView();
    });

    // Card Clicks
    document.querySelectorAll('.psych-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-psych-id');
        const item = this.items.find(i => i.id === id);
        if (item) {
          this.showGuideModal(item);
        }
      });
    });

    // Quick Tool Buttons
    document.getElementById('btnOpenBreathingModal')?.addEventListener('click', () => {
      this.showBreathingModal();
    });

    document.getElementById('btnOpenGroundingModal')?.addEventListener('click', () => {
      this.showGroundingModal();
    });
  }

  updateView() {
    const container = document.getElementById('psychCardsContainer');
    if (container) {
      const filtered = this.getFilteredItems();
      container.innerHTML = this.renderCards(filtered);
      this.bindEvents();
      window.renderLucideIcons();
    }
  }

  showGuideModal(item) {
    window.apexApp.showModal(item.title, `
      <div class="flex items-center gap-2 mb-4">
        <span class="icon-lg text-accent flex items-center">${window.getIconSvg(item.icon, 'icon-lg')}</span>
        <span class="badge badge-f1-amber">${item.badge}</span>
      </div>

      <div class="psych-modal-body" style="font-size:0.95rem; line-height:1.6;">
        ${this.formatMarkdown(item.content)}
      </div>

      <div class="flex justify-end mt-6">
        <button class="btn btn-primary" onclick="window.apexApp.closeModal();">Close Guide</button>
      </div>
    `);
  }

  // Interactive 4-2-4 Box Breathing Timer Modal
  showBreathingModal() {
    window.apexApp.showModal('<i data-lucide="wind" class="icon-md text-accent me-2"></i> Pre-Session 4-2-4 Box Breathing', `
      <div class="text-center py-4">
        <p class="text-muted mb-4">Slow your heart rate, reduce pre-race anxiety, and center your nervous system before driving.</p>

        <div id="breathingCircle" style="width:140px; height:140px; border-radius:50%; border:4px solid var(--color-f1-purple); margin:0 auto 1.5rem auto; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(255,30,0,0.1); transition:all 1s ease-in-out;">
          <span id="breathingPhaseLabel" style="font-family:var(--font-heading); font-size:1.25rem; font-weight:800; text-transform:uppercase;">READY</span>
          <span id="breathingCountDown" style="font-family:var(--font-telemetry); font-size:2rem; font-weight:700; color:var(--color-accent-red);">4</span>
        </div>

        <p class="text-muted mb-6" id="breathingInstructionText" style="font-size:0.9rem; min-height:40px;">
          Press "Start 1-Min Centering" to begin the guided breathing cycle.
        </p>

        <div class="flex justify-center gap-3">
          <button class="btn btn-primary" id="btnToggleBreathingTimer">Start 1-Min Centering</button>
          <button class="btn btn-secondary" onclick="window.psychologyController.stopBreathingTimer(); window.apexApp.closeModal();">Done</button>
        </div>
      </div>
    `);

    document.getElementById('btnToggleBreathingTimer')?.addEventListener('click', () => {
      this.toggleBreathingTimer();
    });
  }

  toggleBreathingTimer() {
    const btn = document.getElementById('btnToggleBreathingTimer');
    if (this.isBreathingActive) {
      this.stopBreathingTimer();
      if (btn) btn.textContent = 'Start 1-Min Centering';
    } else {
      this.startBreathingTimer();
      if (btn) btn.textContent = 'Pause Breathing';
    }
  }

  startBreathingTimer() {
    this.isBreathingActive = true;
    const phases = [
      { name: 'INHALE', duration: 4, text: 'Breathe in slowly through your nose...', scale: 1.25, bg: 'rgba(34,197,94,0.15)', color: '#22C55E' },
      { name: 'HOLD', duration: 2, text: 'Hold your breath calmly...', scale: 1.25, bg: 'rgba(234,179,8,0.15)', color: '#EAB308' },
      { name: 'EXHALE', duration: 4, text: 'Breathe out slowly through your mouth...', scale: 0.9, bg: 'rgba(255,30,0,0.15)', color: '#FF1E00' }
    ];

    this.breathingPhaseIndex = 0;
    this.breathingCount = phases[0].duration;

    const updateUI = () => {
      const p = phases[this.breathingPhaseIndex];
      const circle = document.getElementById('breathingCircle');
      const phaseLabel = document.getElementById('breathingPhaseLabel');
      const countLabel = document.getElementById('breathingCountDown');
      const instruct = document.getElementById('breathingInstructionText');

      if (phaseLabel) phaseLabel.textContent = p.name;
      if (countLabel) {
        countLabel.textContent = this.breathingCount;
        countLabel.style.color = p.color;
      }
      if (instruct) instruct.textContent = p.text;
      if (circle) {
        circle.style.transform = `scale(${p.scale})`;
        circle.style.borderColor = p.color;
        circle.style.background = p.bg;
      }
    };

    updateUI();

    this.breathingTimer = setInterval(() => {
      this.breathingCount--;
      if (this.breathingCount <= 0) {
        this.breathingPhaseIndex = (this.breathingPhaseIndex + 1) % phases.length;
        this.breathingCount = phases[this.breathingPhaseIndex].duration;
      }
      updateUI();
    }, 1000);
  }

  stopBreathingTimer() {
    this.isBreathingActive = false;
    if (this.breathingTimer) {
      clearInterval(this.breathingTimer);
      this.breathingTimer = null;
    }
  }

  // Interactive 5-4-3-2-1 Grounding Modal
  showGroundingModal() {
    window.apexApp.showModal('<i data-lucide="compass" class="icon-md text-accent me-2"></i> 5-4-3-2-1 Sensory Grounding', `
      <div>
        <p class="text-muted mb-4">Use this exercise to clear anxiety or tilt and bring your mind back into the physical cockpit.</p>

        <div class="card mb-3" style="background:var(--color-surface-light);">
          <h4 style="font-size:0.95rem;" class="text-accent flex items-center gap-2"><i data-lucide="eye" class="icon-sm"></i> 5 Things You SEE</h4>
          <p class="text-muted mt-1" style="font-size:0.85rem;">Look around your setup: 100m brake board, wheel LEDs, apex curb, monitor edge, force feedback gauge.</p>
        </div>

        <div class="card mb-3" style="background:var(--color-surface-light);">
          <h4 style="font-size:0.95rem;" class="text-accent flex items-center gap-2"><i data-lucide="hand" class="icon-sm"></i> 4 Things You FEEL</h4>
          <p class="text-muted mt-1" style="font-size:0.85rem;">Wheel rim texture in hands, pedal pressure under feet, seat back against posture, cooling fan airflow.</p>
        </div>

        <div class="card mb-3" style="background:var(--color-surface-light);">
          <h4 style="font-size:0.95rem;" class="text-accent flex items-center gap-2"><i data-lucide="volume-2" class="icon-sm"></i> 3 Things You HEAR</h4>
          <p class="text-muted mt-1" style="font-size:0.85rem;">Engine pitch at high revs, tire scrub on corner entry, gear shift click mechanism.</p>
        </div>

        <div class="card mb-3" style="background:var(--color-surface-light);">
          <h4 style="font-size:0.95rem;" class="text-accent flex items-center gap-2"><i data-lucide="wind" class="icon-sm"></i> 2 Things You SMELL</h4>
          <p class="text-muted mt-1" style="font-size:0.85rem;">Ambient room air, warm rig electronics.</p>
        </div>

        <div class="card mb-4" style="background:var(--color-surface-light);">
          <h4 style="font-size:0.95rem;" class="text-accent flex items-center gap-2"><i data-lucide="coffee" class="icon-sm"></i> 1 Thing You TASTE</h4>
          <p class="text-muted mt-1" style="font-size:0.85rem;">Water / hydration sip before green flag.</p>
        </div>

        <div class="flex justify-end">
          <button class="btn btn-primary" onclick="window.apexApp.closeModal();">Grounded & Ready</button>
        </div>
      </div>
    `);
  }

  formatMarkdown(content) {
    if (!content) return '';

    return content
      .split('\n\n')
      .map(block => {
        let text = block.trim();
        if (!text) return '';

        if (text.startsWith('#### ')) {
          return `<h4 style="font-size:1.05rem; margin-top:1.25rem; margin-bottom:0.5rem; color:var(--color-text);">${text.replace('#### ', '')}</h4>`;
        }
        if (text.startsWith('### ')) {
          return `<h3 style="font-size:1.25rem; margin-top:1.5rem; margin-bottom:0.75rem; border-bottom:1px solid var(--color-border); padding-bottom:0.35rem;">${text.replace('### ', '')}</h3>`;
        }

        if (text.includes('\n- ') || text.startsWith('- ')) {
          const items = text.split('\n')
            .filter(line => line.trim().startsWith('- '))
            .map(line => `<li style="margin-bottom:0.3rem;">${this.formatInline(line.trim().substring(2))}</li>`)
            .join('');
          return `<ul style="margin-left:1.25rem; margin-bottom:1rem;">${items}</ul>`;
        }

        if (text.includes('\n1. ') || text.startsWith('1. ')) {
          const items = text.split('\n')
            .filter(line => /^\d+\.\s/.test(line.trim()))
            .map(line => `<li style="margin-bottom:0.3rem;">${this.formatInline(line.trim().replace(/^\d+\.\s/, ''))}</li>`)
            .join('');
          return `<ol style="margin-left:1.25rem; margin-bottom:1rem;">${items}</ol>`;
        }

        // Tables
        if (text.includes('|')) {
          const lines = text.split('\n').filter(l => l.trim().startsWith('|'));
          if (lines.length >= 2) {
            const headerCols = lines[0].split('|').map(c => c.trim()).filter(Boolean);
            const dataRows = lines.slice(2).map(row => row.split('|').map(c => c.trim()).filter(Boolean));

            const thHtml = headerCols.map(h => `<th style="background:var(--color-surface-light); padding:0.5rem; border:1px solid var(--color-border); font-size:0.85rem;">${this.formatInline(h)}</th>`).join('');
            const trHtml = dataRows.map(r => `
              <tr>
                ${r.map(c => `<td style="padding:0.5rem; border:1px solid var(--color-border); font-size:0.85rem;">${this.formatInline(c)}</td>`).join('')}
              </tr>
            `).join('');

            return `<div style="overflow-x:auto; margin-bottom:1rem;"><table style="width:100%; border-collapse:collapse;"><thead><tr>${thHtml}</tr></thead><tbody>${trHtml}</tbody></table></div>`;
          }
        }

        return `<p style="margin-bottom:0.85rem;">${this.formatInline(text)}</p>`;
      })
      .join('');
  }

  formatInline(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>');
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}

window.psychologyController = new PsychologyController();
