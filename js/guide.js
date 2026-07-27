/**
 * Apex Guide Controller
 * Manages view switching between Moza R3 Xbox Guide and Forza Motorsport 2023 Guide,
 * category cards/filtering, interactive FFB preset sliders, multi-section documentation panels,
 * and live terminology filtering.
 */

class GuideController {
  constructor() {
    this.activeSubTab = window.apexStore?.settings?.activeGuideSubTab || 'mozaR3'; // 'mozaR3' | 'forza2023' | 'telemetry'
    this.activePreset = 'smooth';  // 'smooth' | 'raw'
    this.searchQuery = '';
    this.selectedCategory = 'all'; // Forza glossary category filter
    this.selectedMozaCategory = 'all'; // Moza category filter: 'all' | 'hardware' | 'ffb' | 'upgrades' | 'progression'
    this.selectedForzaCategory = 'all'; // Forza category filter: 'all' | 'getting-started' | 'tuning' | 'technique' | 'mastery'
    this.selectedTelemetryCategory = window.apexStore?.settings?.selectedTelemetryCategory || 'all'; // Telemetry category filter

    this.mozaCategories = [
      { id: 'all', label: 'All Categories', icon: 'grid', count: 13, desc: 'Complete manual & setup reference' },
      { id: 'hardware', label: 'Hardware & Setup', icon: 'package', count: 3, desc: 'Box contents, mounting ergonomics & Xbox connection sequence' },
      { id: 'ffb', label: 'FFB & Calibration', icon: 'sliders', count: 4, desc: 'Steering angles, FM2023 FFB sliders & telemetry sensations' },
      { id: 'upgrades', label: 'Upgrades & Compatibility', icon: 'wrench', count: 2, desc: 'Pedal calibration, SR-P Lite kit & game matrix' },
      { id: 'progression', label: 'Progression & Maintenance', icon: 'trending-up', count: 4, desc: '6-stage learning, troubleshooting & warranty' }
    ];

    this.forzaCategories = [
      { id: 'all', label: 'All Categories', icon: 'grid', count: 12, desc: 'Full racing manual & physics guide' },
      { id: 'getting-started', label: 'Getting Started & Assists', icon: 'play-circle', count: 3, desc: 'Game modes, initial settings & assist roadmap' },
      { id: 'tuning', label: 'FFB & Car Tuning', icon: 'settings', count: 2, desc: 'In-game deadzones & simple car setup adjustments' },
      { id: 'technique', label: 'Practice & Driving Technique', icon: 'target', count: 3, desc: 'Rivals mode, Skip Barber apex method & beginner fixes' },
      { id: 'mastery', label: 'Handling & Track Knowledge', icon: 'map-pin', count: 4, desc: 'Understeer/oversteer fixes, 4-week plan, tracks & glossary' }
    ];

    this.telemetryCategories = [
      { id: 'all', label: 'All Modules', icon: 'grid', count: 5, desc: 'Complete Telemetry Basics manual' },
      { id: 'setup', label: 'Telemetry Setup & UDP', icon: 'wifi', count: 4, desc: 'Forza 2023 Data Out, IP, Port, tool choices & Docker commands' },
      { id: 'channels', label: 'Core Channels & Traces', icon: 'activity', count: 5, desc: 'Throttle, Brake, Steering, Speed & Lateral G trace analysis' },
      { id: 'patterns', label: '6 Key Driving Patterns', icon: 'alert-triangle', count: 6, desc: 'Early/Late apex, abrupt pedals, trail-braking fixes' },
      { id: 'practices', label: 'Data Comparison & Drills', icon: 'sliders', count: 3, desc: 'Three-lap comparison, Rivals overlay & 1-corner focus' },
      { id: 'moza-ffb', label: 'Moza R3 FFB Connection', icon: 'disc', count: 2, desc: 'Syncing wheel feedback & 10-LED RPM telemetry' }
    ];
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
          <p class="page-subtitle">Comprehensive beginner manuals for Moza R3 Direct Drive on Xbox, Forza Motorsport 2023 racing mechanics, and Telemetry Data Analysis based on Skip Barber's <em>Going Faster!</em></p>
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
          <button class="guide-tab-btn ${this.activeSubTab === 'telemetry' ? 'active' : ''}" data-subtab="telemetry">
            <i data-lucide="line-chart"></i>
            <span>Telemetry Data Guide</span>
          </button>
        </div>
      </div>

      <!-- Main Sub-View Content Container -->
      <div class="guide-content-body">
        ${this.activeSubTab === 'mozaR3' ? this.renderMozaView(guidesData.mozaR3) : 
          (this.activeSubTab === 'forza2023' ? this.renderForzaView(guidesData.forza2023) : 
          this.renderTelemetryView(guidesData.telemetry))}
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
          if (window.apexStore) {
            window.apexStore.saveSettings({ activeGuideSubTab: targetTab });
          }
          this.render();
        }
      });
    });

    // Moza Category pills & cards
    const mozaCatElements = document.querySelectorAll('.moza-cat-pill, .moza-cat-card');
    mozaCatElements.forEach(el => {
      el.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-cat');
        if (cat && cat !== this.selectedMozaCategory) {
          this.selectedMozaCategory = cat;
          this.render();
        }
      });
    });

    // Forza Category pills & cards
    const forzaCatElements = document.querySelectorAll('.forza-cat-pill, .forza-cat-card');
    forzaCatElements.forEach(el => {
      el.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-cat');
        if (cat && cat !== this.selectedForzaCategory) {
          this.selectedForzaCategory = cat;
          this.render();
        }
      });
    });

    // Telemetry Category pills & cards
    const telemetryCatElements = document.querySelectorAll('.telemetry-cat-pill, .telemetry-cat-card');
    telemetryCatElements.forEach(el => {
      el.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-cat');
        if (cat && cat !== this.selectedTelemetryCategory) {
          this.selectedTelemetryCategory = cat;
          if (window.apexStore) {
            window.apexStore.saveSettings({ selectedTelemetryCategory: cat });
          }
          this.render();
        }
      });
    });

    // Copy command buttons
    const copyBtns = document.querySelectorAll('.btn-copy-cmd');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const textToCopy = e.currentTarget.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalHTML = e.currentTarget.innerHTML;
            e.currentTarget.innerHTML = '<i data-lucide="check" class="icon-sm"></i> Copied!';
            if (window.renderLucideIcons) window.renderLucideIcons();
            setTimeout(() => {
              e.currentTarget.innerHTML = originalHTML;
              if (window.renderLucideIcons) window.renderLucideIcons();
            }, 2000);
          });
        }
      });
    });

    // Cross-link buttons to telemetry tab
    const gotoTelemetryBtns = document.querySelectorAll('[data-action="goto-telemetry-tab"]');
    gotoTelemetryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetCat = e.currentTarget.getAttribute('data-target-cat') || 'setup';
        this.activeSubTab = 'telemetry';
        this.selectedTelemetryCategory = targetCat;
        if (window.apexStore) {
          window.apexStore.saveSettings({ activeGuideSubTab: 'telemetry', selectedTelemetryCategory: targetCat });
        }
        this.render();
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

    // Category filter pills for Forza Glossary
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

  renderMozaCategoryFilterBar() {
    return `
      <div class="guide-category-filter-bar mb-4">
        ${this.mozaCategories.map(cat => `
          <button class="guide-cat-pill moza-cat-pill ${this.selectedMozaCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
            <i data-lucide="${cat.icon}"></i>
            <span>${cat.label}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  renderMozaCategoryOverviewCards() {
    const cards = this.mozaCategories.filter(c => c.id !== 'all');
    return `
      <div class="guide-category-overview-grid mb-4">
        ${cards.map(c => `
          <div class="guide-cat-card moza-cat-card" data-cat="${c.id}">
            <div>
              <div class="guide-cat-card-header">
                <div class="guide-cat-card-icon"><i data-lucide="${c.icon}"></i></div>
                <span class="guide-cat-card-count">${c.count} Sections</span>
              </div>
              <h4 class="guide-cat-card-title">${c.label}</h4>
              <p class="guide-cat-card-desc">${c.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderForzaCategoryFilterBar() {
    return `
      <div class="guide-category-filter-bar mb-4">
        ${this.forzaCategories.map(cat => `
          <button class="guide-cat-pill forza-cat-pill ${this.selectedForzaCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
            <i data-lucide="${cat.icon}"></i>
            <span>${cat.label}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  renderForzaCategoryOverviewCards() {
    const cards = this.forzaCategories.filter(c => c.id !== 'all');
    return `
      <div class="guide-category-overview-grid mb-4">
        ${cards.map(c => `
          <div class="guide-cat-card forza-cat-card" data-cat="${c.id}">
            <div>
              <div class="guide-cat-card-header">
                <div class="guide-cat-card-icon"><i data-lucide="${c.icon}"></i></div>
                <span class="guide-cat-card-count">${c.count} Sections</span>
              </div>
              <h4 class="guide-cat-card-title">${c.label}</h4>
              <p class="guide-cat-card-desc">${c.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderMozaView(data) {
    if (!data) return '';

    const activePresetObj = data.presets.find(p => p.id === this.activePreset) || data.presets[0];
    const cat = this.selectedMozaCategory;

    const showHardware = cat === 'all' || cat === 'hardware';
    const showFFB = cat === 'all' || cat === 'ffb';
    const showUpgrades = cat === 'all' || cat === 'upgrades';
    const showProgression = cat === 'all' || cat === 'progression';

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

        <!-- Category Navigation Bar -->
        ${this.renderMozaCategoryFilterBar()}

        <!-- Category Overview Grid (Visible when 'all' is selected) -->
        ${cat === 'all' ? this.renderMozaCategoryOverviewCards() : ''}

        <!-- CATEGORY 1: HARDWARE & SETUP -->
        ${showHardware ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="package"></i>
              <h3>Hardware & Package Setup</h3>
            </div>
          ` : ''}

          <!-- 1. What's in the Box & Hardware Specs -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="package"></i> Hardware & Setup</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="package"></i> Hardware & Setup</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="package"></i> Hardware & Setup</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}

        <!-- CATEGORY 2: FFB & CALIBRATION -->
        ${showFFB ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="sliders"></i>
              <h3>Steering & Force Feedback Calibration</h3>
            </div>
          ` : ''}

          <!-- 4. Steering Rotation Angles & In-Game Calibration -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="sliders"></i> FFB & Calibration</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="sliders"></i> FFB & Calibration</div>
            <h3 class="section-card-title mb-1">
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
            <div class="guide-category-badge"><i data-lucide="sliders"></i> FFB & Calibration</div>
            <div class="preset-card-header mb-3">
              <div>
                <h3 class="section-card-title mb-1">
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
            <div class="guide-category-badge"><i data-lucide="sliders"></i> FFB & Calibration</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}

        <!-- CATEGORY 3: UPGRADES & COMPATIBILITY -->
        ${showUpgrades ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="wrench"></i>
              <h3>Hardware Upgrades & Game Compatibility</h3>
            </div>
          ` : ''}

          <!-- 8. Pedal Calibration & Performance Kit Upgrade -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="wrench"></i> Upgrades & Compatibility</div>
            <h3 class="section-card-title mb-3">
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

          <!-- 9. Game Compatibility Matrix -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="wrench"></i> Upgrades & Compatibility</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}

        <!-- CATEGORY 4: PROGRESSION & MAINTENANCE -->
        ${showProgression ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="trending-up"></i>
              <h3>Driver Progression, Troubleshooting & Maintenance</h3>
            </div>
          ` : ''}

          <!-- 10. The Apex Approach & 6-Stage Learning Progression -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="trending-up"></i> Progression & Maintenance</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="trending-up"></i> Progression & Maintenance</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="trending-up"></i> Progression & Maintenance</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="trending-up"></i> Progression & Maintenance</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}
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
    const glossaryCategories = ['all', ...new Set(data.glossary.map(g => g.category))];
    const cat = this.selectedForzaCategory;

    const showGettingStarted = cat === 'all' || cat === 'getting-started';
    const showTuning = cat === 'all' || cat === 'tuning';
    const showTechnique = cat === 'all' || cat === 'technique';
    const showMastery = cat === 'all' || cat === 'mastery';

    return `
      <div class="forza-guide-section fade-in">
        <!-- Hero Banner Card -->
        <div class="guide-hero-card hero-forza mb-4">
          <div class="hero-badge"><i data-lucide="flag"></i> Motorsport 2023 Manual</div>
          <h2>${data.title}</h2>
          <p class="mt-1">${data.subtitle}</p>
          ${data.quote ? `<blockquote class="hero-quote mt-3"><em>${data.quote}</em></blockquote>` : ''}
        </div>

        <!-- Category Navigation Bar -->
        ${this.renderForzaCategoryFilterBar()}

        <!-- Category Overview Grid (Visible when 'all' is selected) -->
        ${cat === 'all' ? this.renderForzaCategoryOverviewCards() : ''}

        <!-- CATEGORY 1: GETTING STARTED & ASSISTS -->
        ${showGettingStarted ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="play-circle"></i>
              <h3>Getting Started & Driving Assists</h3>
            </div>
          ` : ''}

          <!-- 1. Getting Started & Game Modes -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="play-circle"></i> Getting Started & Assists</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="play-circle"></i> Getting Started & Assists</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="play-circle"></i> Getting Started & Assists</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}

        <!-- CATEGORY 2: FFB & CAR TUNING -->
        ${showTuning ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="settings"></i>
              <h3>FFB & Vehicle Tuning Setup</h3>
            </div>
          ` : ''}

          <!-- 4. Force Feedback & Deadzones Tuning -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="settings"></i> FFB & Car Tuning</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="settings"></i> FFB & Car Tuning</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}

        <!-- CATEGORY 3: PRACTICE & DRIVING TECHNIQUE -->
        ${showTechnique ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="target"></i>
              <h3>Practice Routine & Driving Technique</h3>
            </div>
          ` : ''}

          <!-- 6. Practice Routine & Rivals Mode -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="target"></i> Practice & Driving Technique</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="target"></i> Practice & Driving Technique</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="target"></i> Practice & Driving Technique</div>
            <h3 class="section-card-title mb-3">
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
        ` : ''}

        <!-- CATEGORY 4: HANDLING & TRACK KNOWLEDGE -->
        ${showMastery ? `
          ${cat === 'all' ? `
            <div class="guide-group-header">
              <i data-lucide="map-pin"></i>
              <h3>Handling Dynamics, Skill Plan & Track Reference</h3>
            </div>
          ` : ''}

          <!-- 9. Vehicle Handling Troubleshooting -->
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="map-pin"></i> Handling & Track Knowledge</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="map-pin"></i> Handling & Track Knowledge</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="map-pin"></i> Handling & Track Knowledge</div>
            <h3 class="section-card-title mb-3">
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
            <div class="guide-category-badge"><i data-lucide="map-pin"></i> Handling & Track Knowledge</div>
            <h3 class="section-card-title mb-3">
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
                ${glossaryCategories.map(c => `
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
        ` : ''}
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

  renderTelemetryCategoryFilterBar() {
    return `
      <div class="category-filter-bar mb-4">
        <div class="category-pills">
          ${this.telemetryCategories.map(c => `
            <button class="category-pill telemetry-cat-pill ${this.selectedTelemetryCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
              <i data-lucide="${c.icon}"></i>
              <span>${c.label}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderTelemetryCategoryOverviewCards() {
    return `
      <div class="guide-category-overview-grid mb-6">
        ${this.telemetryCategories.filter(c => c.id !== 'all').map(c => `
          <div class="guide-cat-card telemetry-cat-card" data-cat="${c.id}">
            <div>
              <div class="guide-cat-card-header">
                <div class="guide-cat-card-icon"><i data-lucide="${c.icon}"></i></div>
                <span class="guide-cat-card-count">${c.count} Topics</span>
              </div>
              <h4 class="guide-cat-card-title">${c.label}</h4>
              <p class="guide-cat-card-desc">${c.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderTelemetryView(data) {
    if (!data) return '';

    const cat = this.selectedTelemetryCategory;
    const showSetup = cat === 'all' || cat === 'setup';
    const showChannels = cat === 'all' || cat === 'channels';
    const showPatterns = cat === 'all' || cat === 'patterns';
    const showPractices = cat === 'all' || cat === 'practices';
    const showMozaFFB = cat === 'all' || cat === 'moza-ffb';

    return `
      <div class="telemetry-guide-section fade-in">
        <!-- Hero Banner Card -->
        <div class="guide-hero-card mb-4" style="background: linear-gradient(135deg, rgba(30,30,45,0.95) 0%, rgba(15,23,42,0.95) 100%); border-left: 4px solid #3b82f6;">
          <div class="hero-badge" style="background: rgba(59,130,246,0.15); color: #60a5fa;"><i data-lucide="line-chart"></i> Telemetry Basics & Data Analysis</div>
          <h2>${data.summary.title}</h2>
          <p class="mt-1">${data.summary.subtitle}</p>
          <div class="flex items-center gap-3 mt-3 flex-wrap text-tertiary" style="font-size: 0.85rem;">
            <span><i data-lucide="clock" class="icon-sm"></i> ${data.summary.duration}</span>
            <span>•</span>
            <span><i data-lucide="award" class="icon-sm"></i> ${data.summary.skillLevel}</span>
            <span>•</span>
            <span><i data-lucide="wrench" class="icon-sm"></i> ${data.summary.tools}</span>
          </div>
          ${data.summary.quote ? `<blockquote class="hero-quote mt-3"><em>"${data.summary.quote}"</em> — Going Faster!</blockquote>` : ''}
        </div>

        <!-- Category Filter Bar -->
        ${this.renderTelemetryCategoryFilterBar()}

        <!-- Category Overview Grid (Visible when 'all' is selected) -->
        ${cat === 'all' ? this.renderTelemetryCategoryOverviewCards() : ''}

        <!-- SECTION 1: TELEMETRY SETUP & UDP -->
        ${showSetup ? `
          <div class="section-card mb-4">
            <div class="guide-category-badge" style="background: rgba(59,130,246,0.15); color: #60a5fa;"><i data-lucide="wifi"></i> Telemetry Setup & UDP Data Out</div>
            <h3 class="section-card-title mb-3">${data.setup.title}</h3>
            
            <ol class="setup-steps-list mb-4" style="padding-left: 1.25rem; line-height: 1.6;">
              ${data.setup.steps.map(s => `<li class="mb-1">${s}</li>`).join('')}
            </ol>

            <h4 class="card-subhead mb-2"><i data-lucide="sliders" class="icon-sm"></i> Recommended UDP In-Game Settings</h4>
            <div class="settings-table-wrapper mb-4">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Setting</th>
                    <th>Value</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.setup.settings.map(st => `
                    <tr>
                      <td><strong>${st.setting}</strong></td>
                      <td><code class="code-badge" style="background:rgba(59,130,246,0.2); color:#93c5fd; padding:0.2rem 0.5rem; border-radius:4px;">${st.value}</code></td>
                      <td class="text-tertiary">${st.purpose}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="grid-2-col mb-4">
              <div class="setup-option-card">
                <h4><i data-lucide="monitor" class="icon-sm text-primary"></i> PC Telemetry Setup</h4>
                <p class="mt-1 text-secondary">${data.setup.platformNotes.pc}</p>
              </div>
              <div class="setup-option-card">
                <h4><i data-lucide="gamepad-2" class="icon-sm text-primary"></i> Xbox Telemetry Setup</h4>
                <p class="mt-1 text-secondary">${data.setup.platformNotes.xbox}</p>
              </div>
            </div>

            <h4 class="card-subhead mb-2"><i data-lucide="terminal" class="icon-sm"></i> Recommended Telemetry Listener Commands</h4>
            <div class="commands-grid mb-3">
              <div class="command-box mb-2 p-3" style="background: rgba(0,0,0,0.4); border: 1px solid var(--color-border); border-radius: 8px;">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-telemetry text-tertiary" style="font-size:0.8rem;">Quick Start (Web Dashboard)</span>
                  <button class="btn-copy-cmd btn-sm" data-copy="${data.setup.commands.quickStart}" style="padding:0.25rem 0.6rem; font-size:0.75rem;">
                    <i data-lucide="copy" class="icon-sm"></i> Copy
                  </button>
                </div>
                <code class="font-telemetry" style="color: #60a5fa;">${data.setup.commands.quickStart}</code>
              </div>

              <div class="command-box mb-2 p-3" style="background: rgba(0,0,0,0.4); border: 1px solid var(--color-border); border-radius: 8px;">
                <div class="flex justify-between items-center mb-1">
                  <span class="font-telemetry text-tertiary" style="font-size:0.8rem;">Docker Container</span>
                  <button class="btn-copy-cmd btn-sm" data-copy="${data.setup.commands.docker}" style="padding:0.25rem 0.6rem; font-size:0.75rem;">
                    <i data-lucide="copy" class="icon-sm"></i> Copy
                  </button>
                </div>
                <code class="font-telemetry" style="color: #60a5fa; word-break: break-all;">${data.setup.commands.docker}</code>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- SECTION 2: CORE CHANNELS & TRACES -->
        ${showChannels ? `
          <div class="section-card mb-4">
            <div class="guide-category-badge" style="background: rgba(59,130,246,0.15); color: #60a5fa;"><i data-lucide="activity"></i> Core Telemetry Channels</div>
            <h3 class="section-card-title mb-3">Understanding the Core Data Traces</h3>
            <p class="text-tertiary mb-4">Telemetry measures what you do with the controls and how the car responds. Master these 5 channels to spot mistakes instantenously.</p>
            
            <div class="channels-grid">
              ${data.channels.map(ch => this.renderTelemetryTraceCard(ch)).join('')}
            </div>
          </div>
        ` : ''}

        <!-- SECTION 3: 6 KEY DRIVING PATTERNS -->
        ${showPatterns ? `
          <div class="section-card mb-4">
            <div class="guide-category-badge" style="background: rgba(239,68,68,0.15); color: #f87171;"><i data-lucide="alert-triangle"></i> Driving Diagnosis</div>
            <h3 class="section-card-title mb-3">The Six Key Telemetry Driving Patterns</h3>
            <p class="text-tertiary mb-4">Every driving mistake leaves a distinct visual signature in your data. Learn to diagnose and fix them immediately.</p>

            <div class="patterns-grid">
              ${data.patterns.map(pt => this.renderTelemetryPatternCard(pt)).join('')}
            </div>
          </div>
        ` : ''}

        <!-- SECTION 4: DATA COMPARISON & PRACTICES -->
        ${showPractices ? `
          <div class="section-card mb-4">
            <div class="guide-category-badge" style="background: rgba(34,197,94,0.15); color: #4ade80;"><i data-lucide="sliders"></i> Actionable Practices</div>
            <h3 class="section-card-title mb-3">Data Comparison & Practice Frameworks</h3>

            <div class="practices-grid grid-3-col mb-4">
              ${data.practices.map(pr => `
                <div class="practice-card p-4" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px;">
                  <h4 class="font-menu text-primary mb-2" style="font-size:1.1rem;">${pr.title}</h4>
                  <p class="text-tertiary mb-3" style="font-size:0.85rem; line-height:1.4;">${pr.desc}</p>
                  ${pr.metrics ? `
                    <div class="metrics-list">
                      <span class="text-secondary font-telemetry" style="font-size:0.75rem; text-transform:uppercase;">Metrics to measure:</span>
                      <ul class="mt-1" style="padding-left:1.1rem; font-size:0.82rem;">
                        ${pr.metrics.map(m => `<li>${m}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${pr.keyQuestions ? `
                    <div class="questions-list">
                      <span class="text-secondary font-telemetry" style="font-size:0.75rem; text-transform:uppercase;">Key Questions:</span>
                      <ul class="mt-1" style="padding-left:1.1rem; font-size:0.82rem;">
                        ${pr.keyQuestions.map(q => `<li>${q}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${pr.cycle ? `
                    <div class="cycle-badge mt-3 p-2 text-center" style="background:rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.2); border-radius:6px; color:#4ade80; font-size:0.8rem;">
                      <strong>Loop:</strong> ${pr.cycle}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- SECTION 5: MOZA R3 FFB CONNECTION -->
        ${showMozaFFB ? `
          <div class="section-card mb-4">
            <div class="guide-category-badge" style="background: rgba(168,85,247,0.15); color: #c084fc;"><i data-lucide="disc"></i> Wheel Telemetry</div>
            <h3 class="section-card-title mb-3">${data.mozaFfb.title}</h3>
            <p class="text-tertiary mb-4">Your Moza R3 force feedback is a physical real-time telemetry stream. Connect what you feel in your hands to what appears on telemetry graphs.</p>

            <div class="grid-2-col mb-4">
              <div>
                <h4 class="card-subhead mb-2"><i data-lucide="hand" class="icon-sm"></i> FFB Sensation Matrix</h4>
                <div class="sensations-list">
                  ${data.mozaFfb.sensations.map(s => `
                    <div class="sensation-item p-3 mb-2" style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:6px;">
                      <div class="flex justify-between items-center">
                        <strong style="color:var(--color-primary);">${s.feel}</strong>
                        <span class="badge" style="font-size:0.75rem;">${s.meaning}</span>
                      </div>
                      <div class="text-tertiary mt-1" style="font-size:0.8rem;">
                        <strong>Telemetry check:</strong> ${s.telemetryCheck}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div>
                <h4 class="card-subhead mb-2"><i data-lucide="zap" class="icon-sm"></i> Moza R3 10-LED RPM Telemetry Bar</h4>
                <div class="rpm-leds-list">
                  ${data.mozaFfb.rpmLeds.map(led => `
                    <div class="rpm-led-item p-3 mb-2" style="background:var(--color-surface); border-left:4px solid ${led.color.toLowerCase() === 'green' ? '#22c55e' : (led.color.toLowerCase() === 'yellow' ? '#eab308' : '#ef4444')}; border-radius:6px;">
                      <div class="flex justify-between items-center">
                        <strong style="color:${led.color.toLowerCase() === 'green' ? '#22c55e' : (led.color.toLowerCase() === 'yellow' ? '#eab308' : '#ef4444')};">${led.color} LEDs</strong>
                        <span class="font-telemetry" style="font-size:0.8rem;">${led.meaning}</span>
                      </div>
                      <div class="text-tertiary mt-1" style="font-size:0.8rem;">
                        <strong>Driver Action:</strong> ${led.action}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- SECTION 6: TELEMETRY GLOSSARY -->
        ${cat === 'all' ? `
          <div class="section-card mb-4">
            <div class="guide-category-badge"><i data-lucide="book-open"></i> Reference</div>
            <h3 class="section-card-title mb-3">Telemetry Data Terms</h3>
            <div class="terms-grid">
              ${data.glossary.map(t => `
                <div class="term-card">
                  <h4 class="term-title">${t.term}</h4>
                  <p class="term-def mt-2">${t.definition}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderTelemetryTraceCard(ch) {
    return `
      <div class="trace-card mb-4 p-4" style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px;">
        <div class="flex justify-between items-center flex-wrap gap-2 mb-2">
          <h4 class="font-menu text-primary" style="font-size:1.2rem; margin:0;">${ch.name}</h4>
          <span class="badge font-telemetry" style="font-size:0.75rem;">Range: ${ch.range}</span>
        </div>
        <blockquote class="text-tertiary mb-3" style="font-size:0.85rem; font-style:italic; border-left:3px solid var(--color-primary); padding-left:0.75rem;">
          "${ch.quote}"
        </blockquote>

        <div class="grid-2-col mb-3">
          <div class="trace-good-box p-3" style="background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); border-radius:6px;">
            <div class="flex items-center gap-2 mb-1" style="color:#22c55e;">
              <i data-lucide="check-circle-2" class="icon-sm"></i>
              <strong>${ch.goodTitle}</strong>
            </div>
            <p class="text-tertiary" style="font-size:0.82rem;">${ch.goodDesc}</p>
          </div>

          <div class="trace-bad-box p-3" style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:6px;">
            <div class="flex items-center gap-2 mb-1" style="color:#ef4444;">
              <i data-lucide="x-circle" class="icon-sm"></i>
              <strong>${ch.badTitle}</strong>
            </div>
            <p class="text-tertiary" style="font-size:0.82rem;">${ch.badDesc}</p>
          </div>
        </div>

        <div class="checkpoints-box">
          <span class="text-secondary font-telemetry" style="font-size:0.75rem; text-transform:uppercase;">Data Checkpoints to verify:</span>
          <ul class="mt-1" style="padding-left:1.1rem; font-size:0.83rem;">
            ${ch.checkpoints.map(cp => `<li>${cp}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  renderTelemetryPatternCard(pt) {
    return `
      <div class="pattern-card mb-4 p-4" style="background:var(--color-surface); border:1px solid var(--color-border); border-left:4px solid #ef4444; border-radius:8px;">
        <h4 class="font-menu text-primary mb-1" style="font-size:1.2rem;">${pt.title}</h4>
        <p class="text-tertiary mb-3" style="font-size:0.85rem; font-style:italic;">"${pt.quote}"</p>

        <div class="grid-2-col mb-3">
          <div class="signature-box p-3" style="background:rgba(0,0,0,0.3); border:1px solid var(--color-border); border-radius:6px;">
            <span class="badge badge-locked mb-2" style="background:rgba(239,68,68,0.15); color:#f87171; font-size:0.75rem;"><i data-lucide="activity" class="icon-sm"></i> Telemetry Signature</span>
            <ul style="padding-left:1.1rem; font-size:0.82rem; margin:0;">
              ${Object.entries(pt.signature).map(([k, v]) => `<li><strong style="text-transform:capitalize;">${k}:</strong> ${v}</li>`).join('')}
            </ul>
          </div>

          <div class="fix-box p-3" style="background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); border-radius:6px;">
            <span class="badge badge-success mb-2" style="background:rgba(34,197,94,0.15); color:#4ade80; font-size:0.75rem;"><i data-lucide="check" class="icon-sm"></i> The Fix & Action</span>
            <p class="text-primary mb-2" style="font-size:0.88rem; font-weight:600;">${pt.fix}</p>
            <p class="text-tertiary" style="font-size:0.82rem;"><strong>Practice Drill:</strong> ${pt.drill}</p>
          </div>
        </div>
      </div>
    `;
  }
}

// Initialize controller instance globally
window.guideController = new GuideController();
