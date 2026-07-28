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

    this.visionPhases = {
      approach: {
        label: '1. Approach',
        color: '#3498db',
        focusTarget: 'Braking Point',
        carX: 40, carY: 270,
        eyeX: 120, eyeY: 130,
        desc: 'Look far ahead toward the braking marker before reaching the corner entry.'
      },
      turnIn: {
        label: '2. Turn-In',
        color: '#e67e22',
        focusTarget: 'Apex Curb',
        carX: 110, carY: 150,
        eyeX: 200, eyeY: 90,
        desc: 'Shift your visual focus to the apex BEFORE turning the wheel.'
      },
      midCorner: {
        label: '3. Mid-Corner',
        color: '#2ecc71',
        focusTarget: 'Track-Out Exit',
        carX: 200, carY: 90,
        eyeX: 350, eyeY: 250,
        desc: 'Look toward the exit curb before the car reaches the apex.'
      },
      exit: {
        label: '4. Exit Focus',
        color: '#9b59b6',
        focusTarget: 'Next Straightaway',
        carX: 340, carY: 260,
        eyeX: 380, eyeY: 100,
        desc: 'Immediately scan down the straight or next braking marker.'
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

  renderVisionSightlineDiagram(containerId, initialPhase = 'approach') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const phase = this.visionPhases[initialPhase] || this.visionPhases.approach;

    container.innerHTML = `
      <div class="diagram-container">
        <div class="diagram-controls flex gap-2 flex-wrap justify-center mb-3">
          ${Object.keys(this.visionPhases).map(key => {
            const item = this.visionPhases[key];
            const isActive = key === initialPhase;
            return `<button class="btn ${isActive ? 'btn-primary' : 'btn-outline'}" data-vision="${key}" style="${isActive ? `background:${item.color}; border-color:${item.color};` : ''}">${item.label}</button>`;
          }).join('')}
        </div>

        <div style="position:relative; width:100%; max-width:500px; height:240px; margin:0 auto; background:var(--color-surface, #18181C); border:1px solid var(--color-border, rgba(58, 58, 69, 0.2)); border-radius:12px; overflow:hidden;">
          <svg viewBox="0 0 400 300" style="width:100%; height:100%;">
            <!-- Track Curve -->
            <path d="M 10,290 Q 10,90 200,90 T 390,290" fill="none" stroke="var(--color-border, rgba(58, 58, 69, 0.2))" stroke-width="60" stroke-linecap="round"/>
            <path d="M 10,290 Q 10,90 200,90 T 390,290" fill="none" stroke="var(--color-bg, #0A0A0C)" stroke-width="50" stroke-linecap="round"/>
            
            <!-- Racing Line Reference -->
            <path d="M 20,280 Q 80,130 180,180 T 340,280" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3" stroke-dasharray="6,6"/>

            <!-- Sightline Vector -->
            <line id="visionSightline" x1="${phase.carX}" y1="${phase.carY}" x2="${phase.eyeX}" y2="${phase.eyeY}" stroke="${phase.color}" stroke-width="3" stroke-dasharray="4,4"/>
            
            <!-- Car Position Marker -->
            <circle id="visionCarDot" cx="${phase.carX}" cy="${phase.carY}" r="9" fill="#FFFFFF" stroke="${phase.color}" stroke-width="3"/>

            <!-- Eye Target Focal Point Marker -->
            <circle id="visionEyeTarget" cx="${phase.eyeX}" cy="${phase.eyeY}" r="7" fill="${phase.color}">
              <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        <div class="diagram-stats mt-3 text-center">
          <div class="badge font-telemetry mb-1" id="visionTargetBadge" style="background:rgba(255,255,255,0.08); color:${phase.color}; border:1px solid ${phase.color};">
            🎯 Target Focus: ${phase.focusTarget}
          </div>
          <p class="text-tertiary mt-2 text-center" id="visionDesc" style="font-size:0.88rem;">${phase.desc}</p>
        </div>
      </div>
    `;

    const buttons = container.querySelectorAll('[data-vision]');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = e.currentTarget.getAttribute('data-vision');
        this.updateVisionDiagram(container, key);
      });
    });
  }

  updateVisionDiagram(container, phaseKey) {
    const data = this.visionPhases[phaseKey];
    if (!data) return;

    const sightline = container.querySelector('#visionSightline');
    const carDot = container.querySelector('#visionCarDot');
    const eyeTarget = container.querySelector('#visionEyeTarget');
    const badge = container.querySelector('#visionTargetBadge');
    const desc = container.querySelector('#visionDesc');

    if (sightline) {
      sightline.setAttribute('x1', data.carX);
      sightline.setAttribute('y1', data.carY);
      sightline.setAttribute('x2', data.eyeX);
      sightline.setAttribute('y2', data.eyeY);
      sightline.setAttribute('stroke', data.color);
    }

    if (carDot) {
      carDot.setAttribute('cx', data.carX);
      carDot.setAttribute('cy', data.carY);
      carDot.setAttribute('stroke', data.color);
    }

    if (eyeTarget) {
      eyeTarget.setAttribute('cx', data.eyeX);
      eyeTarget.setAttribute('cy', data.eyeY);
      eyeTarget.setAttribute('fill', data.color);
    }

    if (badge) {
      badge.style.color = data.color;
      badge.style.borderColor = data.color;
      badge.textContent = `🎯 Target Focus: ${data.focusTarget}`;
    }

    if (desc) {
      desc.textContent = data.desc;
    }

    container.querySelectorAll('[data-vision]').forEach(btn => {
      const key = btn.getAttribute('data-vision');
      const item = this.visionPhases[key];
      if (key === phaseKey) {
        btn.className = 'btn btn-primary';
        btn.style.background = item.color;
        btn.style.borderColor = item.color;
      } else {
        btn.className = 'btn btn-outline';
        btn.style.background = '';
        btn.style.borderColor = '';
      }
    });
  }
}

window.apexDiagrams = new ApexDiagrams();

