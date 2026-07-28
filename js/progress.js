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
      </div>
    `;

    // Render Canvas Charts after DOM update
    setTimeout(() => {
      window.apexCharts.renderLapTimeChart('lapTimeCanvas', data.sessions);
      window.apexCharts.renderRadarChart('skillRadarCanvas', ratings);
      window.renderLucideIcons();
    }, 50);
  }
}

window.progressController = new ProgressController();
