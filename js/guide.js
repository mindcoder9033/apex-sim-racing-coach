/**
 * Apex Guide Controller
 * Manages view switching between Moza R3 Xbox Guide and Forza Motorsport 2023 Guide,
 * interactive FFB preset sliders, multi-section documentation panels, and live terminology filtering.
 */

class GuideController {
  constructor() {
    this.activeSubTab = 'mozaR3'; // 'mozaR3' | 'forza2023'
    this.activePreset = 'smooth';  // 'smooth' | 'raw'
    this.searchQuery = '';
    this.selectedCategory = 'all';
  }

  render() {
    const container = document.getElementById('guide');
    if (!container) return;

    const guidesData = window.APEX_CONTENT?.guides;
    if (!guidesData) return;

    container.innerHTML = `
      <header class="page-header mb-4">
        <div class="header-left">
          <h1 class="page-title">
            <span class="title-icon"><i data-lucide="compass"></i></span>
            Driver & Equipment Guides
          </h1>
          <p class="page-subtitle">Comprehensive beginner manuals for Moza R3 Direct Drive on Xbox and Forza Motorsport 2023 racing mechanics based on Skip Barber's <em>Going Faster!</em></p>
        </div>
      </header>

      <!-- Sub-Tab Segmented Controls -->
      <div class="guide-nav-bar mb-4">
        <div class="guide-segmented-control">
          <button class="guide-tab-btn ${this.activeSubTab === 'mozaR3' ? 'active' : ''}" data-subtab="mozaR3">
            <i data-lucide="disc"></i>
            <span>Moza R3 (Xbox) Guide</span>
          </button>
          <button class="guide-tab-btn ${this.activeSubTab === 'forza2023' ? 'active' : ''}" data-subtab="forza2023">
            <i data-lucide="trophy"></i>
            <span>Forza Motorsport 2023 Guide</span>
          </button>
        </div>
      </div>

      <!-- Main Sub-View Content Container -->
      <div class="guide-content-body">
        ${this.activeSubTab === 'mozaR3' ? this.renderMozaView(guidesData.mozaR3) : this.renderForzaView(guidesData.forza2023)}
      </div>
    `;

    this.bindEvents();
    if (window.renderLucideIcons) {
      window.renderLucideIcons();
    }
  }

