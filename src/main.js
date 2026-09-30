import { Stage } from './components/Stage.js';
import { HUD } from './components/HUD.js';
import { PORTFOLIO_STATES, SECTION_KEYS } from './data/states.js';
import { sound } from './utils/audio.js';

class App {
  constructor() {
    this.currentStateKey = 'about';
    this.currentSubProject = 'crowdsafe';
    this.isTransitioning = false;
    this.transitionCooldown = 750; // ms

    this.stageRoot = document.getElementById('stage-root');
    this.hudRoot = document.getElementById('hud-root');

    this.init();
  }

  init() {
    // 1. Initialize Stage (SVG Mesh Renderer & Quantum Tile Engine)
    this.stage = new Stage(this.stageRoot, {
      onShardHover: (idx, chip) => this.handleShardHover(idx, chip),
      onShardClick: (idx, chip, evt) => this.handleShardClick(idx, chip, evt)
    });

    // 2. Initialize HUD (Editorial Panel & Navigation Controller)
    this.hud = new HUD(this.hudRoot, {
      onNavigate: (stateKey) => this.goToState(stateKey),
      onSubStateChange: (subStateKey) => this.goToSubProject(subStateKey),
      onMeshModeChange: (mode) => this.stage.setMeshMode(mode),
      onChipHover: (chipName) => this.stage.highlightShardByChip(chipName)
    });

    // 3. Setup Global Input Listeners (Keyboard, Wheel, Touch)
    this.initNavigationEvents();

    // 4. Update Document Title
    this.updateTitle();

    console.log('%c THE QUANTUM TILE // V28 ONLINE ', 'background: #06070a; color: #00f0ff; font-weight: bold; border: 1px solid #00f0ff; padding: 4px 8px; border-radius: 4px;');
  }

  goToState(stateKey) {
    if (this.isTransitioning && stateKey === this.currentStateKey) return;
    if (!PORTFOLIO_STATES[stateKey]) return;

    this.isTransitioning = true;
    setTimeout(() => {
      this.isTransitioning = false;
    }, this.transitionCooldown);

    // If navigating to projects section, preserve or set project substate
    if (stateKey === 'crowdsafe' || stateKey === 'credify') {
      this.currentSubProject = stateKey;
    }

    this.currentStateKey = stateKey;

    // Trigger Stage morphing and HUD update
    this.stage.transitionTo(stateKey);
    this.hud.updateContent(stateKey);
    this.updateTitle();
  }

  goToSubProject(subStateKey) {
    if (subStateKey !== 'crowdsafe' && subStateKey !== 'credify') return;
    this.currentSubProject = subStateKey;
    this.goToState(subStateKey);
  }

  toggleProjectSubState() {
    const nextSub = this.currentSubProject === 'crowdsafe' ? 'credify' : 'crowdsafe';
    this.goToSubProject(nextSub);
    this.hud.showToast(`Switched Project: ${nextSub === 'crowdsafe' ? '4A CrowdSafe Topology' : '4B Credify Shield'}`);
  }

  navigateRelative(dir) {
    if (this.isTransitioning) return;

    // Section sequences: 0: about, 1: education, 2: skills, 3: projects (crowdsafe/credify), 4: contact
    const sequence = ['about', 'education', 'skills', this.currentSubProject, 'contact'];
    let curIndex = sequence.indexOf(this.currentStateKey);
    if (curIndex === -1) {
      curIndex = 3;
    }

    let nextIndex = curIndex + dir;
    if (nextIndex < 0) nextIndex = sequence.length - 1;
    if (nextIndex >= sequence.length) nextIndex = 0;

    this.goToState(sequence[nextIndex]);
  }

