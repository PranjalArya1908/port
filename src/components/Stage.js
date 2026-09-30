const gsap = window.gsap;
import { PORTFOLIO_STATES } from '../data/states.js';
import { sound } from '../utils/audio.js';

export class Stage {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    this.onShardHover = options.onShardHover || (() => {});
    this.onShardClick = options.onShardClick || (() => {});
    this.currentStateKey = 'about';
    this.meshMode = 'solid'; // 'solid' | 'wireframe' | 'explode'

    // Mouse parallax variables
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.tilt = { x: 0, y: 0 };

    // Shard runtime data
    this.shards = [];
    this.animData = [];
    this.activeTweens = [];
    this.rafId = null;

    // Explode factor
    this.explodeFactor = { val: 0 };

    this.initDOM();
    this.initShards();
    this.initEvents();
    this.startRAF();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="stage-viewport" id="stage-viewport">
        <!-- Ambient Background Radial Glow -->
        <div class="ambient-glow" id="ambient-glow"></div>

        <!-- 3D Perspective Tilt Container -->
        <div class="stage-tilt-box" id="stage-tilt-box">
          <svg class="stage-svg" id="stage-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
            <defs>
              <!-- Noise Grain Pattern -->
              <filter id="svg-noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0" />
              </filter>

              <!-- Quantum Anchor Glow Filter -->
              <filter id="anchor-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <!-- Shard Subtle Edge Glow -->
              <filter id="facet-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <!-- Radial Gradient for Quantum Anchor #0 -->
              <radialGradient id="anchor-gradient" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.95" />
                <stop offset="80%" stop-color="#00f0ff" stop-opacity="0.9" />
                <stop offset="100%" stop-color="#0369a1" stop-opacity="0.85" />
              </radialGradient>

              <!-- Holographic Spectrum Gradient for Mesh Highlights -->
              <linearGradient id="holo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#00f0ff" />
                <stop offset="40%" stop-color="#7928ca" />
                <stop offset="80%" stop-color="#ec4899" />
                <stop offset="100%" stop-color="#ffb703" />
              </linearGradient>
            </defs>

            <!-- Background Polar Coordinate Rings -->
            <g class="bg-radar-rings" id="bg-radar-rings" opacity="0.18">
              <circle cx="500" cy="500" r="420" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="4,8" />
              <circle cx="500" cy="500" r="320" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-dasharray="8,16" />
              <circle cx="500" cy="500" r="220" fill="none" stroke="#ffffff" stroke-width="0.5" />
              <line x1="80" y1="500" x2="920" y2="500" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="2,6" />
              <line x1="500" y1="80" x2="500" y2="920" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="2,6" />
            </g>

            <!-- Exploded View Line Traces (Rendered when explode mode active) -->
            <g id="explode-lines" class="explode-lines" opacity="0"></g>

            <!-- 28 Low-Poly Geometric Polygons -->
            <g id="shards-group" class="shards-group"></g>

            <!-- Quantum Tile #0 Active Tracking Reticle HUD -->
            <g id="quantum-tracker" class="quantum-tracker">
              <!-- Pulsing Ring -->
              <circle class="tracker-pulse-ring" r="38" fill="none" stroke="#00f0ff" stroke-width="1.2" opacity="0.6" stroke-dasharray="6,4" />
              <circle class="tracker-inner-ring" r="22" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.8" />
              <circle class="tracker-center-dot" r="4" fill="#ffffff" />
              
              <!-- Crosshair Lines -->
              <line x1="-50" y1="0" x2="-28" y2="0" stroke="#00f0ff" stroke-width="1" />
              <line x1="28" y1="0" x2="50" y2="0" stroke="#00f0ff" stroke-width="1" />
              <line x1="0" y1="-50" x2="0" y2="-28" stroke="#00f0ff" stroke-width="1" />
              <line x1="0" y1="28" x2="0" y2="50" stroke="#00f0ff" stroke-width="1" />

              <!-- Live HUD Callout Line and Floating Badge -->
              <polyline class="tracker-leader-line" points="36,-26 70,-56 180,-56" fill="none" stroke="#00f0ff" stroke-width="1" opacity="0.8" />
              
              <g class="tracker-badge" transform="translate(74, -72)">
                <rect x="0" y="0" width="130" height="24" rx="3" fill="#07090ef0" stroke="#00f0ff" stroke-width="0.8" />
                <text x="8" y="16" fill="#00f0ff" font-family="'Space Grotesk', monospace" font-size="9" letter-spacing="1.2">QUANTUM ANCHOR</text>
              </g>