  bindEvents() {
    // Sub-tab button events
    const tabBtns = document.querySelectorAll('.guide-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.getAttribute('data-subtab');
        if (targetTab && targetTab !== this.activeSubTab) {
          this.activeSubTab = targetTab;
          this.render();
        }
      });
    });

    // Moza Preset toggle buttons
    const presetBtns = document.querySelectorAll('.ffb-preset-toggle-btn');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const presetId = e.currentTarget.getAttribute('data-preset');
        if (presetId) {
          this.activePreset = presetId;
          this.updatePresetDisplay();
        }
      });
    });

    // Forza Glossary search input
    const searchInput = document.getElementById('guideSearchInput');
    if (searchInput) {
      searchInput.value = this.searchQuery;
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.filterForzaGlossary();
      });
    }

    // Category filter pills
    const categoryBtns = document.querySelectorAll('.glossary-category-pill');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.selectedCategory = e.currentTarget.getAttribute('data-category');
        this.filterForzaGlossary();
      });
    });
  }

  renderMozaView(data) {
    if (!data) return '';

    const activePresetObj = data.presets.find(p => p.id === this.activePreset) || data.presets[0];

    return `
      <div class="moza-guide-section fade-in">
        <!-- Hero Banner Card -->
        <div class="guide-hero-card mb-4">
          <div class="hero-badge"><i data-lucide="gamepad-2"></i> Direct Drive Wheelbase for Xbox & PC</div>
          <h2>${data.title}</h2>
          <p class="mt-1">${data.subtitle}</p>
          ${data.quote ? `<blockquote class="hero-quote mt-3"><em>${data.quote}</em></blockquote>` : ''}
        </div>

        <!-- Mode Switch Alert Banner -->
        <div class="shortcut-banner-card mb-4">
          <div class="shortcut-banner-content">
            <div class="shortcut-icon"><i data-lucide="cpu"></i></div>
            <div class="shortcut-text">
              <h4>Quick Mode Switching (Xbox ↔ PC Mode)</h4>
              <p>Press and hold <strong>${data.modeSwitching.shortcut}</strong> for 3 seconds. The RPM light pattern changes to indicate mode.</p>
              <div class="shortcut-indicators mt-2">
                ${data.xboxConnection.indicators.map(ind => `
                  <span class="indicator-badge ${ind.status}">${ind.label} (${ind.pattern})</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 1. What's in the Box & Hardware Specs -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="package"></i>
            1. Package Contents & Hardware Specifications
          </h3>
          <div class="box-contents-grid">
            ${data.boxContents.map(item => `
              <div class="box-item-card">
                <div class="box-item-name">${item.component}</div>
                <div class="box-item-desc">${item.description}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Physical Setup & Ergonomics -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="wrench"></i>
            2. Physical Setup, Mounting & Ergonomics
          </h3>
          <div class="grid-2-col mb-3">
            ${data.physicalSetup.mountingOptions.map(opt => `
              <div class="setup-option-card">
                <h4>${opt.title}</h4>
                <p class="mt-1 text-secondary">${opt.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="grid-3-col">
            ${data.physicalSetup.positioning.map(pos => `
              <div class="positioning-card">
                <h4 class="card-subhead">${pos.title}</h4>
                <p class="mt-1 text-secondary">${pos.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Xbox Connection Sequence -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="plug"></i>
            3. Xbox Connection Sequence
          </h3>
          <div class="setup-steps-grid">
            ${data.xboxConnection.steps.map(s => `
              <div class="setup-step-item">
                <div class="step-number">${s.step}</div>
                <div class="step-info">
                  <h4>${s.title}</h4>
                  <p>${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="app-note-box mt-3">
            <i data-lucide="smartphone"></i>
            <span><strong>MOZA Pit House Mobile App:</strong> ${data.modeSwitching.mobileApp}</span>
          </div>
        </div>

        <!-- 4. Steering Rotation Angles & In-Game Calibration -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="rotate-cw"></i>
            4. Steering Angles & Game Calibration
          </h3>
          <div class="ffb-sliders-table mb-3">
            <div class="ffb-table-header grid-3-spec">
              <span>Game Title</span>
              <span>Recommended Rotation Angle</span>
              <span>Notes / Matching</span>
            </div>
            ${data.steeringAngles.map(sa => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${sa.game}</div>
                <div class="ffb-param-val"><span class="badge-tag">${sa.recommended}</span></div>
                <div class="ffb-param-desc">${sa.notes}</div>
              </div>
            `).join('')}
          </div>
          <p class="text-secondary"><strong>Forza Motorsport 2023 Wheel Config:</strong> ${data.gameCompatibility.fm2023Settings}</p>
        </div>

        <!-- 5. Recommended FFB Sliders Breakdown -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-1">
            <i data-lucide="sliders"></i>
            5. Best In-Game Forza Motorsport FFB Settings
          </h3>
          <p class="text-secondary mb-3">Configured specifically for the Moza R3 3.9 Nm Direct Drive base to eliminate harsh clipping and maximize tire grip perception.</p>
          
          <div class="ffb-sliders-table">
            <div class="ffb-table-header">
              <span>Setting Parameter</span>
              <span>Recommended Value</span>
              <span>Physics Purpose</span>
            </div>
            ${data.ffbSliders.map(s => `
              <div class="ffb-table-row">
                <div class="ffb-param-name">${s.name}</div>
                <div class="ffb-param-val"><span class="badge-tag">${s.value}</span></div>
                <div class="ffb-param-desc">${s.description}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Interactive FFB Preset Card -->
        <div class="section-card mb-4">
          <div class="preset-card-header mb-3">
            <div>
              <h3 class="section-card-title mb-1">
                <i data-lucide="zap"></i>
                6. Interactive Moza FFB Presets
              </h3>
              <p class="text-secondary">Switch between beginner-friendly smooth forces and raw direct telemetry profiles.</p>
            </div>
            <div class="ffb-preset-switcher">
              ${data.presets.map(p => `
                <button class="ffb-preset-toggle-btn ${this.activePreset === p.id ? 'active' : ''}" data-preset="${p.id}">
                  ${p.name}
                </button>
              `).join('')}
            </div>
          </div>

          <div id="activePresetCard" class="ffb-preset-details">
            ${this.renderPresetSliders(activePresetObj)}
          </div>
        </div>

        <!-- 7. Force Feedback Sensations & Telemetry Feel -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="activity"></i>
            7. Reading Force Feedback & Steering Sensations
          </h3>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Wheel Sensation</span>
              <span>Physics Meaning</span>
              <span>Driver Action</span>
            </div>
            ${data.ffbSensations.map(sens => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${sens.sensation}</div>
                <div class="ffb-param-desc">${sens.meaning}</div>
                <div class="ffb-param-val"><span class="badge-tag badge-action">${sens.action}</span></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 8. Pedal Calibration & Performance Kit Upgrade -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="footprints"></i>
            8. Pedal Calibration & SR-P Lite Performance Kit
          </h3>
          <p class="text-secondary mb-3">${data.pedalCalibration.overview}</p>
          <div class="grid-2-col mb-3">
            ${data.pedalCalibration.methods.map(m => `
              <div class="setup-option-card">
                <h4>${m.name}</h4>
                <p class="mt-1 text-secondary">${m.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="preset-summary-box">
            <span class="preset-badge">Recommended Hardware Upgrade</span>
            <p class="preset-desc mt-1"><strong>SR-P Lite Performance Kit:</strong> ${data.pedalCalibration.upgradeKit}</p>
          </div>
        </div>

        <!-- 9. Game Compatibility -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="gamepad"></i>
            9. Game Compatibility Matrix
          </h3>
          <div class="grid-2-col">
            <div class="compat-box">
              <h4>Xbox Licensed Titles</h4>
              <ul class="compat-list mt-2">
                ${data.gameCompatibility.xbox.map(g => `<li>${g}</li>`).join('')}
              </ul>
            </div>
            <div class="compat-box">
              <h4>PC Compatible Sim Titles</h4>
              <ul class="compat-list mt-2">
                ${data.gameCompatibility.pc.map(g => `<li>${g}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- 10. The Apex Approach & 6-Stage Learning Progression -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="trending-up"></i>
            10. The Apex Approach & Learning Progression
          </h3>
          <div class="learning-stages-grid">
            ${data.learningProgression.map(lp => `
              <div class="stage-card">
                <div class="stage-num">Stage ${lp.stage}</div>
                <h4 class="stage-title">${lp.title}</h4>
                <p class="stage-focus mt-1"><strong>Focus:</strong> ${lp.focus}</p>
                <div class="stage-goal mt-2"><span class="badge-tag">Goal: ${lp.goal}</span></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 11. Hardware Troubleshooting & Driving Mistakes -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="alert-triangle"></i>
            11. Hardware Troubleshooting
          </h3>
          <div class="troubleshoot-list">
            ${data.troubleshooting.map(tb => `
              <div class="troubleshoot-item">
                <div class="tb-issue"><i data-lucide="help-circle"></i> <strong>${tb.issue}</strong></div>
                <div class="tb-fix"><i data-lucide="check-circle-2"></i> ${tb.fix}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 12. Maintenance, Warranty & Upgrades -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="shield-check"></i>
            12. Maintenance, Warranty Coverage & Modular Upgrades
          </h3>
          <div class="grid-2-col">
            <div>
              <h4 class="sub-heading mb-2">Warranty Coverage</h4>
              <div class="ffb-sliders-table">
                ${data.maintenanceWarranty.warranty.map(w => `
                  <div class="ffb-table-row compact-row">
                    <span class="ffb-param-name">${w.component}</span>
                    <span class="badge-tag">${w.period}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div>
              <h4 class="sub-heading mb-2">Modular Upgrade Ecosystem</h4>
              <div class="ffb-sliders-table">
                ${data.maintenanceWarranty.upgrades.map(u => `
                  <div class="ffb-table-row compact-row">
                    <div>
                      <strong style="color:var(--color-text);">${u.upgrade}</strong>
                      <div style="font-size:0.8rem; color:var(--color-text-muted);">${u.desc}</div>
                    </div>
                    <span class="badge-tag">${u.price}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 13. Key Hardware Terminologies -->
        <div class="section-card">
          <h3 class="section-card-title mb-3">
            <i data-lucide="book-open"></i>
            13. Key Hardware & Force Feedback Terminologies
          </h3>
          <div class="terms-grid">
            ${data.glossary.map(t => `
              <div class="term-card">
                <h4 class="term-title">${t.term}</h4>
                <p class="term-def mt-1">${t.definition}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderPresetSliders(preset) {
    return `
      <div class="preset-summary-box mb-3">
        <span class="preset-badge">${preset.badge}</span>
        <p class="preset-desc mt-2">${preset.desc}</p>
      </div>
      <div class="preset-sliders-grid">
        ${preset.sliders.map(s => `
          <div class="preset-slider-item">
            <div class="slider-label-row">
              <span class="slider-name">${s.label}</span>
              <span class="slider-val-badge">${s.val}</span>
            </div>
            <div class="slider-track-bg">
              <div class="slider-fill-bar" style="width: ${this.parsePercentage(s.val)}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  parsePercentage(valStr) {
    const matched = valStr.match(/(\d+)/);
    return matched ? Math.min(100, parseInt(matched[1], 10)) : 50;
  }

  updatePresetDisplay() {
    const guidesData = window.APEX_CONTENT?.guides?.mozaR3;
    if (!guidesData) return;

    // Update buttons state
    document.querySelectorAll('.ffb-preset-toggle-btn').forEach(btn => {
      const pid = btn.getAttribute('data-preset');
      if (pid === this.activePreset) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update preset card content
    const cardEl = document.getElementById('activePresetCard');
    const presetObj = guidesData.presets.find(p => p.id === this.activePreset) || guidesData.presets[0];
    if (cardEl && presetObj) {
      cardEl.innerHTML = this.renderPresetSliders(presetObj);
    }
  }

  renderForzaView(data) {
    if (!data) return '';

    // Extract unique glossary categories for filtering
    const categories = ['all', ...new Set(data.glossary.map(g => g.category))];

    return `
      <div class="forza-guide-section fade-in">
        <!-- Hero Banner Card -->
        <div class="guide-hero-card hero-forza mb-4">
          <div class="hero-badge"><i data-lucide="flag"></i> Motorsport 2023 Manual</div>
          <h2>${data.title}</h2>
          <p class="mt-1">${data.subtitle}</p>
          ${data.quote ? `<blockquote class="hero-quote mt-3"><em>${data.quote}</em></blockquote>` : ''}
        </div>

        <!-- 1. Getting Started & Game Modes -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="play-circle"></i>
            1. Getting Started & Game Modes
          </h3>
          <div class="ffb-sliders-table mb-3">
            <div class="ffb-table-header grid-3-spec">
              <span>Game Mode</span>
              <span>Purpose</span>
              <span>Recommended Usage</span>
            </div>
            ${data.gameModes.map(gm => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${gm.mode}</div>
                <div class="ffb-param-desc">${gm.purpose}</div>
                <div class="ffb-param-val"><span class="badge-tag">${gm.recommended}</span></div>
              </div>
            `).join('')}
          </div>
          <div class="preset-summary-box">
            <span class="preset-badge">${data.practiceSessionInfo.title}</span>
            <ul class="compat-list mt-2">
              ${data.practiceSessionInfo.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- 2. Essential Difficulty & HUD Settings -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="sliders"></i>
            2. Essential Difficulty & Assist Settings
          </h3>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Setting</span>
              <span>Beginner Recommendation</span>
              <span>Why This Setting</span>
            </div>
            ${data.essentialSettings.map(es => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${es.setting}</div>
                <div class="ffb-param-val"><span class="badge-tag">${es.recommendation}</span></div>
                <div class="ffb-param-desc">${es.why}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Driving Assists & Assist Removal Progression -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="shield"></i>
            3. Driving Assists & Assist Removal Roadmap
          </h3>
          <h4 class="sub-heading mb-2">Recommended Beginner Assists</h4>
          <div class="ffb-sliders-table mb-4">
            <div class="ffb-table-header grid-3-spec">
              <span>Assist Parameter</span>
              <span>Beginner Setting</span>
              <span>When to Change / Remove</span>
            </div>
            ${data.drivingAssists.map(da => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${da.assist}</div>
                <div class="ffb-param-val"><span class="badge-tag">${da.beginner}</span></div>
                <div class="ffb-param-desc">${da.whenToChange}</div>
              </div>
            `).join('')}
          </div>

          <h4 class="sub-heading mb-2">Assist Removal Milestones</h4>
          <div class="troubleshoot-list">
            ${data.assistMilestones.map(am => `
              <div class="troubleshoot-item">
                <div class="tb-issue"><i data-lucide="check-square"></i> <strong>${am.milestone}</strong></div>
                <div class="tb-fix"><i data-lucide="arrow-right"></i> Change Assist: <strong>${am.remove}</strong></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Force Feedback & Deadzones Tuning -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="settings"></i>
            4. Force Feedback & Deadzone Tuning
          </h3>
          <div class="grid-2-col mb-3">
            ${data.ffbSettings.steeringMode.map(sm => `
              <div class="setup-option-card">
                <h4>Steering Mode: ${sm.mode}</h4>
                <p class="mt-1 text-secondary">${sm.desc}</p>
              </div>
            `).join('')}
          </div>

          <h4 class="sub-heading mb-2">FFB Tuning Sliders</h4>
          <div class="ffb-sliders-table mb-4">
            <div class="ffb-table-header grid-3-spec">
              <span>Setting</span>
              <span>Recommended Value</span>
              <span>Physics Purpose</span>
            </div>
            ${data.ffbSettings.sliderValues.map(sv => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${sv.setting}</div>
                <div class="ffb-param-val"><span class="badge-tag">${sv.recommended}</span></div>
                <div class="ffb-param-desc">${sv.why}</div>
              </div>
            `).join('')}
          </div>

          <h4 class="sub-heading mb-2">Pedal & Steering Deadzones</h4>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Input Deadzone</span>
              <span>Recommended Value</span>
              <span>Why</span>
            </div>
            ${data.ffbSettings.deadzones.map(dz => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${dz.input}</div>
                <div class="ffb-param-val"><span class="badge-tag">${dz.value}</span></div>
                <div class="ffb-param-desc">${dz.why}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5. Car Setup & Tuning Basics -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="wrench"></i>
            5. Car Setup & Tuning Basics
          </h3>
          <p class="text-secondary mb-3">Location: <strong>${data.carSetupBasics.path}</strong>. Focus on driving skill first—car setup comes second!</p>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Adjustment</span>
              <span>Effect on Handling</span>
              <span>Recommendation</span>
            </div>
            ${data.carSetupBasics.simpleAdjustments.map(sa => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${sa.adjustment}</div>
                <div class="ffb-param-desc">${sa.effect}</div>
                <div class="ffb-param-val"><span class="badge-tag">${sa.recommendation}</span></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Practice Routine & Rivals Mode -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="repeat"></i>
            6. Practice Routine & Rivals Mode
          </h3>
          <div class="grid-2-col mb-3">
            <div class="compat-box">
              <h4>Skip Barber 3-Step Progression</h4>
              <ol class="compat-list mt-2">
                ${data.practiceRoutine.steps.map(st => `<li>${st}</li>`).join('')}
              </ol>
            </div>
            <div class="compat-box">
              <h4>Rivals Mode & Track Segments</h4>
              <p class="mt-2 text-secondary">${data.practiceRoutine.rivalsMode}</p>
              <p class="mt-2 text-secondary"><strong>Segment System:</strong> ${data.practiceRoutine.segmentSystem}</p>
            </div>
          </div>

          <h4 class="sub-heading mb-2">Session Structure</h4>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Session Phase</span>
              <span>Duration</span>
              <span>Focus Area</span>
            </div>
            ${data.practiceRoutine.sessionStructure.map(ss => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${ss.phase}</div>
                <div class="ffb-param-val"><span class="badge-tag">${ss.duration}</span></div>
                <div class="ffb-param-desc">${ss.focus}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 7. The Apex Approach & Reference Point Method -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="target"></i>
            7. The Apex Approach & Reference Point Method
          </h3>
          <div class="grid-2-col mb-3">
            <div class="compat-box">
              <h4>Three Fundamentals</h4>
              <div class="mt-2">
                ${data.apexApproach.fundamentals.map(af => `
                  <div class="mb-2">
                    <strong style="color:var(--color-text);">${af.skill}:</strong>
                    <span class="text-secondary"> ${af.practice}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="compat-box">
              <h4>Corner Reference Points</h4>
              <ol class="compat-list mt-2">
                ${data.apexApproach.cornerPoints.map(cp => `<li>${cp}</li>`).join('')}
              </ol>
            </div>
          </div>
          <div class="preset-summary-box">
            <span class="preset-badge">Track Reference Markers</span>
            <div class="category-pills-bar mt-2">
              ${data.apexApproach.referencePoints.map(rp => `<span class="badge-tag">${rp}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- 8. Common Beginner Mistakes & Solutions -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="alert-octagon"></i>
            8. Common Beginner Mistakes & Solutions
          </h3>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Mistake</span>
              <span>Why It Happens</span>
              <span>How to Fix</span>
            </div>
            ${data.beginnerMistakes.map(bm => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${bm.mistake}</div>
                <div class="ffb-param-desc">${bm.cause}</div>
                <div class="ffb-param-val"><span class="badge-tag badge-action">${bm.solution}</span></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 9. Vehicle Handling Troubleshooting -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="corner-up-right"></i>
            9. Vehicle Handling Troubleshooting (Understeer vs Oversteer)
          </h3>
          <h4 class="sub-heading mb-2">Understeer ("Car Won't Turn")</h4>
          <div class="ffb-sliders-table mb-4">
            <div class="ffb-table-header grid-3-spec">
              <span>Symptom</span>
              <span>Likely Cause</span>
              <span>Solution</span>
            </div>
            ${data.troubleshooting.understeer.map(u => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${u.symptom}</div>
                <div class="ffb-param-desc">${u.likelyCause}</div>
                <div class="ffb-param-val"><span class="badge-tag">${u.solution}</span></div>
              </div>
            `).join('')}
          </div>

          <h4 class="sub-heading mb-2">Oversteer ("Car Spins")</h4>
          <div class="ffb-sliders-table">
            <div class="ffb-table-header grid-3-spec">
              <span>Symptom</span>
              <span>Likely Cause</span>
              <span>Solution</span>
            </div>
            ${data.troubleshooting.oversteer.map(o => `
              <div class="ffb-table-row grid-3-spec">
                <div class="ffb-param-name">${o.symptom}</div>
                <div class="ffb-param-desc">${o.likelyCause}</div>
                <div class="ffb-param-val"><span class="badge-tag badge-action">${o.solution}</span></div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 10. 4-Week Skill Progression Plan -->
        <div class="section-card mb-4">
          <h3 class="section-card-title mb-3">
            <i data-lucide="calendar"></i>
            10. Recommended 4-Week Skill Progression Plan
          </h3>
          <div class="grid-2-col">
            ${data.progressionPlan.map(pw => `
              <div class="setup-option-card">
                <h4>${pw.week}</h4>
                <ul class="compat-list mt-2">
                  ${pw.sessions.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 11. Track Anatomy, Regulations & Car Drivetrains -->
        <div class="section-card mb-4" id="forzaTracksSection">
          <h3 class="section-card-title mb-3">
            <i data-lucide="map-pin"></i>
            11. Track Anatomy, Surfaces & Regulations
          </h3>
          <div class="tracks-grid mb-4">
            ${data.tracks.map(t => `
              <div class="track-info-card">
                <h4>${t.name}</h4>
                <p>${t.desc}</p>
              </div>
            `).join('')}
          </div>

          <h4 class="sub-heading mb-2">Performance Index (PI) System</h4>
          <div class="car-classes-grid mb-4">
            ${data.carClasses.map(c => `
              <div class="car-class-card">
                <div class="class-title-row">
                  <span class="class-badge">${c.class}</span>
                  <span class="class-type-tag">${c.type}</span>
                </div>
                <p class="mt-2 text-secondary">${c.desc}</p>
              </div>
            `).join('')}
          </div>

          <h4 class="sub-heading mb-2">Drivetrain Layout Behavior</h4>
          <div class="drivetrains-grid">
            ${data.drivetrains.map(d => `
              <div class="drivetrain-card">
                <div class="drivetrain-header">
                  <span class="dt-badge">${d.type}</span>
                  <span class="dt-char">${d.characteristics}</span>
                </div>
                <p class="dt-handling mt-2">${d.handling}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 12. Searchable Sim Racing Glossary -->
        <div class="section-card">
          <h3 class="section-card-title mb-3">
            <i data-lucide="book-open"></i>
            12. Key Sim Racing & Telemetry Glossary
          </h3>
          <!-- Search & Filter Controls -->
          <div class="search-filter-section mb-4">
            <div class="guide-search-wrapper mb-3">
              <i data-lucide="search" class="search-icon"></i>
              <input 
                type="text" 
                id="guideSearchInput" 
                class="guide-search-input" 
                placeholder="Search tracks, car terms, trail braking, apexes, slip angle..."
                aria-label="Search guide terminology"
              />
            </div>
            <div class="category-pills-bar">
              ${categories.map(c => `
                <button 
                  class="glossary-category-pill ${this.selectedCategory === c ? 'active' : ''}" 
                  data-category="${c}"
                >
                  ${c === 'all' ? 'All Topics' : c}
                </button>
              `).join('')}
            </div>
          </div>

          <div id="forzaGlossaryContainer" class="terms-grid">
            ${this.renderGlossaryCards(data.glossary)}
          </div>
        </div>
      </div>
    `;
  }

  renderGlossaryCards(glossary) {
    const filtered = glossary.filter(item => {
      const matchesCat = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      const matchesQuery = !this.searchQuery || 
        item.term.toLowerCase().includes(this.searchQuery) || 
        item.definition.toLowerCase().includes(this.searchQuery) ||
        item.category.toLowerCase().includes(this.searchQuery);
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      return `
        <div class="empty-glossary-state">
          <i data-lucide="search-x"></i>
          <p>No matching terminologies found for "${this.searchQuery}". Try searching for terms like "Apex", "Trail Braking", or "Understeer".</p>
        </div>
      `;
    }

    return filtered.map(t => `
      <div class="term-card">
        <div class="term-cat-tag">${t.category}</div>
        <h4 class="term-title mt-1">${t.term}</h4>
        <p class="term-def mt-2">${t.definition}</p>
      </div>
    `).join('');
  }

  filterForzaGlossary() {
    const data = window.APEX_CONTENT?.guides?.forza2023;
    if (!data) return;

    const container = document.getElementById('forzaGlossaryContainer');
    if (container) {
      container.innerHTML = this.renderGlossaryCards(data.glossary);
      if (window.renderLucideIcons) {
        window.renderLucideIcons();
      }
    }
  }
}

// Initialize controller instance globally
window.guideController = new GuideController();
