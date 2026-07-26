/**
 * Progress & Analytics View Controller
 * Renders Lap Time Progress Canvas Chart, 5-Axis Skill Radar Chart, Streak Info, Achievements Grid
 */

class ProgressController {
  render() {
    const container = document.getElementById('progress');
    if (!container) return;

    const data = window.apexStore.data;
    const ratings = window.apexStore.getAverageRatings();
    const currentModId = (data.currentModule !== undefined && data.currentModule !== null) ? data.currentModule : 1;
    const scores = window.apexStore.calculateModuleScore(currentModId);
    const mod = APEX_CONTENT.modules.find(m => m.id === currentModId) || APEX_CONTENT.modules[0];
    const totalSessionsCount = APEX_CONTENT.modules.reduce((acc, m) => acc + (m.sessions ? m.sessions.length : 12), 0);

    container.innerHTML = `
      <div class="page-container">
        <div class="page-header">
          <div class="page-header-title">
            <h1>Progress & Analytics</h1>
          </div>
          <div class="page-header-actions">
            <span class="badge" style="background:var(--color-primary-glow); color:var(--color-primary);">Module ${mod.id}: ${mod.title}</span>
          </div>
        </div>

        <!-- Metric Cards Grid -->
        <div class="grid-4 mb-6">
          <div class="card text-center">
            <span class="text-muted" style="font-size:0.75rem;">Overall Score</span>
            <div style="font-size:2rem; font-weight:700; color:var(--color-primary);">${scores.overall}/100</div>
          </div>
          <div class="card text-center">
            <span class="text-muted" style="font-size:0.75rem;">Completed Sessions</span>
            <div style="font-size:2rem; font-weight:700; color:var(--color-success);">${data.completedSessions.length}/${totalSessionsCount}</div>
          </div>
          <div class="card text-center">
            <span class="text-muted" style="font-size:0.75rem;">Weekly Streak</span>
            <div style="font-size:2rem; font-weight:700; color:var(--color-warning);">${data.currentStreak} Wks 🔥</div>
          </div>
          <div class="card text-center">
            <span class="text-muted" style="font-size:0.75rem;">Avg Confidence</span>
            <div style="font-size:2rem; font-weight:700; color:var(--color-text);">${ratings.confidence} / 5 ★</div>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid-2 mb-6">
          <!-- Lap Time Line Chart -->
          <div class="card">
            <div class="card-header">
              <h3>Lap Time Improvement</h3>
              <span class="text-muted" style="font-size:0.75rem;">Target vs Actual (Sec)</span>
            </div>
            <div style="width:100%; height:220px;">
              <canvas id="lapTimeCanvas" style="width:100%; height:100%;"></canvas>
            </div>
          </div>

          <!-- 5-Axis Skill Radar Chart -->
          <div class="card">
            <div class="card-header">
              <h3>Skill Radar Breakdown</h3>
              <span class="text-muted" style="font-size:0.75rem;">5 Pillars (1-5 Rating)</span>
            </div>
            <div style="width:100%; height:240px;">
              <canvas id="skillRadarCanvas" style="width:100%; height:100%;"></canvas>
            </div>
          </div>
        </div>

        <!-- Achievements Gallery -->
        <div class="card mb-6">
          <div class="card-header">
            <h3>Achievements Gallery</h3>
            <span class="text-muted" style="font-size:0.8rem;">${data.achievements.length} Unlocked</span>
          </div>
          <div class="grid-3 mt-4">
            ${this.renderAchievementCard('first_visit', 'First Step', 'Visited Apex and started your coaching journey.', data.achievements, 'flag')}
            ${this.renderAchievementCard('first_session', 'First Session', 'Completed your first 45-minute structured session.', data.achievements, 'gauge')}
            ${this.renderAchievementCard('line_master', 'Line Master', 'Understood corner radius and hit reference markers.', data.achievements, 'spline')}
            ${this.renderAchievementCard('the_completer', 'The Completer', 'Completed all 12 sessions of Module 1: The Line.', data.achievements, 'trophy')}
            ${this.renderAchievementCard('streak_master', 'Consistent Racer', 'Maintained a 3-week consecutive practice streak.', data.achievements, 'zap')}
            ${this.renderAchievementCard('apex_legend', 'Apex Legend', 'Achieved an overall module scorecard rating of 85+.', data.achievements, 'award')}
          </div>
        </div>
      </div>
    `;

    // Render Canvas Charts after DOM update
    setTimeout(() => {
      window.apexCharts.renderLapTimeChart('lapTimeCanvas', data.sessions);
      window.apexCharts.renderRadarChart('skillRadarCanvas', ratings);
      window.renderLucideIcons();
    }, 50);
  }

  renderAchievementCard(id, title, desc, unlockedList, iconName = 'award') {
    const isUnlocked = unlockedList.includes(id);
    return `
      <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon flex items-center justify-center">
          <i data-lucide="${iconName}" class="icon-lg ${isUnlocked ? 'icon-accent' : 'icon-muted'}"></i>
        </div>
        <div class="achievement-title">${title}</div>
        <div class="achievement-desc">${desc}</div>
        <div class="mt-2 flex items-center gap-1 justify-center" style="font-size:0.75rem; color:${isUnlocked ? 'var(--color-warning)' : 'var(--color-text-dim)'}; font-weight:600;">
          ${isUnlocked ? '<i data-lucide="check-circle-2" class="icon-sm"></i> Unlocked' : '<i data-lucide="lock" class="icon-sm"></i> Locked'}
        </div>
      </div>
    `;
  }
}

window.progressController = new ProgressController();
