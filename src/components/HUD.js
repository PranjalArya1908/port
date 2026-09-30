import { PORTFOLIO_STATES, SECTION_KEYS, PROJECT_SUBSTATES } from '../data/states.js';
import { sound } from '../utils/audio.js';

export class HUD {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    this.onNavigate = options.onNavigate || (() => {});
    this.onSubStateChange = options.onSubStateChange || (() => {});
    this.onMeshModeChange = options.onMeshModeChange || (() => {});
    this.onChipHover = options.onChipHover || (() => {});
    this.currentStateKey = 'about';
    this.currentMeshMode = 'solid';

    this.initDOM();
    this.updateContent(this.currentStateKey);
    this.bindEvents();
    this.startClock();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="hud-layer" id="hud-layer">
        <!-- Top Telemetry & Control Bar -->
        <header class="hud-topbar" id="hud-topbar">
          <div class="topbar-left">
            <a href="wolf.html" class="wolf-logo-link" id="wolf-logo-link" title="Open The Wolf Chronicle — Click to Enter" aria-label="Wolf Logo - Click to open dedicated page">
              <svg class="wolf-face-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- 24 Low-Poly Facets Forming the Symmetrical Wolf Face -->
                <polygon points="50,24 38,30 50,42" fill="#38bdf8" opacity="0.9" />
                <polygon points="50,24 62,30 50,42" fill="#0ea5e9" opacity="0.9" />
                <polygon points="22,10 14,38 32,32" fill="#1e293b" opacity="0.85" stroke="#38bdf8" stroke-width="0.7" />
                <polygon points="22,10 32,32 38,30" fill="#334155" opacity="0.9" stroke="#38bdf8" stroke-width="0.7" />
                <polygon points="78,10 86,38 68,32" fill="#0f172a" opacity="0.85" stroke="#38bdf8" stroke-width="0.7" />
                <polygon points="78,10 68,32 62,30" fill="#1e293b" opacity="0.9" stroke="#38bdf8" stroke-width="0.7" />
                <polygon points="14,38 32,32 24,56" fill="#1e293b" opacity="0.8" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="32,32 36,48 24,56" fill="#334155" opacity="0.85" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="86,38 68,32 76,56" fill="#0f172a" opacity="0.8" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="68,32 64,48 76,56" fill="#1e293b" opacity="0.85" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="50,42 36,48 50,58" fill="#0284c7" opacity="0.95" stroke="#00f0ff" stroke-width="0.7" />
                <polygon points="50,42 64,48 50,58" fill="#0369a1" opacity="0.95" stroke="#00f0ff" stroke-width="0.7" />
                <!-- Piercing Wolf Eyes with Radiant Cyan Glow -->
                <polygon points="36,48 42,54 48,50" fill="#00f0ff" stroke="#ffffff" stroke-width="0.8" filter="drop-shadow(0 0 4px #00f0ff)" />
                <polygon points="64,48 58,54 52,50" fill="#00f0ff" stroke="#ffffff" stroke-width="0.8" filter="drop-shadow(0 0 4px #00f0ff)" />
                <!-- Cheeks & Snout -->
                <polygon points="24,56 16,66 32,70" fill="#1e293b" opacity="0.75" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="32,70 36,48 42,66" fill="#334155" opacity="0.85" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="76,56 84,66 68,70" fill="#0f172a" opacity="0.75" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="68,70 64,48 58,66" fill="#1e293b" opacity="0.85" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="50,58 44,68 50,78" fill="#0284c7" opacity="0.9" stroke="#00f0ff" stroke-width="0.7" />
                <polygon points="50,58 56,68 50,78" fill="#0369a1" opacity="0.9" stroke="#00f0ff" stroke-width="0.7" />
                <polygon points="42,66 44,68 42,82" fill="#1e293b" opacity="0.85" stroke="#38bdf8" stroke-width="0.6" />
                <polygon points="58,66 56,68 58,82" fill="#0f172a" opacity="0.85" stroke="#38bdf8" stroke-width="0.6" />
                <!-- Nose & Chin Keystone -->
                <polygon points="50,78 44,84 56,84" fill="#00f0ff" stroke="#ffffff" stroke-width="0.8" />
                <polygon points="44,84 56,84 50,94" fill="#38bdf8" opacity="0.9" stroke="#ffffff" stroke-width="0.8" />
              </svg>
              <div class="wolf-brand-labels">
                <span class="wolf-brand-name">PRANJAL ARYA</span>
                <span class="wolf-badge">WOLF // PORTAL ↗</span>
              </div>
            </a>
            <div class="telemetry-pill">
              <span class="pulse-indicator"></span>
              <span class="telemetry-status">CORE MESH: ONLINE</span>
            </div>
          </div>

