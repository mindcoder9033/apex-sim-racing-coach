/**
 * SessionController - Manages active coaching session flows
 * Supports 5-step standard sessions & 8-stage 3-Phase Tabbed Skip Barber sessions
 * Phases: 1. Pre-Drive (Theory, Practice) -> 2. In-Car (Practical, Challenge, Assessment) -> 3. Post-Drive (Telemetry, Mindset, Reflection)
 */

class SessionController {
  constructor() {
    this.currentModuleId = 1;
    this.currentSessionId = 1;
    this.currentStepIndex = 0;
    this.steps = ['theory', 'practice', 'practical', 'challenge', 'assessment'];
    this.sessionData = {
      ratings: { brakeConsistency: 3, apexAccuracy: 3, throttleControl: 3, overallControl: 3, confidence: 3 },
      selectedDrillLevel: 'easy',
      practiceCompleted: false,
      practicalCompleted: false,
      challengeCompleted: false,
      lapTime: '',
      notes: '',
      reflection: '',
      spinCount: 0,
      telemetryNotes: {},
      psychologicalCheckIn: { focus: 4, frustration: 1, confidence: 3 },
      reflectionAnswers: {}
    };
  }

  loadSession(moduleId, sessionId) {
    if (!window.apexStore.isSessionUnlocked(moduleId, sessionId)) {
      if (window.modulesController) {
        window.modulesController.showLockedAlert(moduleId, sessionId);
      }
      return false;
    }

    this.currentModuleId = moduleId;
    this.currentSessionId = sessionId;
    this.currentStepIndex = 0;
    
    const mod = APEX_CONTENT.modules.find(m => m.id === moduleId);
    const session = mod && mod.sessions ? mod.sessions.find(s => s.id === sessionId) : null;
    if (!mod || !session) {
      alert('Session content not found!');
      return false;
    }

    this.sessionConfig = session;
    
    // Determine session steps mode
    if (session.telemetryReflection || session.psychologicalCheckIn || session.sessionReflection) {
      this.is8Stage = true;
      this.steps = ['theory', 'practice', 'practical', 'challenge', 'assessment', 'telemetryReflection', 'psychologicalCheckIn', 'sessionReflection'];
    } else {
      this.is8Stage = false;
      this.steps = ['theory', 'practice', 'practical', 'challenge', 'assessment'];
    }

    // Load saved data if available
    const existing = window.apexStore.getSession(moduleId, sessionId);
    if (existing) {
      this.sessionData = {
        ...this.resetSessionData(),
        ...existing,
        ratings: { ...this.sessionData.ratings, ...(existing.ratings || {}) },
        telemetryNotes: { ...(existing.telemetryNotes || {}) },
        psychologicalCheckIn: { ...(existing.psychologicalCheckIn || {}) },
        reflectionAnswers: { ...(existing.reflectionAnswers || {}) }
      };
    } else {
      this.resetSessionData();
    }

    this.renderHeader();
    this.renderStepContent();
    return true;
  }

  resetSessionData() {
    this.sessionData = {
      ratings: { brakeConsistency: 3, apexAccuracy: 3, throttleControl: 3, overallControl: 3, confidence: 3 },
      selectedDrillLevel: 'easy',
      practiceCompleted: false,
      practicalCompleted: false,
      challengeCompleted: false,
      lapTime: '',
      notes: '',
      reflection: '',
      spinCount: 0,
      telemetryNotes: {},
      psychologicalCheckIn: {
        focus: (this.sessionConfig && this.sessionConfig.psychologicalCheckIn) ? this.sessionConfig.psychologicalCheckIn.defaultFocus || 4 : 4,
        frustration: (this.sessionConfig && this.sessionConfig.psychologicalCheckIn) ? this.sessionConfig.psychologicalCheckIn.defaultFrustration || 1 : 1,
        confidence: (this.sessionConfig && this.sessionConfig.psychologicalCheckIn) ? this.sessionConfig.psychologicalCheckIn.defaultConfidence || 3 : 3
      },
      reflectionAnswers: {}
    };
    return this.sessionData;
  }

