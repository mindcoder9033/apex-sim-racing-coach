/**
 * Apex Application Controller & SPA Router
 * Initializes views, handles navigation, modals, and responsive layout toggles
 */

class ApexApp {
  constructor() {
    this.currentView = 'dashboard';
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.bindNavigation();
      this.bindSidebarToggle();
      this.checkFirstVisit();
      this.navigateTo('dashboard');
      window.renderLucideIcons();
    });
  }

  // SPA View Switcher with Smooth Fade
  navigateTo(viewId) {
    const currentEl = document.querySelector('.page-view.active');
    const targetEl = document.getElementById(viewId);

    if (!targetEl) return;

    if (currentEl) {
      currentEl.classList.add('fade-out');
      setTimeout(() => {
        currentEl.classList.remove('active', 'fade-out');
        currentEl.style.display = 'none';

        this.activateTargetView(viewId, targetEl);
      }, 150);
    } else {
      this.activateTargetView(viewId, targetEl);
    }
  }

  activateTargetView(viewId, targetEl) {
    targetEl.style.display = 'block';
    targetEl.classList.add('active', 'fade-in');
    this.currentView = viewId;

    // Render corresponding view controller
    if (viewId === 'dashboard') {
      window.dashboardController.render();
    } else if (viewId === 'modules') {
      window.modulesController.render();
    } else if (viewId === 'progress') {
      window.progressController.render();
    } else if (viewId === 'journal') {
      window.journalController.render();
    } else if (viewId === 'reference') {
      window.referenceController.render();
    } else if (viewId === 'psychology') {
      window.psychologyController.render();
    }

    this.updateActiveNavState(viewId);
    window.scrollTo(0, 0);
    window.renderLucideIcons();

    setTimeout(() => {
      targetEl.classList.remove('fade-in');
    }, 250);
  }

  updateActiveNavState(viewId) {
    // Desktop Nav
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === viewId) {
        link.classList.add('active');
      }
    });

    // Mobile Bottom Nav
    document.querySelectorAll('.mobile-nav .mobile-nav-item, .mobile-bottom-nav .mobile-nav-item').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-page') === viewId) {
        btn.classList.add('active');
      }
    });
  }

  bindNavigation() {
    // Desktop Sidebar Links
    document.querySelectorAll('.sidebar-nav .nav-link, .sidebar-footer .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = e.currentTarget.getAttribute('data-page');
        if (targetPage === 'export') {
          window.apexExport.downloadBackup();
        } else if (targetPage === 'import') {
          window.apexExport.showImportDialog();
        } else if (targetPage) {
          this.navigateTo(targetPage);
        }
      });
    });

    // Mobile Bottom Nav Items
    document.querySelectorAll('.mobile-nav .mobile-nav-item, .mobile-bottom-nav .mobile-nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetPage = e.currentTarget.getAttribute('data-page');
        if (targetPage) {
          this.navigateTo(targetPage);
        }
      });
    });

    // Logo Click
    document.querySelector('.logo-brand')?.addEventListener('click', () => {
      this.navigateTo('dashboard');
    });
  }

  bindSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('collapsed');
      const isCollapsed = sidebar?.classList.contains('collapsed');
      window.apexStore.saveSettings({ sidebarCollapsed: isCollapsed });
    });

    // Restore saved sidebar collapsed state
    if (window.apexStore.settings.sidebarCollapsed) {
      sidebar?.classList.add('collapsed');
    }
  }

  // Start Active Session View
  startSession(moduleId, sessionId) {
    const success = window.sessionController.loadSession(moduleId, sessionId);
    if (success) {
      this.navigateTo('session');
    }
  }

  // First-Visit Equipment Onboarding Modal
  checkFirstVisit() {
    if (!window.apexStore.data.equipmentSetup) {
      setTimeout(() => {
        this.showEquipmentModal();
      }, 500);
    }
  }

  showEquipmentModal() {
    this.showModal('<i data-lucide="sliders" class="icon-md icon-accent me-2"></i> Welcome to Apex Equipment Setup', `
      <p class="text-muted mb-4">Let's verify your sim racing hardware to tailor recommendations:</p>
      
      <div class="form-group">
        <label class="form-label">Do you have Forza Motorsport 2023 installed?</label>
        <select class="form-control" id="selForza">
          <option value="yes">Yes, latest version installed</option>
          <option value="no">No, using another sim</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">What driving controller are you using?</label>
        <select class="form-control" id="selWheel">
          <option value="moza_r3">Moza R3 Direct Drive Wheel (Recommended)</option>
          <option value="other_wheel">Other Force Feedback Wheel</option>
          <option value="controller">Gamepad / Xbox Controller</option>
        </select>
      </div>

      <div class="card mt-4" style="background:var(--color-surface-light);">
        <h4 style="font-size:0.9rem;" class="flex items-center gap-2"><i data-lucide="zap" class="icon-sm icon-accent"></i> Quick Setup Tip</h4>
        <p class="text-muted mt-1" style="font-size:0.85rem;">For Moza R3: Set overall Force Feedback strength to 90-100% in Pit House and calibrate pedal deadzones in Forza for maximum precision!</p>
      </div>

      <div class="flex justify-between items-center mt-6">
        <div></div>
        <button class="btn btn-primary flex items-center gap-2" id="btnSaveEquipment">
          <span>Save Setup & Begin</span>
          <i data-lucide="arrow-right" class="icon-sm"></i>
        </button>
      </div>
    `);

    document.getElementById('btnSaveEquipment')?.addEventListener('click', () => {
      const forza = document.getElementById('selForza')?.value === 'yes';
      const wheel = document.getElementById('selWheel')?.value || 'moza_r3';
      window.apexStore.setEquipmentSetup({ forza, wheel });
      this.closeModal();
    });
  }

  // Achievement Unlocked Modal
  showAchievementModal(ach) {
    this.showModal('<i data-lucide="trophy" class="icon-md icon-accent me-2"></i> Achievement Unlocked!', `
      <div class="text-center py-4">
        <div class="mb-3 text-accent flex justify-center"><i data-lucide="award" style="width:56px; height:56px;"></i></div>
        <h3>${ach.title}</h3>
        <p class="text-muted mt-2">${ach.desc}</p>
        <button class="btn btn-primary mt-6" onclick="window.apexApp.closeModal(); window.apexApp.navigateTo('dashboard');">Awesome!</button>
      </div>
    `);
  }

  // Generic Modal Engine
  showModal(title, bodyHtml) {
    const overlay = document.getElementById('globalModalOverlay');
    const container = document.getElementById('globalModalContainer');
    if (!overlay || !container) return;

    container.innerHTML = `
      <div class="modal-header flex items-center justify-between">
        <h3 class="flex items-center">${title}</h3>
        <button class="btn btn-icon" onclick="window.apexApp.closeModal();" aria-label="Close modal"><i data-lucide="x" class="icon-sm"></i></button>
      </div>
      <div class="modal-body">${bodyHtml}</div>
    `;

    overlay.classList.add('active');
    window.renderLucideIcons();
  }

  closeModal() {
    const overlay = document.getElementById('globalModalOverlay');
    overlay?.classList.remove('active');
  }
}

// Global Lucide SVG rendering helpers
window.renderLucideIcons = function() {
  if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
};

window.getIconSvg = function(iconName, extraClasses = '') {
  const name = iconName || 'circle';
  return `<i data-lucide="${name}" class="icon ${extraClasses}"></i>`;
};

window.apexApp = new ApexApp();