          <div class="topbar-center">
            <!-- Mode Switcher -->
            <div class="mode-switcher" role="group" aria-label="Visual Display Mode">
              <button class="mode-btn is-active" data-mode="solid" title="Solid 3D Facets">SOLID</button>
              <button class="mode-btn" data-mode="wireframe" title="Wireframe Blueprint">WIRE</button>
              <button class="mode-btn" data-mode="explode" title="Exploded Architecture View">EXPLODE</button>
            </div>
          </div>

          <div class="topbar-right">
            <!-- Sound Synthesizer Toggle -->
            <button class="hud-icon-btn" id="sound-toggle-btn" aria-label="Toggle procedural audio" title="Audio Synthesizer (Key: S)">
              <span class="audio-icon" id="audio-icon-indicator">🔇</span>
              <span class="audio-text" id="audio-text-indicator">AUDIO: OFF</span>
            </button>

            <!-- Quick Direct Link to Terminal -->
            <button class="hud-action-pill" id="quick-contact-btn">
              <span>TERMINAL</span>
              <span class="pill-arrow">→</span>
            </button>
          </div>
        </header>

        <!-- Right Side Floating Editorial Panel -->
        <aside class="hud-panel-wrapper" id="hud-panel-wrapper">
          <div class="hud-panel" id="hud-panel">
            <!-- Watermark Large Index Number -->
            <div class="panel-watermark" id="panel-watermark">01</div>

            <div class="panel-header">
              <div class="section-meta">
                <span class="section-tag" id="panel-category">GENESIS // ORIGIN</span>
                <span class="section-counter" id="panel-counter">01 // 05</span>
              </div>
              <h1 class="section-title" id="panel-title">THE ORIGIN CORE</h1>
              <p class="section-role" id="panel-role">Creative Technologist & Systems Architect</p>
            </div>

            <!-- Project Sub-State Toggle (Visible when in projects section) -->
            <div class="project-sub-nav" id="project-sub-nav" style="display: none;">
              <button class="sub-state-btn is-active" data-substate="crowdsafe">
                <span class="sub-num">4A</span>
                <span class="sub-label">CROWDSAFE (SIMULATION)</span>
              </button>
              <button class="sub-state-btn" data-substate="credify">
                <span class="sub-num">4B</span>
                <span class="sub-label">CREDIFY (SECURITY AI)</span>
              </button>
            </div>

            <div class="panel-body">
              <blockquote class="section-quote" id="panel-quote">
                "Complexity untangled through geometric clarity and zero-latency architecture."
              </blockquote>

              <p class="section-narrative" id="panel-narrative">
                Operating at the convergence of low-level systems engineering, real-time spatial simulation, and visual computation. Rooted in algorithmic precision, I construct reactive digital architectures where every byte, frame, and coordinate is engineered with deliberate purpose.
              </p>

              <!-- Technical Specifications Grid -->
              <div class="specs-grid" id="panel-specs">
                <!-- Injected dynamically -->
              </div>

              <!-- Tech Stack Tags -->
              <div class="tags-container" id="panel-tags">
                <!-- Injected dynamically -->
              </div>

              <!-- Interactive Contact Frequency Chips (Visible on Contact section) -->
              <div class="contact-chips-container" id="contact-chips-container" style="display: none;">
                <p class="contact-chips-lead">INTERACTIVE FREQUENCY NODES (HOVER OR CLICK TO DISPATCH):</p>
                <div class="contact-chips-grid">
                  <a href="https://github.com/pranjal-arya" target="_blank" rel="noopener noreferrer" class="contact-chip" data-chip="github">
                    <span class="chip-dot"></span>
                    <span class="chip-name">GITHUB</span>
                    <span class="chip-val">@pranjal-arya</span>
                  </a>
                  <a href="https://linkedin.com/in/pranjal-arya" target="_blank" rel="noopener noreferrer" class="contact-chip" data-chip="linkedin">
                    <span class="chip-dot"></span>
                    <span class="chip-name">LINKEDIN</span>
                    <span class="chip-val">in/pranjal-arya</span>
                  </a>
                  <button class="contact-chip" id="copy-email-chip" data-chip="email">
                    <span class="chip-dot"></span>
                    <span class="chip-name">EMAIL DIRECT</span>
                    <span class="chip-val">pranjalarya.dev@gmail.com</span>
                  </button>
                  <button class="contact-chip" id="resume-chip" data-chip="resume">
                    <span class="chip-dot"></span>
                    <span class="chip-name">DOSSIER</span>
                    <span class="chip-val">Curriculum Vitae [PDF]</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Panel Actions Footer -->
            <div class="panel-footer" id="panel-footer">
              <div class="action-buttons-group" id="action-buttons-group">
                <!-- Injected dynamically -->
              </div>
            </div>
          </div>
        </aside>