  getCurrentPhaseIndex() {
    if (!this.is8Stage) return 0;
    if (this.currentStepIndex <= 1) return 0; // Pre-Drive
    if (this.currentStepIndex <= 4) return 1; // In-Car
    return 2; // Post-Drive
  }

  renderHeader() {
    const headerEl = document.getElementById('sessionHeaderContainer');
    if (!headerEl) return;

    const s = this.sessionConfig;
    const mod = APEX_CONTENT.modules.find(m => m.id === this.currentModuleId);
    const modTitle = mod ? mod.title : `Module ${this.currentModuleId}`;
    const assists = s.assistsConfig;

    let assistsHtml = '';
    if (assists) {
      const getBadge = (val) => val === 'Off' 
        ? `<span class="badge" style="background:rgba(235, 77, 75, 0.15); color:var(--color-danger); border:1px solid rgba(235, 77, 75, 0.3);">OFF</span>`
        : `<span class="badge" style="background:rgba(46, 213, 115, 0.15); color:var(--color-success); border:1px solid rgba(46, 213, 115, 0.3);">${val}</span>`;
      
      assistsHtml = `
        <div class="meta-pill flex items-center gap-2" style="background:rgba(255,255,255,0.03); border:1px solid var(--color-border); font-size:0.75rem;">
          <i data-lucide="sliders" class="icon-sm text-accent"></i>
          <span>Assists:</span>
          <span>STM: ${getBadge(assists.stm)}</span>
          <span>TCS: ${getBadge(assists.tcs)}</span>
          <span>Line: ${getBadge(assists.drivingLine)}</span>
          <span>ABS: ${getBadge(assists.abs)}</span>
          <span>Steering: <strong>${assists.steering}</strong></span>
        </div>
      `;
    }

    let progressHeaderHtml = '';
    if (this.is8Stage) {
      const phaseIdx = this.getCurrentPhaseIndex();
      progressHeaderHtml = `
        <!-- 3-Phase Tabbed Workflow Header -->
        <div class="workflow-phase-tabs mt-4 flex gap-2 border-b border-border pb-3">
          <button class="phase-tab-btn flex-1 py-2 px-3 rounded flex items-center justify-center gap-2 ${phaseIdx === 0 ? 'active' : ''}" data-phase-idx="0" style="${phaseIdx === 0 ? 'background:var(--color-primary); color:#0a0a0f; font-weight:700;' : 'background:var(--color-surface-light); color:var(--color-text-muted);'}">
            <i data-lucide="book-open" class="icon-sm"></i>
            <span>Phase 1: Pre-Drive</span>
            <span class="badge font-telemetry" style="font-size:0.7rem; background:rgba(0,0,0,0.2);">15 mins</span>
          </button>
          <button class="phase-tab-btn flex-1 py-2 px-3 rounded flex items-center justify-center gap-2 ${phaseIdx === 1 ? 'active' : ''}" data-phase-idx="1" style="${phaseIdx === 1 ? 'background:var(--color-primary); color:#0a0a0f; font-weight:700;' : 'background:var(--color-surface-light); color:var(--color-text-muted);'}">
            <i data-lucide="car" class="icon-sm"></i>
            <span>Phase 2: In-Car</span>
            <span class="badge font-telemetry" style="font-size:0.7rem; background:rgba(0,0,0,0.2);">20 mins</span>
          </button>
          <button class="phase-tab-btn flex-1 py-2 px-3 rounded flex items-center justify-center gap-2 ${phaseIdx === 2 ? 'active' : ''}" data-phase-idx="2" style="${phaseIdx === 2 ? 'background:var(--color-primary); color:#0a0a0f; font-weight:700;' : 'background:var(--color-surface-light); color:var(--color-text-muted);'}">
            <i data-lucide="brain" class="icon-sm"></i>
            <span>Phase 3: Post-Drive</span>
            <span class="badge font-telemetry" style="font-size:0.7rem; background:rgba(0,0,0,0.2);">10 mins</span>
          </button>
        </div>

        <!-- 8-Stage Bubble Stepper -->
        <div class="step-progress-bar mt-3" style="overflow-x:auto; padding-bottom:0.5rem;">
          ${this.steps.map((stKey, idx) => {
            const labels = ['Theory', 'Practice', 'Practical', 'Challenge', 'Assessment', 'Telemetry', 'Mindset', 'Reflection'];
            const status = this.getStepStatus(idx);
            return `
              <div class="step-item ${status}" data-step-idx="${idx}" title="${labels[idx]}">
                <div class="step-bubble">${idx + 1}</div>
                <span class="step-name" style="font-size:0.75rem;">${labels[idx]}</span>
              </div>
              ${idx < this.steps.length - 1 ? `<div class="step-connector ${status === 'completed' ? 'completed' : ''}"></div>` : ''}
            `;
          }).join('')}
        </div>
      `;
    } else {
      progressHeaderHtml = `
        <div class="step-progress-bar">
          <div class="step-item ${this.getStepStatus(0)}" data-step-idx="0"><div class="step-bubble">1</div><span class="step-name">Theory</span></div>
          <div class="step-connector ${this.getStepStatus(0) === 'completed' ? 'completed' : ''}"></div>
          <div class="step-item ${this.getStepStatus(1)}" data-step-idx="1"><div class="step-bubble">2</div><span class="step-name">Practice</span></div>
          <div class="step-connector ${this.getStepStatus(1) === 'completed' ? 'completed' : ''}"></div>
          <div class="step-item ${this.getStepStatus(2)}" data-step-idx="2"><div class="step-bubble">3</div><span class="step-name">Practical</span></div>
          <div class="step-connector ${this.getStepStatus(2) === 'completed' ? 'completed' : ''}"></div>
          <div class="step-item ${this.getStepStatus(3)}" data-step-idx="3"><div class="step-bubble">4</div><span class="step-name">Challenge</span></div>
          <div class="step-connector ${this.getStepStatus(3) === 'completed' ? 'completed' : ''}"></div>
          <div class="step-item ${this.getStepStatus(4)}" data-step-idx="4"><div class="step-bubble">5</div><span class="step-name">Assessment</span></div>
        </div>
      `;
    }

    headerEl.innerHTML = `
      <div class="session-header-card">
        <div class="session-breadcrumb">
          <button class="btn btn-secondary btn-icon flex items-center justify-center" id="sessionBackBtn" title="Back to Dashboard" aria-label="Back to Dashboard"><i data-lucide="arrow-left" class="icon-sm"></i></button>
          <span>Module ${this.currentModuleId}: ${modTitle} › Session ${s.id}</span>
        </div>
        <h2 class="font-menu" style="font-size:1.4rem;">${s.title}</h2>
        <div class="session-meta-pills">
          <span class="meta-pill flex items-center gap-1"><i data-lucide="crosshair" class="icon-sm text-accent"></i> Focus: ${s.focus}</span>
          <span class="meta-pill flex items-center gap-1"><i data-lucide="car" class="icon-sm text-muted"></i> Car: ${s.car}</span>
          <span class="meta-pill flex items-center gap-1"><i data-lucide="flag" class="icon-sm text-muted"></i> Track: ${s.track}</span>
          <span class="meta-pill font-telemetry flex items-center gap-1"><i data-lucide="timer" class="icon-sm text-muted"></i> Target: ${s.targetLapTime ? (s.targetLapTime / 60).toFixed(2).replace('.', ':') : 'N/A'}</span>
          <span class="meta-pill font-telemetry flex items-center gap-1"><i data-lucide="clock" class="icon-sm text-muted"></i> Total Time: 45 min</span>
          ${assistsHtml}
        </div>
        ${progressHeaderHtml}
      </div>
    `;

    this.bindHeaderEvents();
    if (window.renderLucideIcons) window.renderLucideIcons();
  }

