/**
 * Apex Guide Controller
 * Manages view switching between Moza R3 Xbox Guide and Forza Motorsport 2023 Guide,
 * interactive FFB preset sliders, and live terminology filtering.
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
          <p class="page-subtitle">Complete beginner manual for Moza R3 Direct Drive on Xbox and Forza Motorsport 2023 racing mechanics.</p>
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
        <!-- Banner Card -->
        <div class="guide-hero-card mb-4">
          <div class="hero-badge"><i data-lucide="gamepad-2"></i> Xbox Series X|S & Xbox One</div>
          <h2>${data.title}</h2>
          <p>${data.subtitle}</p>
        </div>

        <!-- 1. Setup Steps Grid -->
        <div class="section-card mb-4">
          <h3 class="section-card-title">
            <i data-lucide="wrench"></i>
            1. Hardware Setup & Xbox Compatibility
          </h3>
          <div class="setup-steps-grid">
            ${data.setupSteps.map(s => `
              <div class="setup-step-item">
                <div class="step-number">${s.step}</div>
                <div class="step-info">
                  <h4>${s.title}</h4>
                  <p>${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Recommended FFB Sliders Breakdown -->
        <div class="section-card mb-4">
          <h3 class="section-card-title">
            <i data-lucide="sliders"></i>
            2. Best In-Game Forza Motorsport FFB Settings
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

        <!-- 3. Interactive FFB Preset Card -->
        <div class="section-card mb-4">
          <div class="preset-card-header mb-3">
            <div>
              <h3 class="section-card-title mb-1">
                <i data-lucide="zap"></i>
                3. Interactive Moza FFB Presets
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

        <!-- 4. Key Hardware Terminologies -->
        <div class="section-card">
          <h3 class="section-card-title mb-3">
            <i data-lucide="book-open"></i>
            4. Key Hardware & Force Feedback Terminologies
          </h3>
          <div class="terms-grid">
            ${data.glossary.map(t => `
              <div class="term-card">
                <h4 class="term-title">${t.term}</h4>
                <p class="term-def">${t.definition}</p>
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
        <!-- Banner Card -->
        <div class="guide-hero-card hero-forza mb-4">
          <div class="hero-badge"><i data-lucide="flag"></i> Motorsport 2023 Manual</div>
          <h2>${data.title}</h2>
          <p>${data.subtitle}</p>
        </div>

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

        <!-- 1. Track Anatomy & Regulations -->
        <div class="section-card mb-4" id="forzaTracksSection">
          <h3 class="section-card-title mb-3">
            <i data-lucide="map-pin"></i>
            1. Track Anatomy, Surfaces & Regulations
          </h3>
          <div class="tracks-grid">
            ${data.tracks.map(t => `
              <div class="track-info-card">
                <h4>${t.name}</h4>
                <p>${t.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Car Classes & Drivetrain Dynamics -->
        <div class="section-card mb-4" id="forzaCarsSection">
          <h3 class="section-card-title mb-3">
            <i data-lucide="car"></i>
            2. Car Classes & Drivetrain Dynamics
          </h3>
          
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

        <!-- 3. Searchable Sim Racing Glossary -->
        <div class="section-card">
          <h3 class="section-card-title mb-3">
            <i data-lucide="book-open"></i>
            3. Key Sim Racing & Telemetry Glossary
          </h3>
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