              <g class="tracker-telemetry" transform="translate(74, -40)">
                <text id="tracker-telemetry-text" x="0" y="0" fill="#94a3b8" font-family="'Space Grotesk', monospace" font-size="8.5" letter-spacing="0.8">X:500 Y:433 | COHERENT</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    `;

    this.shardsGroup = this.container.querySelector('#shards-group');
    this.quantumTracker = this.container.querySelector('#quantum-tracker');
    this.trackerTelemetryText = this.container.querySelector('#tracker-telemetry-text');
    this.tiltBox = this.container.querySelector('#stage-tilt-box');
    this.ambientGlow = this.container.querySelector('#ambient-glow');
    this.explodeLines = this.container.querySelector('#explode-lines');
  }

  initShards() {
    const initialState = PORTFOLIO_STATES[this.currentStateKey];
    this.shards = [];
    this.animData = [];

    // Create 28 SVG polygon elements
    initialState.shards.forEach((s, idx) => {
      const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('id', `shard-${idx}`);
      polygon.classList.add('mesh-shard');
      if (s.isAnchor) {
        polygon.classList.add('is-anchor-shard');
        polygon.setAttribute('filter', 'url(#anchor-glow)');
      } else {
        polygon.setAttribute('filter', 'url(#facet-glow)');
      }

      // Initial coordinates
      const p0 = [...s.points[0]];
      const p1 = [...s.points[1]];
      const p2 = [...s.points[2]];

      polygon.setAttribute('points', `${p0[0]},${p0[1]} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`);
      polygon.setAttribute('fill', s.isAnchor ? 'url(#anchor-gradient)' : s.fill);
      polygon.setAttribute('stroke', s.stroke || '#ffffff');
      polygon.setAttribute('stroke-width', s.isAnchor ? '2.4' : '0.8');
      polygon.setAttribute('stroke-linejoin', 'round');
      polygon.setAttribute('opacity', s.opacity || '0.85');
      polygon.style.cursor = 'pointer';

      // Attach data attributes
      polygon.dataset.index = idx;
      if (s.chip) polygon.dataset.chip = s.chip;

      // Hover and Click events
      polygon.addEventListener('mouseenter', () => {
        sound.playHover();
        polygon.classList.add('is-hovered');
        this.onShardHover(idx, s.chip || null);
      });

      polygon.addEventListener('mouseleave', () => {
        polygon.classList.remove('is-hovered');
        this.onShardHover(null, null);
      });

      polygon.addEventListener('click', (e) => {
        sound.playClick();
        this.onShardClick(idx, s.chip || null, e);
      });

      this.shardsGroup.appendChild(polygon);

      this.shards.push(polygon);
      this.animData.push({
        idx,
        isAnchor: !!s.isAnchor,
        chip: s.chip || null,
        // Current animated point coordinates
        p0x: p0[0], p0y: p0[1],
        p1x: p1[0], p1y: p1[1],
        p2x: p2[0], p2y: p2[1],
        // Base target coordinates
        targetP0x: p0[0], targetP0y: p0[1],
        targetP1x: p1[0], targetP1y: p1[1],
        targetP2x: p2[0], targetP2y: p2[1],
        // Visual styles
        fill: s.fill,
        stroke: s.stroke,
        opacity: s.opacity,
        // Centroid for physics & explode
        cx: (p0[0] + p1[0] + p2[0]) / 3,
        cy: (p0[1] + p1[1] + p2[1]) / 3
      });
    });

    this.updateAmbientTheme(initialState.theme);
  }

  initEvents() {
    // Parallax mouse movement tracking
    window.addEventListener('mousemove', (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      this.mouse.targetX = (e.clientX - halfW) / halfW;
      this.mouse.targetY = (e.clientY - halfH) / halfH;
    });

    // Touch support for parallax
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        this.mouse.targetX = (touch.clientX - halfW) / halfW;
        this.mouse.targetY = (touch.clientY - halfH) / halfH;
      }
    }, { passive: true });
  }

  transitionTo(nextStateKey) {
    if (!PORTFOLIO_STATES[nextStateKey]) return;
    const targetState = PORTFOLIO_STATES[nextStateKey];
    this.currentStateKey = nextStateKey;

    // Trigger procedural morph sound
    sound.playMorph(1.5);

    // Update ambient glow styling
    this.updateAmbientTheme(targetState.theme);

    // Cancel existing active vertex tweens
    this.activeTweens.forEach(t => t.kill());
    this.activeTweens = [];

    // Anchor Shard target centroid for calculating ripple wave delays
    const anchorShard = targetState.shards[0];
    const anchorCenter = [
      (anchorShard.points[0][0] + anchorShard.points[1][0] + anchorShard.points[2][0]) / 3,
      (anchorShard.points[0][1] + anchorShard.points[1][1] + anchorShard.points[2][1]) / 3
    ];

    // Check accessibility reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 0.35 : 1.45;

    targetState.shards.forEach((targetShard, idx) => {
      const anim = this.animData[idx];
      const polygon = this.shards[idx];

      const [tp0, tp1, tp2] = targetShard.points;
      const targetCx = (tp0[0] + tp1[0] + tp2[0]) / 3;
      const targetCy = (tp0[1] + tp1[1] + tp2[1]) / 3;

      anim.targetP0x = tp0[0]; anim.targetP0y = tp0[1];
      anim.targetP1x = tp1[0]; anim.targetP1y = tp1[1];
      anim.targetP2x = tp2[0]; anim.targetP2y = tp2[1];
      anim.chip = targetShard.chip || null;

      // Ripple stagger: shards farther from anchor move slightly later
      const distFromAnchor = Math.hypot(targetCx - anchorCenter[0], targetCy - anchorCenter[1]);
      const staggerDelay = prefersReducedMotion ? 0 : (idx === 0 ? 0 : 0.04 + (distFromAnchor / 800) * 0.28);

      // Tween vertex coordinates directly with GSAP
      const tween = gsap.to(anim, {
        p0x: tp0[0], p0y: tp0[1],
        p1x: tp1[0], p1y: tp1[1],
        p2x: tp2[0], p2y: tp2[1],
        duration: duration,
        delay: staggerDelay,
        ease: idx === 0 ? 'power3.out' : 'power3.inOut',
        onUpdate: () => {
          anim.cx = (anim.p0x + anim.p1x + anim.p2x) / 3;
          anim.cy = (anim.p0y + anim.p1y + anim.p2y) / 3;
        }
      });
      this.activeTweens.push(tween);

      // Tween colors and opacity
      const colorTween = gsap.to(polygon, {
        fill: targetShard.isAnchor ? 'url(#anchor-gradient)' : targetShard.fill,
        stroke: targetShard.stroke || targetState.theme.primary,
        opacity: targetShard.opacity || 0.85,
        duration: duration * 0.9,
        delay: staggerDelay * 0.7,
        ease: 'power2.out'
      });
      this.activeTweens.push(colorTween);
    });

    // Quantum Anchor Pulse
    if (this.quantumTracker) {
      gsap.fromTo(this.quantumTracker.querySelector('.tracker-pulse-ring'),
        { scale: 0.8, opacity: 1, transformOrigin: 'center' },
        { scale: 1.8, opacity: 0, duration: 1.2, ease: 'power2.out' }
      );
    }
  }

  updateAmbientTheme(theme) {
    if (!theme) return;
    if (this.ambientGlow) {
      this.ambientGlow.style.background = theme.bgGradient || 'radial-gradient(circle, rgba(0,240,255,0.1), transparent)';
    }
    // Update CSS variables on container for synchronous HUD accents
    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    document.documentElement.style.setProperty('--theme-secondary', theme.secondary);
    document.documentElement.style.setProperty('--theme-accent', theme.accent || theme.primary);
    document.documentElement.style.setProperty('--theme-hud-glow', theme.hudGlow);
  }

  setMeshMode(mode) {
    this.meshMode = mode; // 'solid' | 'wireframe' | 'explode'
    sound.playClick();

    if (mode === 'explode') {
      gsap.to(this.explodeFactor, {
        val: 1,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.to(this.explodeLines, { opacity: 0.7, duration: 0.5 });
    } else {
      gsap.to(this.explodeFactor, {
        val: 0,
        duration: 0.7,
        ease: 'power3.inOut'
      });
      gsap.to(this.explodeLines, { opacity: 0, duration: 0.4 });
    }

    // Apply wireframe style changes
    this.shards.forEach((poly, idx) => {
      const isAnchor = idx === 0;
      if (mode === 'wireframe') {
        poly.style.fill = 'rgba(7, 10, 18, 0.25)';
        poly.style.stroke = isAnchor ? '#ffffff' : (this.animData[idx].stroke || '#00f0ff');
        poly.style.strokeWidth = isAnchor ? '2.5' : '1.4';
      } else {
        poly.style.fill = isAnchor ? 'url(#anchor-gradient)' : this.animData[idx].fill;
        poly.style.stroke = this.animData[idx].stroke || '#ffffff';
        poly.style.strokeWidth = isAnchor ? '2.4' : '0.8';
      }
    });
  }

  startRAF() {
    const loop = (timestamp) => {
      this.renderFrame(timestamp);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  renderFrame(time) {
    // 1. Mouse parallax interpolation
    this.tilt.x += (this.mouse.targetY * -9 - this.tilt.x) * 0.08;
    this.tilt.y += (this.mouse.targetX * 12 - this.tilt.y) * 0.08;

    if (this.tiltBox) {
      this.tiltBox.style.transform = `perspective(1000px) rotateX(${this.tilt.x.toFixed(2)}deg) rotateY(${this.tilt.y.toFixed(2)}deg)`;
    }

    const t = time * 0.001;
    const explode = this.explodeFactor.val;
    const centerStageX = 500;
    const centerStageY = 500;

    let explodeLinesSvg = '';

    // 2. Render each of the 28 shards with idle breathing & explode vectors
    for (let i = 0; i < 28; i++) {
      const anim = this.animData[i];
      const poly = this.shards[i];

      // Subtle organic breathing oscillation
      const breathFreq = anim.isAnchor ? 2.4 : 1.6;
      const breathAmp = anim.isAnchor ? 2.6 : 1.8;
      const bx = Math.sin(t * breathFreq + i * 0.45) * breathAmp;
      const by = Math.cos(t * (breathFreq * 0.85) + i * 0.55) * breathAmp;

      // Explode vector calculation: displacement away from center (500, 500)
      const dx = (anim.cx - centerStageX);
      const dy = (anim.cy - centerStageY);
      const dist = Math.hypot(dx, dy) || 1;
      const normX = dx / dist;
      const normY = dy / dist;

      // Explode displacement (scales outward by up to 260px)
      const ex = normX * explode * (140 + (i % 5) * 24);
      const ey = normY * explode * (140 + (i % 5) * 24);

      const renderP0x = anim.p0x + bx + ex;
      const renderP0y = anim.p0y + by + ey;
      const renderP1x = anim.p1x + bx + ex;
      const renderP1y = anim.p1y + by + ey;
      const renderP2x = anim.p2x + bx + ex;
      const renderP2y = anim.p2y + by + ey;

      poly.setAttribute('points', 
        `${renderP0x.toFixed(2)},${renderP0y.toFixed(2)} ` +
        `${renderP1x.toFixed(2)},${renderP1y.toFixed(2)} ` +
        `${renderP2x.toFixed(2)},${renderP2y.toFixed(2)}`
      );

      // If in explode mode, draw blueprint guide vectors
      if (explode > 0.05) {
        const curCx = (renderP0x + renderP1x + renderP2x) / 3;
        const curCy = (renderP0y + renderP1y + renderP2y) / 3;
        explodeLinesSvg += `<line x1="${anim.cx.toFixed(1)}" y1="${anim.cy.toFixed(1)}" x2="${curCx.toFixed(1)}" y2="${curCy.toFixed(1)}" stroke="#00f0ff" stroke-width="0.8" stroke-dasharray="3,3" opacity="${(explode * 0.6).toFixed(2)}" />`;
      }

      // 3. Anchor Tile Tracker Update (Shard 0)
      if (anim.isAnchor && this.quantumTracker) {
        const anchorCx = (renderP0x + renderP1x + renderP2x) / 3;
        const anchorCy = (renderP0y + renderP1y + renderP2y) / 3;

        this.quantumTracker.setAttribute('transform', `translate(${anchorCx.toFixed(1)}, ${anchorCy.toFixed(1)})`);

        if (this.trackerTelemetryText) {
          this.trackerTelemetryText.textContent = `X:${Math.round(anchorCx)} Y:${Math.round(anchorCy)} | COHERENT`;
        }
      }
    }

    if (this.explodeLines && explode > 0.05) {
      this.explodeLines.innerHTML = explodeLinesSvg;
    }
  }

  highlightShardByChip(chipName) {
    this.shards.forEach((poly, idx) => {
      const anim = this.animData[idx];
      if (chipName && anim.chip === chipName) {
        poly.classList.add('chip-active');
        poly.setAttribute('stroke', '#ffffff');
        poly.setAttribute('stroke-width', '2.2');
      } else {
        poly.classList.remove('chip-active');
        if (anim.isAnchor) {
          poly.setAttribute('stroke-width', '2.4');
        } else {
          poly.setAttribute('stroke-width', this.meshMode === 'wireframe' ? '1.4' : '0.8');
        }
      }
    });
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.activeTweens.forEach(t => t.kill());
  }
}