  bindHeaderEvents() {
    document.getElementById('sessionBackBtn')?.addEventListener('click', () => {
      window.apexApp.navigateTo('dashboard');
    });

    document.querySelectorAll('.step-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-step-idx'));
        this.currentStepIndex = idx;
        this.renderHeader();
        this.renderStepContent();
      });
    });

    document.querySelectorAll('.phase-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const phase = parseInt(e.currentTarget.getAttribute('data-phase-idx'));
        if (phase === 0) this.currentStepIndex = 0;
        else if (phase === 1) this.currentStepIndex = 2;
        else if (phase === 2) this.currentStepIndex = 5;
        this.renderHeader();
        this.renderStepContent();
      });
    });
  }

  getStepStatus(stepIdx) {
    if (stepIdx < this.currentStepIndex) return 'completed';
    if (stepIdx === this.currentStepIndex) return 'active';
    return '';
  }

  renderStepContent() {
    const container = document.getElementById('sessionStepContainer');
    if (!container) return;

    const s = this.sessionConfig;
    const stepName = this.steps[this.currentStepIndex];

    let html = '';

    if (stepName === 'theory') {
      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="book-open" class="icon-md text-accent me-2"></i> Stage 1: Theory & Concept (5 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 1: Pre-Drive</span>
          </div>
          <h4 class="text-primary mt-2" style="font-size:1.2rem;">${s.theory.title}</h4>
          <div class="theory-body mt-3" style="line-height:1.6; font-size:0.95rem;">
            ${s.theory.content.replace(/\n\n/g, '<br><br>')}
          </div>
          
          <div id="sessionDiagramContainer" class="mt-4"></div>

          ${s.theory.keyTakeaways ? `
            <div class="card mt-4" style="background:var(--color-surface-light); border-left:4px solid var(--color-accent);">
              <h4 class="flex items-center gap-2" style="font-size:1rem;"><i data-lucide="check-circle-2" class="icon-sm text-success"></i> Skip Barber Key Takeaways</h4>
              <ul class="mt-2 pl-4 text-muted" style="font-size:0.9rem;">
                ${s.theory.keyTakeaways.map(t => `<li class="mt-1">${t}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div class="flex justify-between items-center mt-6">
            <div></div>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Stage 2: Practice Drills</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'practice') {
      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="target" class="icon-md text-accent me-2"></i> Stage 2: Practice Drills (10 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 1: Pre-Drive</span>
          </div>
          <p class="text-muted mb-4">Focus: ${s.practice.focus}</p>
          
          <div class="grid-3 gap-4">
            ${s.practice.drills.map(d => `
              <div class="card p-4 drill-level-card ${this.sessionData.selectedDrillLevel === d.id ? 'selected' : ''}" data-drill-id="${d.id}" style="background:var(--color-surface-light); border:1px solid var(--color-border); cursor:pointer;">
                <div class="flex justify-between items-center mb-2">
                  <span class="badge" style="font-size:0.75rem;">${d.level}</span>
                  <span class="text-muted" style="font-size:0.8rem;"><i data-lucide="clock" class="icon-sm me-1"></i> ${d.time}</span>
                </div>
                <h4 style="font-size:1rem; font-weight:600;">${d.title}</h4>
                <p class="text-muted mt-2" style="font-size:0.85rem; line-height:1.4;">${d.desc}</p>
                <div class="mt-3 text-tertiary" style="font-size:0.8rem;">Reps: ${d.reps}</div>
              </div>
            `).join('')}
          </div>

          <div class="form-group mt-4 p-3 rounded" style="background:rgba(255,255,255,0.02); border:1px solid var(--color-border);">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="chkPracticeDone" ${this.sessionData.practiceCompleted ? 'checked' : ''} style="width:18px; height:18px;">
              <span>I have completed the practice drill warmups in Forza Motorsport 2023</span>
            </label>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Enter Phase 2: Practical Driving</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'practical') {
      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="car" class="icon-md text-accent me-2"></i> Stage 3: Practical Driving (10 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 2: In-Car</span>
          </div>
          <h4 class="text-primary mt-2">${s.practical.title}</h4>
          <p class="text-muted mt-1">Focus: ${s.practical.focus}</p>

          <div class="card mt-4" style="background:var(--color-surface-light); border:1px solid var(--color-border);">
            <h4 style="font-size:0.95rem; font-weight:600;"><i data-lucide="list-checks" class="icon-sm text-accent me-1"></i> Track Instructions (${s.practical.laps} Laps)</h4>
            <ol class="mt-2 pl-4 text-muted" style="font-size:0.9rem; line-height:1.5;">
              ${s.practical.instructions.map(inst => `<li class="mt-1">${inst}</li>`).join('')}
            </ol>
          </div>

          <div class="form-group mt-5 p-3 rounded" style="background:rgba(255,255,255,0.02); border:1px solid var(--color-border);">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="chkPracticalDone" ${this.sessionData.practicalCompleted ? 'checked' : ''} style="width:18px; height:18px;">
              <span>I have executed my ${s.practical.laps} focused stint laps in Forza Motorsport 2023</span>
            </label>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Stage 4: Challenge</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'challenge') {
      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="award" class="icon-md text-accent me-2"></i> Stage 4: Session Challenge (5 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 2: In-Car</span>
          </div>
          <h4 class="text-warning mt-2">${s.challenge.title}</h4>
          <p class="mt-2 text-muted">${s.challenge.description}</p>
          <div class="badge mt-2" style="background:rgba(254, 202, 87, 0.15); color:var(--color-warning); border:1px solid rgba(254, 202, 87, 0.3); font-size:0.85rem;">
            Success Criteria: ${s.challenge.criteria}
          </div>

          <div class="form-group mt-6">
            <label class="form-label">Challenge Observation Notes</label>
            <textarea class="form-control" id="txtChallengeNotes" rows="3" placeholder="Write down reference points, braking markers, or FFB sensations observed...">${this.sessionData.notes || ''}</textarea>
          </div>

          <div class="form-group mt-4 p-3 rounded" style="background:rgba(255,255,255,0.02); border:1px solid var(--color-border);">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="chkChallengeDone" ${this.sessionData.challengeCompleted ? 'checked' : ''} style="width:18px; height:18px;">
              <span>I have completed today's challenge mission</span>
            </label>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Stage 5: Assessment</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'assessment') {
      const criteriaText = s.assessment ? s.assessment.criteria : 'Technique execution and lap consistency evaluation.';
      const passing = s.assessment ? s.assessment.passingScore : 80;
      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="notebook-pen" class="icon-md text-accent me-2"></i> Stage 5: Technique Assessment (5 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 2: In-Car</span>
          </div>
          <div class="p-3 rounded mt-2 mb-4" style="background:var(--color-surface-light); border:1px solid var(--color-border);">
            <div class="text-tertiary" style="font-size:0.8rem; text-transform:uppercase;">Session Benchmark Standard</div>
            <div class="mt-1" style="font-size:0.95rem; color:var(--color-text);">${criteriaText}</div>
            <div class="text-accent mt-1" style="font-size:0.8rem;">Passing Target Score: ${passing}%</div>
          </div>

          <div class="grid-2 gap-4">
            <div class="rating-field card p-3" style="background:rgba(255,255,255,0.02);">
              <span class="rating-label">Brake Consistency</span>
              <div class="star-rating mt-2" data-rating-key="brakeConsistency">${this.renderStars(this.sessionData.ratings.brakeConsistency)}</div>
            </div>
            <div class="rating-field card p-3" style="background:rgba(255,255,255,0.02);">
              <span class="rating-label">Apex Accuracy</span>
              <div class="star-rating mt-2" data-rating-key="apexAccuracy">${this.renderStars(this.sessionData.ratings.apexAccuracy)}</div>
            </div>
            <div class="rating-field card p-3" style="background:rgba(255,255,255,0.02);">
              <span class="rating-label">Throttle Control</span>
              <div class="star-rating mt-2" data-rating-key="throttleControl">${this.renderStars(this.sessionData.ratings.throttleControl)}</div>
            </div>
            <div class="rating-field card p-3" style="background:rgba(255,255,255,0.02);">
              <span class="rating-label">Overall Control</span>
              <div class="star-rating mt-2" data-rating-key="overallControl">${this.renderStars(this.sessionData.ratings.overallControl)}</div>
            </div>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Enter Phase 3: Telemetry Reflection</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'telemetryReflection') {
      const tel = s.telemetryReflection;
      const prompts = tel ? tel.prompts : [
        { key: 'brakeDecay', label: 'Brake Release Slope', question: 'Did brake pressure taper smoothly off past turn-in?' },
        { key: 'steeringVariance', label: 'Steering Input Smoothness', question: 'Was your Moza R3 wheel unwound smoothly on corner exit?' }
      ];

      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="activity" class="icon-md text-accent me-2"></i> Stage 6: Telemetry Reflection (5 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 3: Post-Drive</span>
          </div>
          <p class="text-muted mt-2">${tel ? tel.title : 'Guided Telemetry & Feel Review'}</p>

          <div class="flex flex-col gap-4 mt-4">
            ${prompts.map(p => `
              <div class="card p-4" style="background:var(--color-surface-light); border:1px solid var(--color-border);">
                <label class="form-label font-semibold text-primary flex items-center gap-2">
                  <i data-lucide="bar-chart-2" class="icon-sm text-accent"></i>
                  ${p.label}
                </label>
                <p class="text-muted" style="font-size:0.88rem;">${p.question}</p>
                <textarea class="form-control mt-2 txt-telemetry-prompt" data-telemetry-key="${p.key}" rows="2" placeholder="Record your observations...">${this.sessionData.telemetryNotes[p.key] || ''}</textarea>
              </div>
            `).join('')}
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Stage 7: Psychological Check-in</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'psychologicalCheckIn') {
      const psych = s.psychologicalCheckIn || {};
      const curFocus = this.sessionData.psychologicalCheckIn.focus || 4;
      const curFrust = this.sessionData.psychologicalCheckIn.frustration || 1;
      const curConf = this.sessionData.psychologicalCheckIn.confidence || 3;
      const showResetPrompt = curFrust >= 3;

      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="brain" class="icon-md text-accent me-2"></i> Stage 7: Psychological Check-in (3 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 3: Post-Drive</span>
          </div>
          <p class="text-muted mt-2">Evaluate your mindset and emotional state post-drive:</p>

          <div class="flex flex-col gap-5 mt-4">
            <!-- Focus Slider -->
            <div class="card p-4" style="background:var(--color-surface-light); border:1px solid var(--color-border);">
              <div class="flex justify-between items-center mb-2">
                <span class="font-semibold text-primary">Focus Level</span>
                <span class="badge font-telemetry text-accent" id="valFocusDisplay">${curFocus} / 5</span>
              </div>
              <input type="range" class="form-range w-full" id="sliderFocus" min="1" max="5" value="${curFocus}">
              <div class="flex justify-between text-tertiary mt-1" style="font-size:0.75rem;">
                <span>1 - Distracted</span>
                <span>3 - Moderate</span>
                <span>5 - Locked In</span>
              </div>
            </div>

            <!-- Frustration Slider -->
            <div class="card p-4" style="background:var(--color-surface-light); border:1px solid var(--color-border);">
              <div class="flex justify-between items-center mb-2">
                <span class="font-semibold text-primary">Frustration Level</span>
                <span class="badge font-telemetry ${curFrust >= 3 ? 'text-danger' : 'text-success'}" id="valFrustrationDisplay">${curFrust} / 5</span>
              </div>
              <input type="range" class="form-range w-full" id="sliderFrustration" min="1" max="5" value="${curFrust}">
              <div class="flex justify-between text-tertiary mt-1" style="font-size:0.75rem;">
                <span>1 - Calm & Serene</span>
                <span>3 - Mild Annoyance</span>
                <span>5 - High Tilt</span>
              </div>
            </div>

            <!-- Confidence Slider -->
            <div class="card p-4" style="background:var(--color-surface-light); border:1px solid var(--color-border);">
              <div class="flex justify-between items-center mb-2">
                <span class="font-semibold text-primary">Confidence Level</span>
                <span class="badge font-telemetry text-accent" id="valConfidenceDisplay">${curConf} / 5</span>
              </div>
              <input type="range" class="form-range w-full" id="sliderConfidence" min="1" max="5" value="${curConf}">
              <div class="flex justify-between text-tertiary mt-1" style="font-size:0.75rem;">
                <span>1 - Hesitant</span>
                <span>3 - Steady</span>
                <span>5 - Fully Empowered</span>
              </div>
            </div>

            <!-- Skip Barber Mental Reset Box -->
            <div id="resetPromptCard" class="card p-4" style="background:rgba(255, 107, 107, 0.1); border:1px solid rgba(255, 107, 107, 0.3); ${showResetPrompt ? '' : 'display:none;'}">
              <h4 class="text-danger flex items-center gap-2" style="font-size:0.95rem;"><i data-lucide="shield-alert" class="icon-sm"></i> Skip Barber Mental Reset Routine</h4>
              <p class="mt-2 text-muted" style="font-size:0.88rem; line-height:1.5;">${psych.resetPrompt || 'Frustration detected: Take 3 deep diaphragmatic breaths. Recalibrate your baseline—focus on process execution over lap times.'}</p>
            </div>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Stage 8: Session Reflection</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'sessionReflection') {
      const refl = s.sessionReflection || {};
      const questions = refl.questions || [
        'What was your single biggest breakthrough in car feel today?',
        'Which corner gave you the most resistance and why?',
        'What is your primary focus for next session?'
      ];

      html = `
        <div class="card fade-in">
          <div class="card-header flex justify-between items-center">
            <h3><i data-lucide="pen-tool" class="icon-md text-accent me-2"></i> Stage 8: Session Journal & Debrief (2 minutes)</h3>
            <span class="badge" style="background:var(--color-surface-light);">Phase 3: Post-Drive</span>
          </div>
          <p class="text-muted mt-2">Summarize your session takeaways to lock in muscle memory:</p>

          <div class="grid-2 gap-4 mt-4">
            <div class="form-group">
              <label class="form-label">Best Lap Time (e.g. 1:48.5 or 108.5)</label>
              <input type="text" class="form-control" id="txtLapTime" placeholder="e.g. 1:48.5" value="${this.sessionData.lapTime || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Spin / Off-Track Incidents</label>
              <input type="number" class="form-control" id="numSpinCount" min="0" max="20" value="${this.sessionData.spinCount || 0}">
            </div>
          </div>

          <div class="flex flex-col gap-4 mt-4">
            ${questions.map((q, qIdx) => `
              <div class="form-group">
                <label class="form-label font-semibold text-primary">${qIdx + 1}. ${q}</label>
                <textarea class="form-control txt-reflection-q" data-q-idx="${qIdx}" rows="2" placeholder="Record your answer...">${this.sessionData.reflectionAnswers[qIdx] || ''}</textarea>
              </div>
            `).join('')}
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-success btn-lg flex items-center gap-2" id="btnFinishSession" style="font-weight:700;">
              <span>Complete Session ✓</span>
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    // Attach step-specific event listeners
    if (stepName === 'theory') {
      if (s.theory && s.theory.diagramId === 'corner-path-comparison') {
        if (window.apexDiagrams) window.apexDiagrams.renderCornerComparison('sessionDiagramContainer');
      }
    } else if (stepName === 'practice') {
      container.querySelectorAll('.drill-level-card').forEach(card => {
        card.addEventListener('click', (e) => {
          container.querySelectorAll('.drill-level-card').forEach(c => c.classList.remove('selected'));
          e.currentTarget.classList.add('selected');
          this.sessionData.selectedDrillLevel = e.currentTarget.getAttribute('data-drill-id');
        });
      });
      const chk = container.querySelector('#chkPracticeDone');
      if (chk) chk.addEventListener('change', (e) => this.sessionData.practiceCompleted = e.target.checked);
    } else if (stepName === 'practical') {
      const chk = container.querySelector('#chkPracticalDone');
      if (chk) chk.addEventListener('change', (e) => this.sessionData.practicalCompleted = e.target.checked);
    } else if (stepName === 'challenge') {
      const txt = container.querySelector('#txtChallengeNotes');
      if (txt) txt.addEventListener('input', (e) => this.sessionData.notes = e.target.value);
      const chk = container.querySelector('#chkChallengeDone');
      if (chk) chk.addEventListener('change', (e) => this.sessionData.challengeCompleted = e.target.checked);
    } else if (stepName === 'assessment') {
      container.querySelectorAll('.star-rating').forEach(starContainer => {
        const ratingKey = starContainer.getAttribute('data-rating-key');
        starContainer.querySelectorAll('.star').forEach(star => {
          star.addEventListener('click', (e) => {
            const val = parseInt(e.currentTarget.getAttribute('data-val'));
            this.sessionData.ratings[ratingKey] = val;
            starContainer.innerHTML = this.renderStars(val);
            this.renderStepContent();
          });
        });
      });
    } else if (stepName === 'telemetryReflection') {
      container.querySelectorAll('.txt-telemetry-prompt').forEach(txt => {
        const key = txt.getAttribute('data-telemetry-key');
        txt.addEventListener('input', (e) => {
          this.sessionData.telemetryNotes[key] = e.target.value;
        });
      });
    } else if (stepName === 'psychologicalCheckIn') {
      const focusS = container.querySelector('#sliderFocus');
      const frustS = container.querySelector('#sliderFrustration');
      const confS = container.querySelector('#sliderConfidence');

      if (focusS) {
        focusS.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          this.sessionData.psychologicalCheckIn.focus = val;
          container.querySelector('#valFocusDisplay').innerText = `${val} / 5`;
        });
      }

      if (frustS) {
        frustS.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          this.sessionData.psychologicalCheckIn.frustration = val;
          const disp = container.querySelector('#valFrustrationDisplay');
          disp.innerText = `${val} / 5`;
          disp.className = `badge font-telemetry ${val >= 3 ? 'text-danger' : 'text-success'}`;
          const resetCard = container.querySelector('#resetPromptCard');
          if (resetCard) resetCard.style.display = val >= 3 ? 'block' : 'none';
        });
      }

      if (confS) {
        confS.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          this.sessionData.psychologicalCheckIn.confidence = val;
          container.querySelector('#valConfidenceDisplay').innerText = `${val} / 5`;
          this.sessionData.ratings.confidence = val;
        });
      }
    } else if (stepName === 'sessionReflection') {
      container.querySelectorAll('.txt-reflection-q').forEach(txt => {
        const qIdx = txt.getAttribute('data-q-idx');
        txt.addEventListener('input', (e) => {
          this.sessionData.reflectionAnswers[qIdx] = e.target.value;
        });
      });

      const finishBtn = container.querySelector('#btnFinishSession');
      if (finishBtn) {
        finishBtn.addEventListener('click', () => this.finishSession());
      }
    }

    // Step navigation buttons
    const nextBtn = container.querySelector('#btnNextStep');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStepIndex < this.steps.length - 1) {
          this.currentStepIndex++;
          this.renderHeader();
          this.renderStepContent();
        }
      });
    }

    const prevBtn = container.querySelector('#btnPrevStep');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStepIndex > 0) {
          this.currentStepIndex--;
          this.renderHeader();
          this.renderStepContent();
        }
      });
    }

    if (window.renderLucideIcons) window.renderLucideIcons();
  }

  renderStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="star ${i <= rating ? 'filled' : ''}" data-val="${i}" style="cursor:pointer; font-size:1.2rem; margin-right:4px;">★</span>`;
    }
    return starsHtml;
  }

  parseLapTime(timeStr) {
    if (!timeStr) return null;
    const str = timeStr.trim();
    if (str.includes(':')) {
      const parts = str.split(':');
      return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
    }
    return parseFloat(str) || null;
  }

  finishSession() {
    const lapInput = document.getElementById('txtLapTime')?.value;
    const spinInput = document.getElementById('numSpinCount')?.value;

    this.sessionData.lapTime = this.parseLapTime(lapInput);
    this.sessionData.spinCount = parseInt(spinInput) || 0;
    this.sessionData.targetLapTime = this.sessionConfig.targetLapTime;

    // Combine reflection answers into single string
    const qAnswers = Object.values(this.sessionData.reflectionAnswers).filter(a => a && a.trim().length > 0);
    this.sessionData.reflection = qAnswers.join('\n\n');

    // Complete session in Store
    window.apexStore.completeSession(this.currentModuleId, this.currentSessionId, this.sessionData);

    // Trigger Achievement Modal if unlocked
    const newAchievements = window.apexStore.checkAchievements(`${this.currentModuleId}-${this.currentSessionId}`, this.sessionData);
    
    if (newAchievements.length > 0) {
      window.apexApp.showAchievementModal(newAchievements[0]);
    } else {
      alert('Session Completed! Your telemetry logs, psychological check-in, and reflection have been saved.');
      window.apexApp.navigateTo('dashboard');
    }
  }
}

window.sessionController = new SessionController();