        <!-- Left / Bottom Discreet Progress Rail -->
        <nav class="hud-rail" aria-label="Portfolio Sections Progress Rail">
          <div class="rail-items">
            <button class="rail-step is-active" data-state="about">
              <span class="step-num">01</span>
              <span class="step-label">ORIGIN</span>
              <span class="step-bar"></span>
            </button>
            <button class="rail-step" data-state="education">
              <span class="step-num">02</span>
              <span class="step-label">FOUNDATION</span>
              <span class="step-bar"></span>
            </button>
            <button class="rail-step" data-state="skills">
              <span class="step-num">03</span>
              <span class="step-label">ENGINE</span>
              <span class="step-bar"></span>
            </button>
            <button class="rail-step" data-state="crowdsafe">
              <span class="step-num">04</span>
              <span class="step-label">SHOWCASE</span>
              <span class="step-bar"></span>
            </button>
            <button class="rail-step" data-state="contact">
              <span class="step-num">05</span>
              <span class="step-label">TERMINAL</span>
              <span class="step-bar"></span>
            </button>
          </div>
        </nav>

        <!-- Bottom Status Bar & Arrow Navigation Buttons -->
        <footer class="hud-footer">
          <div class="footer-left">
            <span class="footer-prompt-key">NAVIGATE: [↑ / ↓] ARROWS or SCROLL</span>
            <span class="footer-divider">|</span>
            <span class="footer-live-clock" id="footer-live-clock">UTC 00:00:00</span>
          </div>

          <div class="footer-center">
            <span class="anchor-status-pill">
              <span class="anchor-radar-dot"></span>
              <span id="anchor-status-text">QUANTUM ANCHOR TILE: LOCKED & TRACKED</span>
            </span>
          </div>

          <div class="footer-right">
            <button class="nav-arrow-btn" id="nav-prev-btn" aria-label="Previous Section (Key: Up)">
              <span class="nav-arrow">↑</span>
              <span class="nav-text">PREV</span>
            </button>
            <button class="nav-arrow-btn" id="nav-next-btn" aria-label="Next Section (Key: Down)">
              <span class="nav-text">NEXT</span>
              <span class="nav-arrow">↓</span>
            </button>
          </div>
        </footer>

        <!-- Toast Feedback Notification -->
        <div class="hud-toast" id="hud-toast">
          <span class="toast-icon">✓</span>
          <span class="toast-message" id="toast-message">Message</span>
        </div>
      </div>
    `;

    // DOM Elements
    this.panelWatermark = this.container.querySelector('#panel-watermark');
    this.panelCategory = this.container.querySelector('#panel-category');
    this.panelCounter = this.container.querySelector('#panel-counter');
    this.panelTitle = this.container.querySelector('#panel-title');
    this.panelRole = this.container.querySelector('#panel-role');
    this.panelQuote = this.container.querySelector('#panel-quote');
    this.panelNarrative = this.container.querySelector('#panel-narrative');
    this.panelSpecs = this.container.querySelector('#panel-specs');
    this.panelTags = this.container.querySelector('#panel-tags');
    this.actionButtonsGroup = this.container.querySelector('#action-buttons-group');
    this.projectSubNav = this.container.querySelector('#project-sub-nav');
    this.contactChipsContainer = this.container.querySelector('#contact-chips-container');
    this.soundToggleBtn = this.container.querySelector('#sound-toggle-btn');
    this.audioIcon = this.container.querySelector('#audio-icon-indicator');
    this.audioText = this.container.querySelector('#audio-text-indicator');
    this.toast = this.container.querySelector('#hud-toast');
    this.toastMessage = this.container.querySelector('#toast-message');
    this.liveClock = this.container.querySelector('#footer-live-clock');
  }

  updateContent(stateKey) {
    const state = PORTFOLIO_STATES[stateKey];
    if (!state) return;
    this.currentStateKey = stateKey;

    // Fade animation on panel content
    const panel = this.container.querySelector('#hud-panel');
    panel.classList.remove('content-enter');
    void panel.offsetWidth; // Trigger reflow
    panel.classList.add('content-enter');

    // Update watermark & metadata
    this.panelWatermark.textContent = state.number;
    this.panelCategory.textContent = state.category;
    this.panelCounter.textContent = `${state.number} // 05`;
    this.panelTitle.textContent = state.title;
    this.panelRole.textContent = state.role;
    this.panelQuote.textContent = `"${state.quote}"`;
    this.panelNarrative.textContent = state.narrative;

