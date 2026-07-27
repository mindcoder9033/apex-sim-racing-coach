/**
 * Interactive SVG Racing Line & Corner Diagram Builder
 */

class ApexDiagrams {
  constructor() {
    this.paths = {
      inside: {
        label: 'Inside Line',
        color: '#FF1E00',
        radius: '32 m',
        speed: '63.5 km/h',
        time: '2.4s',
        desc: 'Tight radius forces heavy braking and delays exit acceleration.',
        svgPath: 'M 40,260 Q 80,180 180,180 T 260,260'
      },
      outside: {
        label: 'Outside Line',
        color: '#feca57',
        radius: '41 m',
        speed: '71.1 km/h',
        time: '2.2s',
        desc: 'Medium radius, but covers a long physical distance.',
        svgPath: 'M 20,280 Q 20,120 180,120 T 340,280'
      },
      racing: {
        label: 'Ideal Racing Line',
        color: '#FFFFFF',
        radius: '59 m',
        speed: '86.9 km/h',
        time: '1.8s',
        desc: 'Maximum arc radius! Carries highest speed and straightens corner exit.',
        svgPath: 'M 20,280 Q 80,130 180,180 T 340,280'
      }
    };
  }

  renderCornerComparison(containerId, initialPathKey = 'racing') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="diagram-container">
        <div class="diagram-controls">
          <button class="btn btn-outline ${initialPathKey === 'inside' ? 'active' : ''}" data-path="inside" style="border-color:#FF1E00; color:#FF1E00;">Inside Line</button>
          <button class="btn btn-outline ${initialPathKey === 'outside' ? 'active' : ''}" data-path="outside" style="border-color:#feca57; color:#feca57;">Outside Line</button>
          <button class="btn btn-primary ${initialPathKey === 'racing' ? 'active' : ''}" data-path="racing">Ideal Racing Line</button>
        </div>

        <div style="position:relative; width:100%; max-width:500px; height:240px; margin:0 auto; background:var(--color-surface, #18181C); border:1px solid var(--color-border, rgba(58, 58, 69, 0.2)); border-radius:12px; overflow:hidden;">
          <svg viewBox="0 0 400 300" style="width:100%; height:100%;">
            <!-- Track Outer & Inner Boundaries -->
            <path d="M 10,290 Q 10,90 200,90 T 390,290" fill="none" stroke="var(--color-border, rgba(58, 58, 69, 0.2))" stroke-width="60" stroke-linecap="round"/>
            <path d="M 10,290 Q 10,90 200,90 T 390,290" fill="none" stroke="var(--color-bg, #0A0A0C)" stroke-width="50" stroke-linecap="round"/>
            
            <!-- Curbs -->
            <path d="M 170,165 Q 200,165 210,180" fill="none" stroke="#2ecc71" stroke-width="6" stroke-dasharray="4,4"/>

            <!-- Selected Path -->
            <path id="svgActivePath" d="${this.paths[initialPathKey].svgPath}" fill="none" stroke="${this.paths[initialPathKey].color}" stroke-width="5" stroke-linecap="round"/>
            
            <!-- Animated Car Marker -->
            <circle id="svgCarDot" r="7" fill="${this.paths[initialPathKey].color}">
              <animateMotion id="carAnimation" path="${this.paths[initialPathKey].svgPath}" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        <div class="diagram-stats mt-4" id="diagramStats">
          <div class="diagram-stat-item">
            <span class="diagram-stat-value font-telemetry" id="statRadius">${this.paths[initialPathKey].radius}</span>
            <span class="diagram-stat-label">Corner Radius</span>
          </div>
          <div class="diagram-stat-item">
            <span class="diagram-stat-value font-gear-speed" id="statSpeed">${this.paths[initialPathKey].speed}</span>
            <span class="diagram-stat-label">Max Corner Speed</span>
          </div>
          <div class="diagram-stat-item">
            <span class="diagram-stat-value font-telemetry" id="statTime">${this.paths[initialPathKey].time}</span>
            <span class="diagram-stat-label">Time in Turn</span>
          </div>
        </div>
        <p class="text-tertiary mt-2 text-center" id="statDesc" style="font-size:0.88rem;">${this.paths[initialPathKey].desc}</p>
      </div>
    `;

    // Add click event listeners
    const buttons = container.querySelectorAll('[data-path]');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pathKey = e.currentTarget.getAttribute('data-path');
        this.updateDiagram(container, pathKey);
      });
    });
  }

  updateDiagram(container, pathKey) {
    const data = this.paths[pathKey];
    if (!data) return;

    const pathEl = container.querySelector('#svgActivePath');
    const carDot = container.querySelector('#svgCarDot');
    const anim = container.querySelector('#carAnimation');

    if (pathEl) {
      pathEl.setAttribute('d', data.svgPath);
      pathEl.setAttribute('stroke', data.color);
    }
    if (carDot) {
      carDot.setAttribute('fill', data.color);
    }
    if (anim) {
      anim.setAttribute('path', data.svgPath);
    }

    container.querySelector('#statRadius').textContent = data.radius;
    container.querySelector('#statSpeed').textContent = data.speed;
    container.querySelector('#statTime').textContent = data.time;
    container.querySelector('#statDesc').textContent = data.desc;

    // Update active button styling
    container.querySelectorAll('[data-path]').forEach(btn => {
      btn.classList.remove('btn-primary', 'active');
      btn.classList.add('btn-outline');
      if (btn.getAttribute('data-path') === pathKey) {
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline');
      }
    });
  }
}

window.apexDiagrams = new ApexDiagrams();
