/**
 * Lightweight HTML5 Canvas Chart Engine
 * Renders Lap Time Progress Line Charts & 5-Axis Skill Radar Charts
 */

class ApexCharts {
  // Render Lap Time Progress Line Chart
  renderLapTimeChart(canvasId, sessionsData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set resolution
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = (rect.height || 220) * 2;
    ctx.scale(2, 2);

    const width = rect.width;
    const height = rect.height || 220;
    const padding = 40;

    // Filter valid lap times
    const dataPoints = [];
    for (let i = 1; i <= 12; i++) {
      const key = `1-${i}`;
      const sess = sessionsData[key];
      if (sess && sess.lapTime) {
        dataPoints.push({ session: `S${i}`, time: sess.lapTime, target: sess.targetLapTime || 105.0 });
      } else {
        // Sample baseline if not completed yet for preview
        dataPoints.push({ session: `S${i}`, time: null, target: 110 - i * 1.5 });
      }
    }

    ctx.clearRect(0, 0, width, height);

    // Draw Grid Lines
    ctx.strokeStyle = '#2a2a3e';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw Target Line
    const minY = 90;
    const maxY = 115;
    const getY = (val) => height - padding - ((val - minY) / (maxY - minY)) * (height - 2 * padding);
    const getX = (idx) => padding + (idx / 11) * (width - 2 * padding);

    ctx.strokeStyle = 'rgba(254, 202, 87, 0.4)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    for (let i = 0; i < 12; i++) {
      const x = getX(i);
      const y = getY(dataPoints[i].target);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Actual Lap Time Line
    const validPoints = dataPoints.map((dp, idx) => ({ ...dp, idx })).filter(dp => dp.time !== null);

    if (validPoints.length > 0) {
      ctx.strokeStyle = '#48dbfb';
      ctx.lineWidth = 3;
      ctx.beginPath();
      validPoints.forEach((pt, i) => {
        const x = getX(pt.idx);
        const y = getY(pt.time);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Draw Dots
      validPoints.forEach(pt => {
        const x = getX(pt.idx);
        const y = getY(pt.time);
        ctx.fillStyle = '#48dbfb';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0a0a0f';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    // X Axis Labels
    ctx.fillStyle = '#8888aa';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < 12; i += 2) {
      ctx.fillText(`S${i + 1}`, getX(i), height - padding + 18);
    }
  }

  // Render 5-Axis Skill Radar Chart
  renderRadarChart(canvasId, ratings) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = (rect.height || 240) * 2;
    ctx.scale(2, 2);

    const width = rect.width;
    const height = rect.height || 240;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 35;

    const axes = [
      { key: 'brakeConsistency', label: 'Braking' },
      { key: 'apexAccuracy', label: 'Apex' },
      { key: 'throttleControl', label: 'Throttle' },
      { key: 'overallControl', label: 'Control' },
      { key: 'confidence', label: 'Confidence' }
    ];

    ctx.clearRect(0, 0, width, height);

    // Draw Web Concentric Pentagons
    const levels = 5;
    for (let level = 1; level <= levels; level++) {
      const r = (radius / levels) * level;
      ctx.strokeStyle = '#2a2a3e';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw Axes & Labels
    axes.forEach((axis, i) => {
      const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.strokeStyle = '#2a2a3e';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Label positioning
      ctx.fillStyle = '#e8e8f0';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      const labelX = centerX + (radius + 18) * Math.cos(angle);
      const labelY = centerY + (radius + 18) * Math.sin(angle) + 4;
      ctx.fillText(axis.label, labelX, labelY);
    });

    // Draw Filled Value Polygon
    ctx.fillStyle = 'rgba(72, 219, 251, 0.25)';
    ctx.strokeStyle = '#48dbfb';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    axes.forEach((axis, i) => {
      const val = ratings[axis.key] || 3; // 1-5 scale
      const r = (radius / 5) * val;
      const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

window.apexCharts = new ApexCharts();
