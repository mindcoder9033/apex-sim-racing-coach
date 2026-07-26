/**
 * Dashboard View Controller — F1 Telemetry Driver Command Center
 * Renders interactive driver call-sign header, next recommended session CTA,
 * 3-pillar telemetry scorecards, Module 0 & core curriculum progression, and recent stint timeline.
 */
class DashboardController {
  render() {
    const container = document.getElementById('dashboard');
    if (!container) return;

    const store = window.apexStore;
    const data = store.data;
    const settings = store.settings;

    const driverName = settings.driverName || 'DRIVER APEX-01';
    const nextSession = store.getNextRecommendedSession();
    // Recent Completed Sessions (up to 4)
    const recentKeys = [...data.completedSessions].reverse().slice(0, 4);

    container.innerHTML = `
      <div class="page-container">

        <!-- Hero Section: Minimal & Spacious Command Center -->
        <div class="driver-command-hero mb-6">
          <div class="hero-header-top flex justify-between items-center flex-wrap gap-3 mb-4">
            <!-- Driver Meta Tags -->
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="driver-callsign-tag flex items-center gap-1.5 font-telemetry">
                <i data-lucide="gauge" class="icon-sm text-accent"></i> ${this.escapeHtml(driverName)}
              </span>
              <button class="btn-edit-callsign flex items-center gap-1" id="btnEditDriverCallsign" title="Edit Call-Sign">
                <i data-lucide="edit-3" class="icon-sm"></i> Edit Call-Sign
              </button>
            </div>
            <span class="telemetry-rank-badge">RACECRAFT ACADEMY • MOZA R3</span>
          </div>

          <!-- Primary Target & Next Action Banner -->
          <div class="hero-target-banner mb-5">
            <div class="text-tertiary font-menu hero-target-label">
              Targeting Practice Session
            </div>
            <h2 class="font-heading hero-target-title">
              Module ${nextSession.moduleId}: Session ${nextSession.sessionId} — ${this.escapeHtml(nextSession.title)}
            </h2>
            ${nextSession.focus ? `<p class="hero-target-focus text-tertiary mt-1 mb-0">${this.escapeHtml(nextSession.focus)}</p>` : ''}
          </div>

          <!-- Hero Footer: Stats Strip & Action Buttons -->
          <div class="hero-footer-bar flex justify-between items-center flex-wrap gap-4 pt-3">
            <!-- Driver Stats Strip -->
            <div class="flex items-center gap-6 flex-wrap">
              <div class="flex items-center gap-2 text-tertiary">
                <i data-lucide="zap" class="icon-sm text-warning"></i>
                <span class="font-menu text-xs uppercase" style="letter-spacing:0.06em;">Streak:</span>
                <span class="font-telemetry text-warning" style="font-weight:700;">${data.currentStreak || 0} WEEKS</span>
              </div>
              <div class="flex items-center gap-2 text-tertiary">
                <i data-lucide="check-circle-2" class="icon-sm text-success"></i>
                <span class="font-menu text-xs uppercase" style="letter-spacing:0.06em;">Sessions:</span>
                <span class="font-telemetry text-primary" style="font-weight:700;">${data.completedSessions.length} TOTAL</span>
              </div>
            </div>

            <!-- Primary Action CTAs -->
            <div class="flex items-center gap-3 flex-wrap">
              <button class="btn btn-primary btn-lg flex items-center gap-2" id="btnContinueActiveSession">
                <i data-lucide="play" class="icon-sm"></i> Continue Session ${nextSession.moduleId}.${nextSession.sessionId}
              </button>
              <button class="btn btn-outline flex items-center gap-2" id="btnDashEquipment">
                <i data-lucide="sliders" class="icon-sm me-1"></i> Equipment Setup
              </button>
            </div>
          </div>
        </div>

        <!-- Recent Practice Stints Timeline -->
        <div class="card flex flex-col justify-between p-6 mb-6">
          <div>
            <div class="card-header flex justify-between items-center mb-4">
              <h3 class="font-menu flex items-center gap-2.5" style="font-size:1.25rem;">
                <i data-lucide="clock" class="icon-md text-accent"></i> Recent Practice Stints
              </h3>
              <span class="badge font-telemetry" style="font-size:0.75rem;">${recentKeys.length} LOGGED</span>
            </div>

            ${recentKeys.length > 0 ? `
              <div class="stint-list flex flex-col gap-3">
                ${recentKeys.map(key => {
                  const sessionData = data.sessions[key] || {};
                  const formattedLap = sessionData.lapTime 
                    ? (sessionData.lapTime < 60 
                        ? `${sessionData.lapTime.toFixed(3)}s` 
                        : `${Math.floor(sessionData.lapTime / 60)}:${(sessionData.lapTime % 60).toFixed(3).padStart(6, '0')}`)
                    : 'N/A';
                  const confidenceStars = sessionData.ratings?.confidence ? '★'.repeat(sessionData.ratings.confidence) : '★★★';
                  
                  return `
                    <div class="stint-history-item" data-session-key="${key}">
                      <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-2">
                          <span class="stint-session-tag font-telemetry">Session ${key}</span>
                          <span class="text-tertiary" style="font-size:0.8rem; font-style:italic;">${this.escapeHtml(sessionData.notes || 'Stint completed')}</span>
                        </div>
                        <div class="flex items-center gap-4 text-tertiary" style="font-size:0.8rem;">
                          <span>Spins: <strong class="text-success font-telemetry">${sessionData.spinCount || 0}</strong></span>
                          <span>Confidence: <strong class="text-warning font-telemetry">${confidenceStars}</strong></span>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="stint-laptime">${formattedLap}</div>
                        <span class="text-tertiary uppercase font-menu" style="font-size:0.7rem; letter-spacing:0.06em;">Best Lap</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            ` : `
              <div class="text-center py-10 text-tertiary">
                <i data-lucide="flag" class="icon-xl text-muted mb-3" style="opacity:0.6;"></i>
                <p class="mb-1.5" style="font-weight:600; color:var(--color-text); font-size:0.95rem;">No telemetry stints logged yet</p>
                <p style="font-size:0.84rem; max-width:320px; margin:0 auto; line-height:1.4;">Complete your first practice stint to record your telemetry, lap times, and confidence ratings!</p>
              </div>
            `}
          </div>

          <div class="mt-5 pt-4 text-center" style="border-top:1px solid var(--color-border);">
            <span class="text-tertiary" style="font-size:0.8rem;">
              Looking for telemetry scores & detailed stats? Visit the <a href="#" id="linkToProgressTab" style="color:var(--color-f1-purple); text-decoration:underline; font-weight:600;">Progress Tab</a>.
            </span>
          </div>
        </div>

      </div>
    `;

    // Attach Event Listeners
    this.attachEvents(nextSession);
    window.renderLucideIcons();
  }

  attachEvents(nextSession) {
    const store = window.apexStore;

    // Edit Call-sign Modal / Prompt
    document.getElementById('btnEditDriverCallsign')?.addEventListener('click', () => {
      const currentName = store.settings.driverName || 'DRIVER APEX-01';
      window.apexApp.showModal('<i data-lucide="edit-3" class="icon-md text-accent me-2"></i> Edit Driver Call-Sign', `
        <div class="form-group mb-4">
          <label class="form-label">Enter Call-Sign / Driver Tag:</label>
          <input type="text" class="form-control" id="txtDriverCallsignInput" value="${this.escapeHtml(currentName)}" maxlength="24" placeholder="e.g. SPEED DEMON #44">
        </div>
        <div class="flex justify-between items-center mt-6">
          <button class="btn btn-outline" onclick="window.apexApp.closeModal();">Cancel</button>
          <button class="btn btn-primary" id="btnSaveCallsign">Save Call-Sign ✓</button>
        </div>
      `);

      setTimeout(() => {
        document.getElementById('txtDriverCallsignInput')?.focus();
      }, 100);

      document.getElementById('btnSaveCallsign')?.addEventListener('click', () => {
        const newName = document.getElementById('txtDriverCallsignInput')?.value;
        store.setDriverName(newName);
        window.apexApp.closeModal();
        this.render();
      });
    });

    // Continue Active Session Button
    document.getElementById('btnContinueActiveSession')?.addEventListener('click', () => {
      window.apexApp.startSession(nextSession.moduleId, nextSession.sessionId);
    });

    // Equipment Setup Modal
    document.getElementById('btnDashEquipment')?.addEventListener('click', () => {
      window.apexApp.showEquipmentModal();
    });

    // Link to Progress tab
    document.getElementById('linkToProgressTab')?.addEventListener('click', (e) => {
      e.preventDefault();
      window.apexApp.navigateTo('progress');
    });

    // Click on Stint History Items
    document.querySelectorAll('.stint-history-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const key = e.currentTarget.getAttribute('data-session-key');
        if (key) {
          const [mId, sId] = key.split('-').map(Number);
          window.apexApp.startSession(mId, sId);
        }
      });
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

window.dashboardController = new DashboardController();

