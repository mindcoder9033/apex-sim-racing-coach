/**
 * ModulesController - Manages the Modules & Sessions View
 * Implements a 2-level drill-down userflow:
 *   Level 1: All Modules Overview Cards
 *   Level 2: Module Detail View with Sequential Session Timeline
 */

class ModulesController {
  constructor() {
    this.activeModuleId = null; // null = Level 1 (Overview), Number = Level 2 (Module Detail)
  }

  render() {
    const container = document.getElementById('modules');
    if (!container) return;

    if (this.activeModuleId !== null && this.activeModuleId !== undefined) {
      this.renderModuleDetail(container, this.activeModuleId);
    } else {
      this.renderAllModulesOverview(container);
    }

    this.bindEvents();
  }

  /**
   * LEVEL 1: All Modules Overview Grid
   */
  renderAllModulesOverview(container) {
    const data = window.apexStore.data;
    const modules = APEX_CONTENT.modules;
    const completedSessionsCount = data.completedSessions.length;
    const totalSessionsCount = modules.reduce((acc, m) => acc + (m.sessions ? m.sessions.length : 12), 0);
    const overallProgress = totalSessionsCount > 0 ? Math.round((completedSessionsCount / totalSessionsCount) * 100) : 0;

    let html = `
      <div class="page-container fade-in">
        <!-- Header -->
        <div class="page-header">
          <div>
            <h1 class="font-menu">Curriculum Modules</h1>
            <p class="text-tertiary mt-1">Select a module to view its 12 telemetry-driven coaching sessions. Complete challenges to unlock next stages.</p>
          </div>
          <div class="page-header-actions">
            <span class="badge font-telemetry" style="font-size:0.9rem; padding:0.55rem 0.95rem;">
              Overall Progress: ${completedSessionsCount} / ${totalSessionsCount} (${overallProgress}%)
            </span>
          </div>
        </div>

        <!-- Modules Grid -->
        <div class="modules-overview-grid">
    `;

    modules.forEach(mod => {
      const isUnlocked = window.apexStore.isModuleUnlocked(mod.id);
      const modCompletedSessions = data.completedSessions.filter(k => k.startsWith(`${mod.id}-`)).length;
      const totalModSessions = (mod.sessions && mod.sessions.length > 0) ? mod.sessions.length : 12;
      const modProgressPct = Math.round((modCompletedSessions / totalModSessions) * 100);
      const isMastered = modCompletedSessions === totalModSessions && totalModSessions > 0;

      // Extract key focus tags from module description or session topics
      const focusTags = mod.sessions ? mod.sessions.slice(0, 3).map(s => s.car || s.track).filter(Boolean) : [];
      html += `
        <div class="module-overview-card ${isUnlocked ? (isMastered ? 'mastered-module-card' : '') : 'locked-module-card'}" data-action="open-module" data-module-id="${mod.id}">
          <div class="module-overview-header">
            <div class="flex items-center gap-2">
              <span class="badge font-menu" style="font-size:0.75rem;">Module ${mod.id}</span>
              ${!isUnlocked ? '<span class="badge badge-locked font-menu flex items-center gap-1" style="background:rgba(230,57,70,0.15); color:var(--color-accent-red); font-size:0.75rem;"><i data-lucide="lock" class="icon-sm"></i> Locked</span>' : ''}
              ${isMastered ? '<span class="badge badge-success font-menu flex items-center gap-1" style="background:rgba(34,197,94,0.15); color:#22c55e; font-size:0.75rem;"><i data-lucide="check-circle-2" class="icon-sm"></i> Mastered</span>' : ''}
            </div>
            <div class="module-status-icon ${isUnlocked ? (isMastered ? 'completed' : 'unlocked') : 'locked'}">
              ${isUnlocked ? (isMastered ? '<i data-lucide="check-circle-2" class="icon-md icon-success"></i>' : '<i data-lucide="book-open" class="icon-md text-accent"></i>') : '<i data-lucide="lock" class="icon-md text-muted"></i>'}
            </div>
          </div>

          <h2 class="font-menu" style="margin:0.25rem 0 0.25rem 0; font-size:1.3rem; line-height:1.3;">Module ${mod.id}: ${mod.title}</h2>
          <p class="text-tertiary mb-4" style="font-size:0.88rem; line-height:1.45; min-height:2.6rem;">${mod.subtitle}</p>

          <div class="module-stats-block mb-4 pt-3" style="border-top:1px solid var(--color-border);">
            <div class="flex justify-between items-center mb-1 text-tertiary" style="font-size:0.78rem;">
              <span>Progress (${modCompletedSessions}/${totalModSessions} Sessions)</span>
              <span class="font-telemetry">${modProgressPct}%</span>
            </div>
            <div class="progress-bar-container" style="height:7px; background:rgba(255,255,255,0.08);">
              <div class="progress-bar-fill" style="width:${modProgressPct}%;"></div>
            </div>
          </div>

          <div class="flex justify-between items-center mt-auto text-tertiary" style="font-size:0.82rem;">
            <span class="flex items-center gap-1"><i data-lucide="clock" class="icon-sm text-muted"></i> ${mod.duration}</span>
            <span class="accent-racing-red font-menu flex items-center gap-1" style="font-weight:700;">
              Explore Sessions <i data-lucide="arrow-right" class="icon-sm"></i>
            </span>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
    window.renderLucideIcons();
  }

  /**
   * LEVEL 2: Module Detail View with Sequential Session Timeline
   */
  renderModuleDetail(container, moduleId) {
    const data = window.apexStore.data;
    const mod = APEX_CONTENT.modules.find(m => m.id === moduleId);

    if (!mod) {
      this.activeModuleId = null;
      this.renderAllModulesOverview(container);
      return;
    }

    const isUnlocked = window.apexStore.isModuleUnlocked(mod.id);
    const modCompletedSessions = data.completedSessions.filter(k => k.startsWith(`${mod.id}-`)).length;
    const totalModSessions = (mod.sessions && mod.sessions.length > 0) ? mod.sessions.length : 12;
    const modProgressPct = Math.round((modCompletedSessions / totalModSessions) * 100);

    let html = `
      <div class="page-container fade-in">
        <!-- Level 2 Header & Back Nav -->
        <div class="module-detail-header-bar">
          <div class="flex items-center gap-3">
            <button class="btn-back-modules flex items-center gap-1" data-action="back-to-modules">
              <i data-lucide="arrow-left" class="icon-sm"></i> Back to All Modules
            </button>
            <span class="text-tertiary" style="font-size:0.9rem;">/</span>
            <span class="badge font-menu">Module ${mod.id}</span>
          </div>

          <div class="flex items-center gap-4">
            <div class="text-right hidden-mobile">
              <span class="text-tertiary" style="font-size:0.8rem;">Module Completion: </span>
              <strong class="font-telemetry" style="font-size:0.95rem; color:var(--color-primary);">${modCompletedSessions}/${totalModSessions} (${modProgressPct}%)</strong>
            </div>
          </div>
        </div>

        <!-- Module Banner -->
        <div class="card mb-6" style="background:linear-gradient(135deg, var(--color-surface) 0%, rgba(20,20,30,0.95) 100%); border-left:4px solid var(--color-primary);">
          <div class="flex justify-between items-start flex-wrap gap-4">
            <div>
              <span class="text-tertiary font-menu" style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.05em;">Curriculum Track</span>
              <h1 class="font-menu" style="margin:0.2rem 0 0.4rem 0; font-size:1.75rem;">Module ${mod.id}: ${mod.title}</h1>
              <p class="text-tertiary" style="font-size:0.95rem; max-width:760px; line-height:1.5;">${mod.description}</p>
            </div>
            <div class="badge font-menu p-3 flex items-center gap-2" style="background:rgba(255,255,255,0.05); font-size:0.85rem;">
              <i data-lucide="clock" class="icon-sm text-accent"></i> ${mod.duration} &bull; <i data-lucide="gauge" class="icon-sm text-accent"></i> ${totalModSessions} Coaching Sessions
            </div>
          </div>
        </div>

        <!-- Gated Module Banner -->
        ${!isUnlocked ? `
          <div class="locked-banner card p-5 mb-6 text-center" style="background:rgba(230,57,70,0.08); border:1px solid rgba(230,57,70,0.3);">
            <div class="mb-3 text-accent flex justify-center"><i data-lucide="lock" style="width:48px; height:48px;"></i></div>
            <h3 class="mt-2 font-menu accent-racing-red">Module ${mod.id} Challenge Prerequisites Required</h3>
            <p class="text-tertiary mt-2" style="font-size:0.95rem; max-width:650px; margin-left:auto; margin-right:auto;">
              ${window.apexStore.getUnlockRequirementText(mod.id, 1)} You may explore all session details below, but prerequisites must be cleared to launch telemetry.
            </p>
          </div>
        ` : ''}

        <!-- Empty Sessions Placeholder -->
        ${(!mod.sessions || mod.sessions.length === 0) ? `
          <div class="card p-6 text-center" style="background:var(--color-bg); border-style:dashed;">
            <div class="mb-3 text-muted flex justify-center"><i data-lucide="wrench" style="width:48px; height:48px;"></i></div>
            <h3 class="mt-2">Sessions Being Calibrated</h3>
            <p class="text-muted mt-1" style="font-size:0.95rem; max-width:550px; margin:0.5rem auto 0 auto;">
              The 12 telemetry-driven coaching sessions for <strong>Module ${mod.id}: ${mod.title}</strong> are undergoing final track testing. Complete previous modules to gain priority access!
            </p>
          </div>
        ` : ''}

        <!-- Sequential Session Timeline Track -->
        ${mod.sessions && mod.sessions.length > 0 ? `
          <div class="sessions-timeline-container">
            <h3 class="font-menu mb-4" style="font-size:1.1rem; color:var(--color-text-dim);">Sequential Session Roadmap</h3>
            <div class="sessions-timeline">
              ${mod.sessions.map((s, idx) => this.renderTimelineSessionNode(mod.id, s, idx)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    container.innerHTML = html;
    window.renderLucideIcons();
  }

  /**
   * Renders an individual session node in the Sequential Timeline Path
   */
  renderTimelineSessionNode(moduleId, session, index) {
    const isUnlocked = window.apexStore.isSessionUnlocked(moduleId, session.id);
    const isCompleted = window.apexStore.isSessionCompleted(moduleId, session.id);
    const isCurrent = (window.apexStore.data.currentModule === moduleId && window.apexStore.data.currentSession === session.id);

    let nodeStateClass = 'locked';
    let indicatorContent = `${session.id}`;

    if (isCompleted) {
      nodeStateClass = 'completed';
      indicatorContent = '<i data-lucide="check" class="icon-sm"></i>';
    } else if (isCurrent && isUnlocked) {
      nodeStateClass = 'active';
      indicatorContent = '<i data-lucide="crosshair" class="icon-sm"></i>';
    } else if (isUnlocked) {
      nodeStateClass = 'available';
      indicatorContent = `${session.id}`;
    } else {
      nodeStateClass = 'locked';
      indicatorContent = '<i data-lucide="lock" class="icon-sm"></i>';
    }

    let statusBadge = '';
    if (isCompleted) {
      statusBadge = '<span class="session-status-badge completed flex items-center gap-1"><i data-lucide="check-circle-2" class="icon-sm"></i> Mastered</span>';
    } else if (isCurrent && isUnlocked) {
      statusBadge = '<span class="session-status-badge active flex items-center gap-1"><i data-lucide="crosshair" class="icon-sm"></i> In Progress</span>';
    } else if (isUnlocked) {
      statusBadge = '<span class="session-status-badge ready flex items-center gap-1"><i data-lucide="unlock" class="icon-sm"></i> Unlocked</span>';
    } else {
      statusBadge = '<span class="session-status-badge locked flex items-center gap-1"><i data-lucide="lock" class="icon-sm"></i> Locked</span>';
    }

    const difficultyStars = '<i data-lucide="zap" class="icon-sm text-accent me-1"></i>'.repeat(session.difficulty || 1);
    const targetTimeFormatted = session.targetLapTime 
      ? `${Math.floor(session.targetLapTime / 60)}:${(session.targetLapTime % 60).toFixed(1).padStart(4, '0')}`
      : 'N/A';

    return `
      <div class="timeline-step-node ${nodeStateClass}" data-module="${moduleId}" data-session="${session.id}">
        <!-- Step Circle Node -->
        <div class="timeline-node-indicator flex items-center justify-center">
          ${indicatorContent}
        </div>

        <!-- Session Detail Card -->
        <div class="timeline-node-card ${isCompleted ? 'completed-card' : ''} ${!isUnlocked ? 'locked-card' : ''} ${isCurrent ? 'current-card' : ''}">
          <div class="flex justify-between items-center mb-2">
            <span class="session-number-badge">Session ${moduleId}-${session.id}</span>
            ${statusBadge}
          </div>

          <h3 class="session-title">${session.title}</h3>
          <p class="session-focus text-muted mb-4">${session.focus}</p>

          <div class="session-meta-grid mb-4">
            <div class="meta-item">
              <span class="meta-item-label">Vehicle</span>
              <span class="meta-item-val flex items-center gap-1"><i data-lucide="car" class="icon-sm text-muted"></i> ${session.car}</span>
            </div>
            <div class="meta-item">
              <span class="meta-item-label">Circuit</span>
              <span class="meta-item-val flex items-center gap-1"><i data-lucide="flag" class="icon-sm text-muted"></i> ${session.track}</span>
            </div>
            <div class="meta-item">
              <span class="meta-item-label">Target Time</span>
              <span class="meta-item-val flex items-center gap-1"><i data-lucide="timer" class="icon-sm text-muted"></i> ${targetTimeFormatted}</span>
            </div>
            <div class="meta-item">
              <span class="meta-item-label">Difficulty</span>
              <span class="meta-item-val flex items-center">${difficultyStars}</span>
            </div>
          </div>

          ${session.challenge ? `
            <div class="session-challenge-box mb-4">
              <div class="challenge-header mb-1 flex items-center gap-2">
                <span class="challenge-icon flex items-center"><i data-lucide="target" class="icon-sm text-accent"></i></span>
                <span class="challenge-label">Session Challenge</span>
              </div>
              <div class="challenge-title">${session.challenge.title}</div>
            </div>
          ` : ''}

          <div class="session-card-actions flex flex-col gap-2">
            ${isCompleted ? `
              <button class="btn btn-outline w-full btn-session-action flex items-center justify-center gap-2" data-action="review" data-module="${moduleId}" data-session="${session.id}">
                <i data-lucide="eye" class="icon-sm"></i> Review Session Telemetry
              </button>
              <button class="btn btn-danger-ghost w-full btn-session-reset flex items-center justify-center gap-2" data-action="reset" data-module="${moduleId}" data-session="${session.id}">
                <i data-lucide="rotate-ccw" class="icon-sm"></i> Reset Progress
              </button>
            ` : isUnlocked ? `
              <button class="btn btn-primary w-full btn-session-action flex items-center justify-center gap-2" data-action="start" data-module="${moduleId}" data-session="${session.id}">
                <i data-lucide="play" class="icon-sm"></i> Launch Session ${moduleId}-${session.id}
              </button>
            ` : `
              <button class="btn btn-outline w-full btn-session-action locked-btn flex items-center justify-center gap-2" data-action="locked" data-module="${moduleId}" data-session="${session.id}">
                <i data-lucide="lock" class="icon-sm"></i> Content Locked
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const container = document.getElementById('modules');
    if (!container) return;

    // Back to All Modules Overview Button
    container.querySelectorAll('[data-action="back-to-modules"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeModuleId = null;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Open Module Card Click (Level 1 -> Level 2)
    container.querySelectorAll('[data-action="open-module"]').forEach(card => {
      card.addEventListener('click', () => {
        const modId = parseInt(card.getAttribute('data-module-id'));
        this.activeModuleId = modId;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // Session Action Buttons (Level 2)
    container.querySelectorAll('.btn-session-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = e.currentTarget.getAttribute('data-action');
        const modId = parseInt(e.currentTarget.getAttribute('data-module'));
        const sessId = parseInt(e.currentTarget.getAttribute('data-session'));

        if (action === 'start' || action === 'review') {
          if (window.sessionController && window.sessionController.loadSession(modId, sessId)) {
            window.apexApp.navigateTo('session');
          }
        } else if (action === 'locked') {
          this.showLockedAlert(modId, sessId);
        }
      });
    });

    // Reset Progress Action Buttons (Level 2)
    container.querySelectorAll('.btn-session-reset').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modId = parseInt(e.currentTarget.getAttribute('data-module'));
        const sessId = parseInt(e.currentTarget.getAttribute('data-session'));
        this.showResetConfirmationModal(modId, sessId);
      });
    });

    // Clicking locked timeline node triggers alert
    container.querySelectorAll('.timeline-step-node.locked').forEach(node => {
      node.addEventListener('click', (e) => {
        if (e.target.closest('.btn-session-action') || e.target.closest('.btn-session-reset')) return;
        const modId = parseInt(node.getAttribute('data-module'));
        const sessId = parseInt(node.getAttribute('data-session'));
        this.showLockedAlert(modId, sessId);
      });
    });
  }

  showResetConfirmationModal(moduleId, sessionId) {
    const modConfig = APEX_CONTENT.modules.find(m => m.id === moduleId);
    const sessionConfig = modConfig && modConfig.sessions ? modConfig.sessions.find(s => s.id === sessionId) : null;
    const sessionTitle = sessionConfig ? sessionConfig.title : `Session ${sessionId}`;

    window.apexApp.showModal(
      '<i data-lucide="alert-triangle" class="icon-md icon-accent me-2"></i> Reset Session Progress',
      `
        <div class="p-1 text-center">
          <div class="mb-3 text-accent flex justify-center">
            <i data-lucide="rotate-ccw" style="width:44px; height:44px;" class="icon-accent"></i>
          </div>
          <h3 class="font-menu mb-2" style="font-size:1.2rem;">Reset Session ${moduleId}-${sessionId}?</h3>
          <p class="text-tertiary mb-4" style="font-size:0.9rem; line-height:1.5;">
            Are you sure you want to reset progress for <strong>Session ${moduleId}-${sessionId}: ${sessionTitle}</strong>? All recorded telemetry, ratings, notes, and reflection journal entries for this session will be cleared.
          </p>
          <div class="p-3 mb-4 text-left" style="background:rgba(230,57,70,0.08); border:1px solid rgba(230,57,70,0.25); border-radius:var(--radius-sm); font-size:0.82rem; color:var(--color-text-muted);">
            <strong style="color:var(--color-accent-red);">Note:</strong> This isolated reset clears Session ${moduleId}-${sessionId} progress. Subsequent completed sessions will retain their completed status.
          </div>
          <div class="flex justify-end gap-3 mt-4">
            <button class="btn btn-secondary" id="btnCancelResetSession" style="min-width:100px;">Cancel</button>
            <button class="btn btn-danger-ghost" id="btnConfirmResetSession" style="min-width:140px; background:var(--color-accent-red); color:#fff; border:none;">
              <i data-lucide="rotate-ccw" class="icon-sm"></i> Confirm Reset
            </button>
          </div>
        </div>
      `
    );

    setTimeout(() => {
      document.getElementById('btnCancelResetSession')?.addEventListener('click', () => {
        window.apexApp.closeModal();
      });

      document.getElementById('btnConfirmResetSession')?.addEventListener('click', () => {
        window.apexStore.resetSessionProgress(moduleId, sessionId);
        window.apexApp.closeModal();
        this.render();
      });
    }, 50);
  }


  showLockedAlert(moduleId, sessionId) {
    const text = window.apexStore.getUnlockRequirementText(moduleId, sessionId || 1);
    window.apexApp.showModal('🔒 Content Gated', `
      <div class="text-center p-2">
        <div style="font-size:3rem; margin-bottom:0.5rem;">🔒</div>
        <h3 style="margin-bottom:0.75rem;" class="font-menu">Challenge Prerequisites Required</h3>
        <p style="font-size:0.95rem; color:var(--color-text-dim); line-height:1.5; margin-bottom:1.5rem; background:rgba(255,255,255,0.04); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--color-border);">
          ${text}
        </p>
        <button class="btn btn-primary" id="btnModalCloseGateAlert" style="min-width:120px;">Got It</button>
      </div>
    `);

    setTimeout(() => {
      const closeBtn = document.getElementById('btnModalCloseGateAlert');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => window.apexApp.closeModal());
      }
    }, 50);
  }
}

// Global Controller Instance
window.modulesController = new ModulesController();