    // Update specs grid
    this.panelSpecs.innerHTML = state.specs.map(spec => `
      <div class="spec-card">
        <span class="spec-label">${spec.label}</span>
        <span class="spec-value">${spec.value}</span>
      </div>
    `).join('');

    // Update tags
    this.panelTags.innerHTML = state.tags.map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    // Update action buttons
    this.actionButtonsGroup.innerHTML = state.links.map(link => `
      <button class="action-btn ${link.primary ? 'is-primary' : 'is-secondary'}" 
              data-target-state="${link.targetState || ''}"
              data-target-substate="${link.targetSubState || ''}"
              data-action="${link.action || ''}">
        <span>${link.label}</span>
        <span class="btn-arrow">→</span>
      </button>
    `).join('');

    // Handle Project Sub-Nav Visibility
    const isProjectSection = stateKey === 'crowdsafe' || stateKey === 'credify';
    this.projectSubNav.style.display = isProjectSection ? 'flex' : 'none';
    if (isProjectSection) {
      const btns = this.projectSubNav.querySelectorAll('.sub-state-btn');
      btns.forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.substate === stateKey);
      });
    }

    // Handle Contact Chips Visibility
    const isContact = stateKey === 'contact';
    this.contactChipsContainer.style.display = isContact ? 'block' : 'none';

    // Update Navigation Rail active step
    const railSteps = this.container.querySelectorAll('.rail-step');
    railSteps.forEach(btn => {
      const stepState = btn.dataset.state;
      const isActive = stepState === stateKey || (stepState === 'crowdsafe' && isProjectSection);
      btn.classList.toggle('is-active', isActive);
    });
  }

  bindEvents() {
    // Mode Switcher buttons
    const modeBtns = this.container.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        modeBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        this.currentMeshMode = mode;
        this.onMeshModeChange(mode);
      });
    });

    // Sound toggle
    this.soundToggleBtn.addEventListener('click', () => {
      const enabled = sound.toggle();
      this.audioIcon.textContent = enabled ? '🔊' : '🔇';
      this.audioText.textContent = enabled ? 'AUDIO: ON' : 'AUDIO: OFF';
      this.soundToggleBtn.classList.toggle('is-active', enabled);
      this.showToast(enabled ? 'Audio Synthesizer Engaged' : 'Audio Synthesizer Muted');
    });

    // Quick contact button in topbar
    this.container.querySelector('#quick-contact-btn').addEventListener('click', () => {
      sound.playClick();
      this.onNavigate('contact');
    });

    // Navigation Rail Steps
    const railSteps = this.container.querySelectorAll('.rail-step');
    railSteps.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        this.onNavigate(btn.dataset.state);
      });
    });

    // Project sub-state buttons
    const subBtns = this.container.querySelectorAll('.sub-state-btn');
    subBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        this.onSubStateChange(btn.dataset.substate);
      });
    });

    // Arrow navigation
    this.container.querySelector('#nav-prev-btn').addEventListener('click', () => {
      sound.playClick();
      this.navigateRelative(-1);
    });

    this.container.querySelector('#nav-next-btn').addEventListener('click', () => {
      sound.playClick();
      this.navigateRelative(1);
    });

    // Action buttons in panel footer
    this.actionButtonsGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.action-btn');
      if (!btn) return;
      sound.playClick();

      if (btn.dataset.targetState) {
        this.onNavigate(btn.dataset.targetState);
      } else if (btn.dataset.targetSubstate) {
        this.onSubStateChange(btn.dataset.targetSubstate);
      } else if (btn.dataset.action === 'download-resume') {
        this.downloadResume();
      }
    });

    // Contact chips
    const contactChips = this.container.querySelectorAll('.contact-chip');
    contactChips.forEach(chip => {
      chip.addEventListener('mouseenter', () => {
        sound.playHover();
        this.onChipHover(chip.dataset.chip);
      });
      chip.addEventListener('mouseleave', () => {
        this.onChipHover(null);
      });
    });

    // Copy email chip
    const copyEmailBtn = this.container.querySelector('#copy-email-chip');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        sound.playClick();
        navigator.clipboard.writeText('pranjal19082004@gmail.com').then(() => {
          this.showToast('Copied to Clipboard: pranjal19082004@gmail.com');
        }).catch(() => {
          window.location.href = 'mailto:pranjal19082004@gmail.com';
        });
      });
    }

    // Resume download chip
    const resumeBtn = this.container.querySelector('#resume-chip');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', () => {
        sound.playClick();
        this.downloadResume();
      });
    }
  }

  downloadResume() {
    this.showToast('Generating Dossier: Pranjal_Arya_Resume.txt');
    const blob = new Blob([
      `PRANJAL ARYA
Dehradun, Uttarakhand, India
Email: pranjal19082004@gmail.com | Phone: +91-8077587054
GitHub: https://github.com/PranjalArya1908

PROFESSIONAL SUMMARY:
Computer Science undergraduate (B.Tech CSE, 2027) with hands-on experience in full-stack development, AI/ML, knowledge graphs, and real-time systems. Experienced with MERN, Next.js, FastAPI, Neo4j, Docker, and AI APIs. Seeking Software Development and Full Stack internship opportunities.

EDUCATION:
- VMSB Uttarakhand Technical University, Dehradun, India (2023 – 2027)
  B.Tech in Computer Science and Engineering — GPA: 6.93 / 10
- Scholars Home Senior Secondary School, Dehradun, India (2022, 2020)
  Class XII: 89.60% — Class X: 91.00%

EXPERIENCE:
- Oil and Natural Gas Corporation (ONGC), Dehradun (Jun 2026 – Jul 2026)
  Software Development / AI-ML Intern
  Tech: Python, FastAPI, Neo4j, Docker, GraphRAG
  • Developed knowledge graph-based system for exploration & research data using Python & Neo4j.
  • Built FastAPI backend services for graph-based data retrieval & processing.
  • Containerized services using Docker for reproducible development & deployment.
  • Explored GraphRAG architecture combining knowledge graph retrieval with LLM responses.

TECHNICAL SKILLS:
- Languages: Python, Java, JavaScript, C, C++, SQL
- Web: HTML5, CSS3, React.js, Next.js, Node.js, Express.js
- Databases: MongoDB, MySQL, SQLite, Neo4j, ChromaDB
- AI/ML & APIs: Machine Learning, Google Gemini API, GraphRAG, Twilio API
- DevOps & Tools: Docker, Git, GitHub, LaTeX, Socket.IO

PROJECTS:
1. CrowdSafe — Crowd Risk Assessment System (Mar 2026)
   Tech: JavaScript, Physics Simulation, RAG-based AI Agent
   • Built physics-based crowd simulation engine supporting 500+ agents with repulsion, attraction, and boundary forces.
   • Real-time visualization for crowd density, flow patterns, congestion, and risk zones.
   • Integrated RAG-based AI agent to analyze simulation outputs and generate contextual recommendations.
   • Secured 3rd position in a national-level hackathon.

2. Credify — AI Credit Scoring Platform (Oct 2025 – Nov 2025)
   Tech: FastAPI, React.js, MongoDB, Machine Learning
   • Built ML-based credit scoring platform analyzing financial & behavioral data across 1,000+ records (~78% accuracy).

3. SafeMove — Session Manager (Jun 2024 – Jul 2024)
   Tech: Next.js, Socket.IO, MongoDB, Twilio API
   • Built QR-based session system supporting 100+ users with secure scan-based check-ins and SMS notifications.
   • Developed real-time monitoring dashboard using Socket.IO with automated QR and SMS delivery via Twilio.

ACHIEVEMENTS:
• 3rd Position — National-level Hackathon (CrowdSafe)
• GATE 2026 Qualified — AIR 2245 (Data Science & AI) and AIR 10770 (Computer Science)

LEADERSHIP:
• Core Frontend Developer, Tech Club — VMSB UTU (2023 – Present)
`
    ], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pranjal_Arya_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  navigateRelative(dir) {
    const keys = SECTION_KEYS;
    let curIndex = keys.indexOf(this.currentStateKey);
    if (curIndex === -1) {
      if (this.currentStateKey === 'credify') curIndex = 3;
      else curIndex = 0;
    }
    let nextIndex = curIndex + dir;
    if (nextIndex < 0) nextIndex = keys.length - 1;
    if (nextIndex >= keys.length) nextIndex = 0;
    this.onNavigate(keys[nextIndex]);
  }

  showToast(msg) {
    if (!this.toast) return;
    this.toastMessage.textContent = msg;
    this.toast.classList.add('is-visible');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toast.classList.remove('is-visible');
    }, 3200);
  }

  startClock() {
    const updateTime = () => {
      const now = new Date();
      if (this.liveClock) {
        this.liveClock.textContent = `UTC ${now.toUTCString().slice(17, 25)}`;
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }
}
