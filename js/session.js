/**
 * SessionController - Manages active 5-step coaching session flow
 * Steps: 1. Theory -> 2. Practice Drills -> 3. Practical Driving -> 4. Challenge -> 5. Assessment & Reflection
 */

class SessionController {
  constructor() {
    this.currentModuleId = 1;
    this.currentSessionId = 1;
    this.currentStepIndex = 0; // 0: Theory, 1: Practice, 2: Practical, 3: Challenge, 4: Assessment
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
      spinCount: 0
    };
  }

  loadSession(moduleId, sessionId) {
    this.currentModuleId = moduleId;
    this.currentSessionId = sessionId;
    this.currentStepIndex = 0;
    
    // Fetch session configuration from APEX_CONTENT
    const mod = APEX_CONTENT.modules.find(m => m.id === moduleId);
    const session = mod && mod.sessions ? mod.sessions.find(s => s.id === sessionId) : null;
    if (!mod || !session) {
      alert('Session content not found!');
      return false;
    }

    this.sessionConfig = session;
    
    // Check if previously completed data exists
    const existing = window.apexStore.getSession(moduleId, sessionId);
    if (existing) {
      this.sessionData = { ...this.sessionData, ...existing };
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
      spinCount: 0
    };
  }

  renderHeader() {
    const headerEl = document.getElementById('sessionHeaderContainer');
    if (!headerEl) return;

    const s = this.sessionConfig;
    const mod = APEX_CONTENT.modules.find(m => m.id === this.currentModuleId);
    const modTitle = mod ? mod.title : `Module ${this.currentModuleId}`;

    headerEl.innerHTML = `
      <div class="session-header-card">
        <div class="session-breadcrumb">
          <button class="btn btn-secondary btn-icon flex items-center justify-center" id="sessionBackBtn" title="Back to Dashboard" aria-label="Back to Dashboard"><i data-lucide="arrow-left" class="icon-sm"></i></button>
          <span>Module ${this.currentModuleId}: ${modTitle} › Session ${s.id}</span>
        </div>
        <h2 class="font-menu">${s.title}</h2>
        <div class="session-meta-pills">
          <span class="meta-pill flex items-center gap-1"><i data-lucide="crosshair" class="icon-sm text-accent"></i> Focus: ${s.focus}</span>
          <span class="meta-pill flex items-center gap-1"><i data-lucide="car" class="icon-sm text-muted"></i> Car: ${s.car}</span>
          <span class="meta-pill flex items-center gap-1"><i data-lucide="flag" class="icon-sm text-muted"></i> Track: ${s.track}</span>
          <span class="meta-pill font-telemetry flex items-center gap-1"><i data-lucide="timer" class="icon-sm text-muted"></i> Target: ${s.targetLapTime ? (s.targetLapTime / 60).toFixed(2).replace('.', ':') : 'N/A'}</span>
          <span class="meta-pill font-telemetry flex items-center gap-1"><i data-lucide="clock" class="icon-sm text-muted"></i> Est. Time: 45 min</span>
        </div>

        <!-- 5-Step Progress Header -->
        <div class="step-progress-bar">
          <div class="step-item ${this.getStepStatus(0)}" data-step-idx="0">
            <div class="step-bubble">1</div>
            <span class="step-name">Theory</span>
          </div>
          <div class="step-connector ${this.getStepStatus(0) === 'completed' ? 'completed' : ''}"></div>

          <div class="step-item ${this.getStepStatus(1)}" data-step-idx="1">
            <div class="step-bubble">2</div>
            <span class="step-name">Practice</span>
          </div>
          <div class="step-connector ${this.getStepStatus(1) === 'completed' ? 'completed' : ''}"></div>

          <div class="step-item ${this.getStepStatus(2)}" data-step-idx="2">
            <div class="step-bubble">3</div>
            <span class="step-name">Practical</span>
          </div>
          <div class="step-connector ${this.getStepStatus(2) === 'completed' ? 'completed' : ''}"></div>

          <div class="step-item ${this.getStepStatus(3)}" data-step-idx="3">
            <div class="step-bubble">4</div>
            <span class="step-name">Challenge</span>
          </div>
          <div class="step-connector ${this.getStepStatus(3) === 'completed' ? 'completed' : ''}"></div>

          <div class="step-item ${this.getStepStatus(4)}" data-step-idx="4">
            <div class="step-bubble">5</div>
            <span class="step-name">Assessment</span>
          </div>
        </div>
      </div>
    `;

    this.bindHeaderEvents();
    window.renderLucideIcons();
  }

  bindHeaderEvents() {
    document.getElementById('sessionBackBtn').addEventListener('click', () => {
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
        <div class="card">
          <div class="card-header">
            <h3><i data-lucide="book-open" class="icon-md text-accent me-2"></i> Step 1: Racing Theory (10 minutes)</h3>
          </div>
          <h4 class="text-primary">${s.theory.title}</h4>
          <div class="theory-body mt-3" style="line-height:1.6; font-size:0.95rem;">
            ${s.theory.content.replace(/\n\n/g, '<br><br>')}
          </div>
          
          <div id="sessionDiagramContainer"></div>

          ${s.theory.keyTakeaways ? `
            <div class="card mt-4" style="background:var(--color-surface-light);">
              <h4 class="flex items-center gap-2"><i data-lucide="check-circle-2" class="icon-sm text-success"></i> Key Takeaways</h4>
              <ul class="mt-2 pl-4">
                ${s.theory.keyTakeaways.map(t => `<li class="mt-1">${t}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div class="flex justify-between items-center mt-6">
            <div></div>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Practice Drills</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'practice') {
      html = `
        <div class="card">
          <div class="card-header">
            <h3><i data-lucide="target" class="icon-md text-accent me-2"></i> Step 2: Practice Drills (15 minutes)</h3>
          </div>
          <p class="text-muted mb-4">Focus: ${s.practice.focus}</p>
          
          <div class="grid-3 gap-4">
            ${s.practice.drills.map(d => `
              <div class="card p-4 drill-level-card ${this.sessionData.selectedDrillLevel === d.id ? 'selected' : ''}" data-drill-id="${d.id}" style="background:var(--color-surface-light);">
                <div class="flex justify-between items-center mb-2">
                  <span class="badge" style="font-size:0.75rem;">${d.level}</span>
                  <span class="text-muted" style="font-size:0.8rem;"><i data-lucide="clock" class="icon-sm me-1"></i> ${d.time}</span>
                </div>
                <h4 style="font-size:1rem;">${d.title}</h4>
                <p class="text-muted mt-2" style="font-size:0.85rem; line-height:1.4;">${d.desc}</p>
                <div class="mt-3 text-tertiary" style="font-size:0.8rem;">Reps: ${d.reps}</div>
              </div>
            `).join('')}
          </div>

          <div class="form-group mt-4">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="chkPracticeDone" ${this.sessionData.practiceCompleted ? 'checked' : ''} style="width:18px; height:18px;">
              <span>I have completed at least one drill level in Forza Motorsport 2023</span>
            </label>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Practical Driving</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'practical') {
      html = `
        <div class="card">
          <div class="card-header">
            <h3><i data-lucide="car" class="icon-md text-accent me-2"></i> Step 3: Practical Driving (15 minutes)</h3>
            <span class="badge">Car: ${s.car} | Track: ${s.track}</span>
          </div>
          <h4 class="text-primary">${s.practical.title}</h4>
          <p class="mt-2">${s.practical.focus}</p>

          <div class="card mt-4" style="background:var(--color-surface-light);">
            <h4>Instructions</h4>
            <ol class="mt-2 pl-4">
              ${s.practical.instructions.map(inst => `<li class="mt-1">${inst}</li>`).join('')}
            </ol>
          </div>

          <div class="form-group mt-6">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" id="chkPracticalDone" ${this.sessionData.practicalCompleted ? 'checked' : ''} style="width:18px; height:18px;">
              <span>I have completed my ${s.practical.laps} focused laps in Forza Motorsport 2023</span>
            </label>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary flex items-center gap-1" id="btnPrevStep">
              <i data-lucide="arrow-left" class="icon-sm"></i> Previous
            </button>
            <button class="btn btn-primary flex items-center gap-1" id="btnNextStep">
              <span>Continue to Challenge</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'challenge') {
      html = `
        <div class="card">
          <div class="card-header">
            <h3><i data-lucide="award" class="icon-md text-accent me-2"></i> Step 4: Session Challenge (5 minutes)</h3>
          </div>
          <h4 class="text-warning">${s.challenge.title}</h4>
          <p class="mt-2">${s.challenge.description}</p>
          <div class="badge mt-2" style="background:rgba(254, 202, 87, 0.15); color:var(--color-warning);">Success Criteria: ${s.challenge.criteria}</div>

          <div class="form-group mt-6">
            <label class="form-label">Challenge Findings & Reference Notes</label>
            <textarea class="form-control" id="txtChallengeNotes" placeholder="Write down reference points, braking boards, or apex markers you identified...">${this.sessionData.notes || ''}</textarea>
          </div>

          <div class="form-group mt-4">
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
              <span>Continue to Assessment</span>
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </button>
          </div>
        </div>
      `;
    } else if (stepName === 'assessment') {
      html = `
        <div class="card">
          <div class="card-header">
            <h3><i data-lucide="notebook-pen" class="icon-md text-accent me-2"></i> Step 5: Assessment & Guided Reflection (5 minutes)</h3>
          </div>
          <p class="text-muted mb-4">Rate your technique performance and record your reflections to complete the session:</p>

          <div class="rating-field">
            <span class="rating-label">Brake Consistency</span>
            <div class="star-rating" data-rating-key="brakeConsistency">${this.renderStars(this.sessionData.ratings.brakeConsistency)}</div>
          </div>

          <div class="rating-field">
            <span class="rating-label">Apex Accuracy</span>
            <div class="star-rating" data-rating-key="apexAccuracy">${this.renderStars(this.sessionData.ratings.apexAccuracy)}</div>
          </div>

          <div class="rating-field">
            <span class="rating-label">Throttle Control</span>
            <div class="star-rating" data-rating-key="throttleControl">${this.renderStars(this.sessionData.ratings.throttleControl)}</div>
          </div>

          <div class="rating-field">
            <span class="rating-label">Overall Control</span>
            <div class="star-rating" data-rating-key="overallControl">${this.renderStars(this.sessionData.ratings.overallControl)}</div>
          </div>

          <div class="rating-field">
            <span class="rating-label">Confidence Level</span>
            <div class="star-rating" data-rating-key="confidence">${this.renderStars(this.sessionData.ratings.confidence)}</div>
          </div>

          <div class="grid-2 mt-4">
            <div class="form-group">
              <label class="form-label">Best Lap Time (seconds or M:SS.ms)</label>
              <input type="text" class="form-control" id="txtLapTime" placeholder="e.g. 1:41.2 or 101.2" value="${this.sessionData.lapTime || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Spin / Off-Track Incidents</label>
              <input type="number" class="form-control" id="numSpinCount" min="0" max="20" value="${this.sessionData.spinCount || 0}">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Guided Reflection: What worked? What didn't? What will you try next time?</label>
            <textarea class="form-control" id="txtReflection" placeholder="I felt good at Turn 2, but turned in too early at Turn 6. Next time I'll brake 10 feet later...">${this.sessionData.reflection || ''}</textarea>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button class="btn btn-secondary" id="btnPrevStep">← Previous</button>
            <button class="btn btn-success btn-lg" id="btnFinishSession">Complete Session ✓</button>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    // Attach step-specific interactive bindings
    if (stepName === 'theory') {
      if (s.theory.diagramId === 'corner-path-comparison') {
        window.apexDiagrams.renderCornerComparison('sessionDiagramContainer');
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
      if (chk) {
        chk.addEventListener('change', (e) => this.sessionData.practiceCompleted = e.target.checked);
      }
    } else if (stepName === 'practical') {
      const chk = container.querySelector('#chkPracticalDone');
      if (chk) {
        chk.addEventListener('change', (e) => this.sessionData.practicalCompleted = e.target.checked);
      }
    } else if (stepName === 'challenge') {
      const txt = container.querySelector('#txtChallengeNotes');
      if (txt) {
        txt.addEventListener('input', (e) => this.sessionData.notes = e.target.value);
      }
      const chk = container.querySelector('#chkChallengeDone');
      if (chk) {
        chk.addEventListener('change', (e) => this.sessionData.challengeCompleted = e.target.checked);
      }
    } else if (stepName === 'assessment') {
      // Star rating click listeners
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

      const finishBtn = container.querySelector('#btnFinishSession');
      if (finishBtn) {
        finishBtn.addEventListener('click', () => this.finishSession());
      }
    }

    // Step navigation buttons
    const nextBtn = container.querySelector('#btnNextStep');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStepIndex < 4) {
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
  }

  renderStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="star ${i <= rating ? 'filled' : ''}" data-val="${i}">★</span>`;
    }
    return starsHtml;
  }

  // Parse lap time string e.g. "1:41.2" -> 101.2 seconds
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
    const reflectionInput = document.getElementById('txtReflection')?.value;

    this.sessionData.lapTime = this.parseLapTime(lapInput);
    this.sessionData.spinCount = parseInt(spinInput) || 0;
    this.sessionData.reflection = reflectionInput || '';
    this.sessionData.targetLapTime = this.sessionConfig.targetLapTime;

    // Save session in Store
    window.apexStore.completeSession(this.currentModuleId, this.currentSessionId, this.sessionData);

    // Trigger Achievement Modal if unlocked
    const newAchievements = window.apexStore.checkAchievements(`${this.currentModuleId}-${this.currentSessionId}`, this.sessionData);
    
    if (newAchievements.length > 0) {
      window.apexApp.showAchievementModal(newAchievements[0]);
    } else {
      alert('Session Completed! Your telemetry logs & progress have been saved.');
      window.apexApp.navigateTo('dashboard');
    }
  }
}

window.sessionController = new SessionController();