  handleShardHover(idx, chip) {
    const anchorStatusText = document.getElementById('anchor-status-text');
    if (!anchorStatusText) return;

    if (idx === null) {
      anchorStatusText.textContent = 'QUANTUM ANCHOR TILE: LOCKED & TRACKED';
      this.stage.highlightShardByChip(null);
    } else if (idx === 0) {
      anchorStatusText.textContent = 'QUANTUM TILE #00 [PRIMARY HARMONIC ANCHOR ACTIVE]';
    } else if (chip) {
      anchorStatusText.textContent = `SHARD #${idx} // FREQUENCY NODE: [${chip.toUpperCase()}]`;
      this.stage.highlightShardByChip(chip);
    } else {
      anchorStatusText.textContent = `SHARD #${idx} // FACET DELAUNAY VECTOR COORDINATE`;
    }
  }

  handleShardClick(idx, chip, evt) {
    if (chip === 'github') {
      window.open('https://github.com/PranjalArya1908', '_blank', 'noopener,noreferrer');
      this.hud.showToast('Navigating to GitHub: @PranjalArya1908');
    } else if (chip === 'linkedin') {
      window.open('https://github.com/PranjalArya1908', '_blank', 'noopener,noreferrer');
      this.hud.showToast('Navigating to GitHub Profile');
    } else if (chip === 'email') {
      navigator.clipboard.writeText('pranjal19082004@gmail.com').then(() => {
        this.hud.showToast('Copied: pranjal19082004@gmail.com');
      }).catch(() => {
        window.location.href = 'mailto:pranjal19082004@gmail.com';
      });
    } else if (chip === 'resume') {
      this.hud.downloadResume();
    } else if (idx === 0) {
      sound.playAnchorPulse();
      this.hud.showToast('Quantum Anchor Resonating: 523.25Hz harmonic coherence');
    }
  }

  initNavigationEvents() {
    // 1. Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          sound.playClick();
          this.navigateRelative(1);
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          sound.playClick();
          this.navigateRelative(-1);
          break;
        case ' ': // Spacebar
          e.preventDefault();
          if (this.currentStateKey === 'crowdsafe' || this.currentStateKey === 'credify') {
            this.toggleProjectSubState();
          } else {
            this.navigateRelative(1);
          }
          break;
        case '1':
          this.goToState('about');
          break;
        case '2':
          this.goToState('education');
          break;
        case '3':
          this.goToState('skills');
          break;
        case '4':
          this.goToState(this.currentSubProject);
          break;
        case '5':
          this.goToState('contact');
          break;
        case 'm':
        case 'M':
          const modes = ['solid', 'wireframe', 'explode'];
          const nextMode = modes[(modes.indexOf(this.stage.meshMode) + 1) % modes.length];
          const modeBtn = document.querySelector(`.mode-btn[data-mode="${nextMode}"]`);
          if (modeBtn) modeBtn.click();
          break;
        case 's':
        case 'S':
          const soundBtn = document.getElementById('sound-toggle-btn');
          if (soundBtn) soundBtn.click();
          break;
      }
    });

    // 2. Mouse Wheel Navigation (Debounced)
    let wheelAccumulator = 0;
    let wheelTimer = null;

    window.addEventListener('wheel', (e) => {
      const panel = document.getElementById('hud-panel');
      if (panel && panel.contains(e.target) && (panel.scrollHeight > panel.clientHeight)) {
        return;
      }

      wheelAccumulator += e.deltaY;
      clearTimeout(wheelTimer);

      if (Math.abs(wheelAccumulator) > 45 && !this.isTransitioning) {
        sound.playClick();
        this.navigateRelative(wheelAccumulator > 0 ? 1 : -1);
        wheelAccumulator = 0;
      }

      wheelTimer = setTimeout(() => {
        wheelAccumulator = 0;
      }, 300);
    }, { passive: true });

    // 3. Touch Gestures (Swipe Detection)
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(deltaY) > 55 && Math.abs(deltaY) > Math.abs(deltaX)) {
          sound.playClick();
          this.navigateRelative(deltaY < 0 ? 1 : -1);
        } else if (Math.abs(deltaX) > 65) {
          sound.playClick();
          this.navigateRelative(deltaX < 0 ? 1 : -1);
        }
      }
    }, { passive: true });
  }

  updateTitle() {
    const state = PORTFOLIO_STATES[this.currentStateKey];
    if (state) {
      document.title = `${state.number} // ${state.title} — Pranjal Arya | Quantum Tile`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
