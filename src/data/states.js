/**
 * PORTFOLIO_STATES
 * Complete data-driven state definitions for "Species in Pieces" shape-shifting portfolio.
 * 
 * 28 Polygons defined in normalized 1000x1000 SVG coordinates.
 * Shard #0 is the signature "Quantum Tile" (Anchor Shard) that continuously transitions
 * and is tracked by the real-time HUD reticle throughout all states.
 */

export const PORTFOLIO_STATES = {
  about: {
    id: 'about',
    index: 0,
    number: '01',
    category: 'GENESIS // ORIGIN',
    title: 'THE ORIGIN CORE',
    role: 'Creative Technologist & Systems Architect',
    leadName: 'Pranjal Arya',
    narrative: `Operating at the bleeding edge of low-level systems engineering, real-time spatial simulation, and visual computation. Rooted in algorithmic precision, I construct reactive digital architectures where every byte, frame, and coordinate is engineered with deliberate purpose.`,
    quote: 'Complexity untangled through geometric clarity and zero-latency architecture.',
    specs: [
      { label: 'DISCIPLINE', value: 'Systems & Visual Computing' },
      { label: 'PHILOSOPHY', value: 'Zero-Latency Engineering' },
      { label: 'CORE MESH', value: '28-Shard Delaunay Cluster' },
      { label: 'COHERENCE', value: '100% Deterministic' }
    ],
    tags: ['Systems Architecture', 'Spatial Computing', 'Algorithmic Optimization', 'Low-Poly WebGL', 'High Concurrency'],
    links: [
      { label: 'EXPLORE FOUNDATIONS', targetState: 'education', primary: true },
      { label: 'TERMINAL DISPATCH', targetState: 'contact', primary: false }
    ],
    theme: {
      primary: '#00f0ff',
      secondary: '#7928ca',
      accent: '#00df89',
      bgBase: '#07080c',
      bgGradient: 'radial-gradient(ellipse at 35% 50%, rgba(0, 240, 255, 0.12), rgba(121, 40, 202, 0.06) 45%, #06070a 85%)',
      hudGlow: 'rgba(0, 240, 255, 0.35)',
      ambientLight: '#00f0ff'
    },
    // 28 Triangles for the Polyhedral Origin Gem
    shards: [
      // Shard 0: THE QUANTUM TILE (Central Keystone Apex)
      { id: 0, isAnchor: true, points: [[500, 360], [430, 470], [570, 470]], fill: '#00f0ff', stroke: '#ffffff', opacity: 0.95 },
      // Shards 1-6: Inner Crown Ring
      { id: 1, points: [[500, 360], [430, 470], [390, 370]], fill: '#00c8e0', stroke: '#00f0ff', opacity: 0.85 },
      { id: 2, points: [[500, 360], [390, 370], [500, 270]], fill: '#38bdf8', stroke: '#00f0ff', opacity: 0.9 },
      { id: 3, points: [[500, 360], [500, 270], [610, 370]], fill: '#0284c7', stroke: '#00f0ff', opacity: 0.88 },
      { id: 4, points: [[500, 360], [570, 470], [610, 370]], fill: '#0369a1', stroke: '#00f0ff', opacity: 0.82 },
      { id: 5, points: [[430, 470], [570, 470], [500, 570]], fill: '#7928ca', stroke: '#a855f7', opacity: 0.9 },
      { id: 6, points: [[430, 470], [340, 480], [390, 370]], fill: '#0e7490', stroke: '#00c8e0', opacity: 0.75 },
      // Shards 7-14: Mid-tier Girdle Facets
      { id: 7, points: [[570, 470], [660, 480], [610, 370]], fill: '#4338ca', stroke: '#6366f1', opacity: 0.75 },
      { id: 8, points: [[430, 470], [340, 480], [400, 580]], fill: '#6b21a8', stroke: '#9333ea', opacity: 0.78 },
      { id: 9, points: [[430, 470], [500, 570], [400, 580]], fill: '#9333ea', stroke: '#c084fc', opacity: 0.85 },
      { id: 10, points: [[570, 470], [500, 570], [600, 580]], fill: '#4c1d95', stroke: '#7c3aed', opacity: 0.85 },
      { id: 11, points: [[570, 470], [660, 480], [600, 580]], fill: '#3b0764', stroke: '#6b21a8', opacity: 0.78 },
      { id: 12, points: [[340, 480], [270, 430], [390, 370]], fill: '#164e63', stroke: '#06b6d4', opacity: 0.65 },
      { id: 13, points: [[660, 480], [730, 430], [610, 370]], fill: '#312e81', stroke: '#4f46e5', opacity: 0.65 },
      { id: 14, points: [[500, 270], [430, 220], [570, 220]], fill: '#7dd3fc', stroke: '#ffffff', opacity: 0.9 },
      // Shards 15-22: Lower Pavilion & Diamond Spire
      { id: 15, points: [[340, 480], [400, 580], [330, 600]], fill: '#581c87', stroke: '#7e22ce', opacity: 0.7 },
      { id: 16, points: [[660, 480], [600, 580], [670, 600]], fill: '#2e1065', stroke: '#581c87', opacity: 0.7 },
      { id: 17, points: [[500, 570], [400, 580], [500, 700]], fill: '#c026d3', stroke: '#f0abfc', opacity: 0.85 },
      { id: 18, points: [[500, 570], [600, 580], [500, 700]], fill: '#a21caf', stroke: '#e879f9', opacity: 0.82 },
      { id: 19, points: [[400, 580], [330, 600], [420, 680]], fill: '#701a75', stroke: '#a21caf', opacity: 0.65 },
      { id: 20, points: [[600, 580], [670, 600], [580, 680]], fill: '#4a044e', stroke: '#701a75', opacity: 0.65 },
      { id: 21, points: [[400, 580], [420, 680], [500, 700]], fill: '#db2777', stroke: '#f472b6', opacity: 0.75 },
      { id: 22, points: [[600, 580], [580, 680], [500, 700]], fill: '#9d174d', stroke: '#db2777', opacity: 0.72 },
      // Shards 23-27: Orbital Satellite Harmonic Fragments
      { id: 23, points: [[280, 300], [320, 260], [350, 320]], fill: '#00f0ff', stroke: '#ffffff', opacity: 0.5 },
      { id: 24, points: [[720, 300], [680, 260], [650, 320]], fill: '#38bdf8', stroke: '#ffffff', opacity: 0.5 },
      { id: 25, points: [[220, 520], [260, 480], [270, 550]], fill: '#a855f7', stroke: '#c084fc', opacity: 0.45 },
      { id: 26, points: [[780, 520], [740, 480], [730, 550]], fill: '#ec4899', stroke: '#f472b6', opacity: 0.45 },
      { id: 27, points: [[500, 730], [460, 780], [540, 780]], fill: '#00df89', stroke: '#5eead4', opacity: 0.6 }
    ]
  },

  education: {
    id: 'education',
    index: 1,
    number: '02',
    category: 'ACADEMIC // FOUNDATION',
    title: 'THE ARCHITECTONIC PILLAR',
    role: 'Computer Science & Engineering',
    leadName: 'Academic Pillars & Milestones',
    narrative: `Forged through deep immersion in theoretical computation and hardware abstraction. From algorithmic graph theory to operating system microkernels, each layer of academic inquiry constructed an unshakeable foundation for building resilient, high-throughput software systems.`,
    quote: 'Foundational principles endure while frameworks cycle. Master the bedrock.',
    specs: [
      { label: 'DEGREE', value: 'B.Tech CSE (2023–2027) — VMSB UTU' },
      { label: 'ACADEMIC GPA', value: '6.93 / 10 · Class XII: 89.60%' },
      { label: 'GATE 2026', value: 'AIR 2245 (DA) · AIR 10770 (CS)' },
      { label: 'HACKATHON', value: '3rd Position National Hackathon' }
    ],
    tags: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Architecture', 'Distributed Systems', 'Cryptography'],
    links: [
      { label: 'INSPECT SKILLS ENGINE', targetState: 'skills', primary: true },
      { label: 'PREVIOUS: ORIGIN', targetState: 'about', primary: false }
    ],
    theme: {
      primary: '#ffb703',
      secondary: '#fb8500',
      accent: '#ffe494',
      bgBase: '#08080a',
      bgGradient: 'radial-gradient(ellipse at 35% 50%, rgba(255, 183, 3, 0.12), rgba(251, 133, 0, 0.05) 50%, #060608 85%)',
      hudGlow: 'rgba(255, 183, 3, 0.35)',
      ambientLight: '#ffb703'
    },
    // 28 Triangles morph into an Isometric Stepped Pillar
    shards: [
      // Shard 0: THE QUANTUM TILE (Apex Capstone / Golden Crest)
      { id: 0, isAnchor: true, points: [[500, 180], [440, 260], [560, 260]], fill: '#ffb703', stroke: '#ffffff', opacity: 0.98 },
      // Shards 1-6: Capital Pediment
      { id: 1, points: [[440, 260], [500, 310], [500, 260]], fill: '#fb8500', stroke: '#ffb703', opacity: 0.9 },
      { id: 2, points: [[560, 260], [500, 310], [500, 260]], fill: '#d97706', stroke: '#ffb703', opacity: 0.85 },
      { id: 3, points: [[440, 260], [390, 280], [450, 330]], fill: '#b45309', stroke: '#f59e0b', opacity: 0.75 },
      { id: 4, points: [[560, 260], [610, 280], [550, 330]], fill: '#92400e', stroke: '#f59e0b', opacity: 0.7 },
      { id: 5, points: [[440, 260], [500, 310], [450, 330]], fill: '#f59e0b', stroke: '#fbbf24', opacity: 0.88 },
      { id: 6, points: [[560, 260], [500, 310], [550, 330]], fill: '#b45309', stroke: '#fbbf24', opacity: 0.82 },
      // Shards 7-14: Column Shaft Flutes
      { id: 7, points: [[450, 330], [500, 360], [450, 450]], fill: '#fbbf24', stroke: '#fde68a', opacity: 0.85 },
      { id: 8, points: [[500, 360], [450, 450], [500, 470]], fill: '#f59e0b', stroke: '#fde68a', opacity: 0.88 },
      { id: 9, points: [[500, 360], [550, 330], [550, 450]], fill: '#b45309', stroke: '#d97706', opacity: 0.8 },
      { id: 10, points: [[500, 360], [550, 450], [500, 470]], fill: '#92400e', stroke: '#d97706', opacity: 0.82 },
      { id: 11, points: [[450, 330], [400, 370], [400, 460]], fill: '#78350f', stroke: '#b45309', opacity: 0.7 },
      { id: 12, points: [[450, 330], [450, 450], [400, 460]], fill: '#92400e', stroke: '#d97706', opacity: 0.72 },
      { id: 13, points: [[550, 330], [600, 370], [600, 460]], fill: '#451a03', stroke: '#78350f', opacity: 0.65 },
      { id: 14, points: [[550, 330], [550, 450], [600, 460]], fill: '#78350f', stroke: '#92400e', opacity: 0.68 },
      // Shards 15-22: Lower Tier & Plinth Step
      { id: 15, points: [[400, 460], [500, 470], [420, 580]], fill: '#f59e0b', stroke: '#fbbf24', opacity: 0.8 },
      { id: 16, points: [[500, 470], [420, 580], [500, 600]], fill: '#d97706', stroke: '#fbbf24', opacity: 0.85 },
      { id: 17, points: [[600, 460], [500, 470], [580, 580]], fill: '#78350f', stroke: '#b45309', opacity: 0.75 },
      { id: 18, points: [[500, 470], [580, 580], [500, 600]], fill: '#92400e', stroke: '#b45309', opacity: 0.78 },
      { id: 19, points: [[420, 580], [340, 630], [440, 680]], fill: '#b45309', stroke: '#d97706', opacity: 0.72 },
      { id: 20, points: [[420, 580], [500, 600], [440, 680]], fill: '#f59e0b', stroke: '#fcd34d', opacity: 0.85 },
      { id: 21, points: [[580, 580], [660, 630], [560, 680]], fill: '#451a03', stroke: '#78350f', opacity: 0.65 },
      { id: 22, points: [[580, 580], [500, 600], [560, 680]], fill: '#78350f', stroke: '#92400e', opacity: 0.75 },
      // Shards 23-27: Foundation Plinth & Cornerstones
      { id: 23, points: [[340, 630], [280, 710], [400, 750]], fill: '#92400e', stroke: '#b45309', opacity: 0.7 },
      { id: 24, points: [[440, 680], [560, 680], [500, 770]], fill: '#fbbf24', stroke: '#fef08a', opacity: 0.9 },
      { id: 25, points: [[660, 630], [720, 710], [600, 750]], fill: '#331603', stroke: '#5e2507', opacity: 0.65 },
      { id: 26, points: [[280, 710], [400, 750], [350, 790]], fill: '#d97706', stroke: '#f59e0b', opacity: 0.6 },
      { id: 27, points: [[720, 710], [600, 750], [650, 790]], fill: '#78350f', stroke: '#92400e', opacity: 0.6 }
    ]
  },

  skills: {
    id: 'skills',
    index: 2,
    number: '03',
    category: 'CAPABILITIES // MATRIX',
    title: 'THE ENGINE MATRIX',
    role: 'Computational Core & Distributed Silicon',
    leadName: 'Technical Proficiencies',
    narrative: `A high-performance technical stack organized into modular compute domains. Designed for deterministic memory safety, sub-millisecond execution, and scale across distributed hardware nodes.`,
    quote: 'Code is hardware in abstract. Optimize for cache lines, branch predictors, and network physics.',
    specs: [
      { label: 'SYSTEMS', value: 'C++, Rust, Go, POSIX Threads' },
      { label: 'INTERFACES', value: 'WebGL, WebAssembly, TypeScript' },
      { label: 'DISTRIBUTED', value: 'Kafka, Redis Cluster, gRPC, Docker' },
      { label: 'MATHEMATICS', value: 'Linear Algebra, Spatial Vectors, ODEs' }
    ],
    tags: ['C++', 'Rust', 'TypeScript', 'WebAssembly', 'WebGL', 'Docker', 'Kubernetes', 'Redis', 'PyTorch'],
    links: [
      { label: 'LAUNCH PROJECTS', targetState: 'crowdsafe', primary: true },
      { label: 'PREVIOUS: EDUCATION', targetState: 'education', primary: false }
    ],
    theme: {
      primary: '#00df89',
      secondary: '#00f5d4',
      accent: '#bbf7d0',
      bgBase: '#050b08',
      bgGradient: 'radial-gradient(ellipse at 35% 50%, rgba(0, 223, 137, 0.12), rgba(0, 245, 212, 0.05) 50%, #040806 85%)',
      hudGlow: 'rgba(0, 223, 137, 0.35)',
      ambientLight: '#00df89'
    },
    // 28 Triangles morph into a Microprocessor Silicon Core with Bus Channels
    shards: [
      // Shard 0: THE QUANTUM TILE (Central Arithmetic Logic Unit ALU Die)
      { id: 0, isAnchor: true, points: [[500, 410], [420, 500], [500, 590]], fill: '#00df89', stroke: '#ffffff', opacity: 0.98 },
      // Shards 1-6: Dual Core & Immediate Cache
      { id: 1, points: [[500, 410], [580, 500], [500, 590]], fill: '#00c375', stroke: '#5eead4', opacity: 0.92 },
      { id: 2, points: [[500, 410], [420, 340], [580, 340]], fill: '#10b981', stroke: '#34d399', opacity: 0.88 },
      { id: 3, points: [[420, 500], [340, 420], [340, 580]], fill: '#059669', stroke: '#10b981', opacity: 0.85 },
      { id: 4, points: [[500, 590], [420, 660], [580, 660]], fill: '#047857', stroke: '#059669', opacity: 0.88 },
      { id: 5, points: [[580, 500], [660, 420], [660, 580]], fill: '#065f46', stroke: '#047857', opacity: 0.82 },
      { id: 6, points: [[420, 340], [420, 500], [500, 410]], fill: '#34d399', stroke: '#6ee7b7', opacity: 0.85 },
      // Shards 7-14: Execution Units & Bus Interconnects
      { id: 7, points: [[580, 340], [580, 500], [500, 410]], fill: '#0d9488', stroke: '#2dd4bf', opacity: 0.8 },
      { id: 8, points: [[420, 660], [420, 500], [500, 590]], fill: '#0f766e', stroke: '#14b8a6', opacity: 0.8 },
      { id: 9, points: [[580, 660], [580, 500], [500, 590]], fill: '#115e59', stroke: '#0d9488', opacity: 0.78 },
      { id: 10, points: [[340, 340], [420, 340], [340, 420]], fill: '#00f5d4', stroke: '#ffffff', opacity: 0.75 },
      { id: 11, points: [[660, 340], [580, 340], [660, 420]], fill: '#14b8a6', stroke: '#2dd4bf', opacity: 0.75 },
      { id: 12, points: [[340, 660], [420, 660], [340, 580]], fill: '#064e3b', stroke: '#059669', opacity: 0.7 },
      { id: 13, points: [[660, 660], [580, 660], [660, 580]], fill: '#022c22', stroke: '#065f46', opacity: 0.7 },
      { id: 14, points: [[420, 340], [580, 340], [500, 260]], fill: '#6ee7b7', stroke: '#a7f3d0', opacity: 0.88 },
      // Shards 15-22: Outer Die Package & Memory Controller Pins
      { id: 15, points: [[340, 340], [500, 260], [340, 240]], fill: '#047857', stroke: '#10b981', opacity: 0.65 },
      { id: 16, points: [[660, 340], [500, 260], [660, 240]], fill: '#065f46', stroke: '#047857', opacity: 0.65 },
      { id: 17, points: [[340, 340], [240, 340], [240, 500]], fill: '#022c22', stroke: '#065f46', opacity: 0.6 },
      { id: 18, points: [[340, 660], [240, 660], [240, 500]], fill: '#064e3b', stroke: '#059669', opacity: 0.6 },
      { id: 19, points: [[660, 340], [760, 340], [760, 500]], fill: '#134e4a', stroke: '#0f766e', opacity: 0.6 },
      { id: 20, points: [[660, 660], [760, 660], [760, 500]], fill: '#042f2e', stroke: '#115e59', opacity: 0.6 },
      { id: 21, points: [[340, 660], [500, 740], [340, 760]], fill: '#064e3b', stroke: '#047857', opacity: 0.65 },
      { id: 22, points: [[660, 660], [500, 740], [660, 760]], fill: '#022c22', stroke: '#064e3b', opacity: 0.65 },
      // Shards 23-27: External PCIe Lanes & Power Rails
      { id: 23, points: [[500, 260], [440, 190], [560, 190]], fill: '#00df89', stroke: '#5eead4', opacity: 0.7 },
      { id: 24, points: [[240, 500], [170, 440], [170, 560]], fill: '#00f5d4', stroke: '#ffffff', opacity: 0.5 },
      { id: 25, points: [[760, 500], [830, 440], [830, 560]], fill: '#14b8a6', stroke: '#5eead4', opacity: 0.5 },
      { id: 26, points: [[500, 740], [440, 810], [560, 810]], fill: '#059669', stroke: '#34d399', opacity: 0.7 },
      { id: 27, points: [[420, 660], [580, 660], [500, 740]], fill: '#10b981', stroke: '#6ee7b7', opacity: 0.82 }
    ]
  },

  crowdsafe: {
    id: 'crowdsafe',
    sectionId: 'projects',
    subStateId: 'crowdsafe',
    index: 3,
    number: '04A',
    category: 'SIMULATION // SPATIAL AI',
    title: 'CROWDSAFE TOPOLOGY',
    role: 'Predictive Spatial Safety Engine',
    leadName: 'CrowdSafe — Autonomous Simulation Platform',
    narrative: `A high-concurrency predictive simulation platform designed to forecast mass transit crowd hazards and bottleneck dynamics before physical accumulation occurs. Utilizing vector field divergence, fluid-dynamic crowd models, and GPU-accelerated spatial hashing, it models 50,000+ real-time autonomous agents.`,
    quote: 'Predictive evacuation topologies engineered through real-time vector calculus.',
    specs: [
      { label: 'SIMULATION AGENTS', value: '50,000+ Concurrent Entities' },
      { label: 'BOTTLENECK DETECTION', value: '< 14ms Divergence Compute' },
      { label: 'PREDICTION HORIZON', value: '15 Minutes Pre-Stall' },
      { label: 'ACCURACY', value: '99.4% Critical Vector Match' }
    ],
    tags: ['C++ Simulation', 'WebAssembly', 'Spatial Hashing', 'WebGL Heatmap', 'Vector Fields', 'WebSockets'],
    links: [
      { label: 'TOGGLE CREDIFY (4B)', targetSubState: 'credify', primary: true, isToggle: true },
      { label: 'NEXT: CONTACT TERMINAL', targetState: 'contact', primary: false }
    ],
    theme: {
      primary: '#ff5722',
      secondary: '#ff0055',
      accent: '#ff9100',
      bgBase: '#0c0709',
      bgGradient: 'radial-gradient(ellipse at 35% 50%, rgba(255, 87, 34, 0.14), rgba(255, 0, 85, 0.06) 50%, #070406 85%)',
      hudGlow: 'rgba(255, 87, 34, 0.38)',
      ambientLight: '#ff5722'
    },
    // 28 Triangles morph into a Spatial Crowd-Flow Vector Field & Choke Point Lattice
    shards: [
      // Shard 0: THE QUANTUM TILE (The High-Density Choke Point / Hazard Epicenter)
      { id: 0, isAnchor: true, points: [[500, 430], [440, 510], [560, 510]], fill: '#ff0055', stroke: '#ffffff', opacity: 0.98 },
      // Shards 1-6: Inflow Funnel Confluence
      { id: 1, points: [[500, 430], [440, 510], [380, 420]], fill: '#ff3d00', stroke: '#ff9100', opacity: 0.9 },
      { id: 2, points: [[500, 430], [560, 510], [620, 420]], fill: '#d50000', stroke: '#ff1744', opacity: 0.88 },
      { id: 3, points: [[500, 430], [380, 420], [500, 330]], fill: '#ff6d00', stroke: '#ffd180', opacity: 0.85 },
      { id: 4, points: [[500, 430], [620, 420], [500, 330]], fill: '#ff5722', stroke: '#ffab91', opacity: 0.85 },
      { id: 5, points: [[440, 510], [560, 510], [500, 590]], fill: '#c51162', stroke: '#ff4081', opacity: 0.92 },
      { id: 6, points: [[440, 510], [500, 590], [410, 610]], fill: '#f50057', stroke: '#ff80ab', opacity: 0.85 },
      // Shards 7-14: Divergence Channels & Upstream Tributaries
      { id: 7, points: [[560, 510], [500, 590], [590, 610]], fill: '#880e4f', stroke: '#c51162', opacity: 0.82 },
      { id: 8, points: [[380, 420], [500, 330], [330, 300]], fill: '#ff9100', stroke: '#ffe57f', opacity: 0.78 },
      { id: 9, points: [[380, 420], [280, 410], [330, 300]], fill: '#ffab00', stroke: '#ffd54f', opacity: 0.72 },
      { id: 10, points: [[620, 420], [500, 330], [670, 300]], fill: '#e64a19', stroke: '#ff8a65', opacity: 0.78 },
      { id: 11, points: [[620, 420], [720, 410], [670, 300]], fill: '#bf360c', stroke: '#ff7043', opacity: 0.72 },
      { id: 12, points: [[500, 330], [420, 230], [580, 230]], fill: '#ffab40', stroke: '#ffffff', opacity: 0.85 },
      { id: 13, points: [[500, 330], [330, 300], [420, 230]], fill: '#ff9800', stroke: '#ffcc80', opacity: 0.7 },
      { id: 14, points: [[500, 330], [670, 300], [580, 230]], fill: '#f4511e', stroke: '#ff8a65', opacity: 0.7 },
      // Shards 15-22: Outflow Vectors & Pressure Dispersion
      { id: 15, points: [[280, 410], [440, 510], [330, 540]], fill: '#dd2c00', stroke: '#ff6e40', opacity: 0.75 },
      { id: 16, points: [[720, 410], [560, 510], [670, 540]], fill: '#ad1457', stroke: '#e91e63', opacity: 0.72 },
      { id: 17, points: [[410, 610], [330, 540], [310, 650]], fill: '#b71c1c', stroke: '#ef5350', opacity: 0.7 },
      { id: 18, points: [[410, 610], [500, 590], [430, 710]], fill: '#e91e63', stroke: '#f48fb1', opacity: 0.8 },
      { id: 19, points: [[590, 610], [670, 540], [690, 650]], fill: '#4a148c', stroke: '#8e24aa', opacity: 0.65 },
      { id: 20, points: [[590, 610], [500, 590], [570, 710]], fill: '#9c27b0', stroke: '#ce93d8', opacity: 0.78 },
      { id: 21, points: [[430, 710], [500, 590], [500, 740]], fill: '#ec407a', stroke: '#f8bbd0', opacity: 0.82 },
      { id: 22, points: [[570, 710], [500, 590], [500, 740]], fill: '#ab47bc', stroke: '#e1bee7', opacity: 0.78 },
      // Shards 23-27: Far Field Sensors & Evacuation Gates
      { id: 23, points: [[420, 230], [580, 230], [500, 160]], fill: '#ffd600', stroke: '#ffffff', opacity: 0.9 },
      { id: 24, points: [[280, 410], [310, 650], [210, 530]], fill: '#ff5252', stroke: '#ff8a80', opacity: 0.55 },
      { id: 25, points: [[720, 410], [690, 650], [790, 530]], fill: '#7b1fa2', stroke: '#ba68c8', opacity: 0.55 },
      { id: 26, points: [[310, 650], [430, 710], [370, 800]], fill: '#d81b60', stroke: '#ff4081', opacity: 0.6 },
      { id: 27, points: [[690, 650], [570, 710], [630, 800]], fill: '#6a1b9a', stroke: '#ab47bc', opacity: 0.6 }
    ]
  },

  credify: {
    id: 'credify',
    sectionId: 'projects',
    subStateId: 'credify',
    index: 3,
    number: '04B',
    category: 'FINTECH // SECURITY AI',
    title: 'CREDIFY SHIELD',
    role: 'Automated Fraud Resilience Engine',
    leadName: 'Credify — Autonomous Income Verification',
    narrative: `A resilient digital income verification and anti-fraud platform. Built to eliminate manual underwriting delays and intercept synthetic identity schemes using zero-knowledge proof pipelines, bank-grade cryptographic ledgers, and deep anomaly graph networks.`,
    quote: 'Trust established through cryptographic mathematics, not paper trails.',
    specs: [
      { label: 'FRAUD INTERCEPTION', value: '99.8% Synthetic Catch Rate' },
      { label: 'DECISION LATENCY', value: '< 85ms P99 Inference' },
      { label: 'DATA INTEGRITY', value: 'Zero-Knowledge Attestation' },
      { label: 'STREAM TRIANGULATION', value: '14+ Payroll APIs Unified' }
    ],
    tags: ['Zero-Knowledge Proofs', 'PyTorch Anomaly Net', 'FastAPI', 'PostgreSQL', 'Cryptographic Ledgers', 'Docker'],
    links: [
      { label: 'TOGGLE CROWDSAFE (4A)', targetSubState: 'crowdsafe', primary: true, isToggle: true },
      { label: 'NEXT: CONTACT TERMINAL', targetState: 'contact', primary: false }
    ],
    theme: {
      primary: '#38bdf8',
      secondary: '#2563eb',
      accent: '#818cf8',
      bgBase: '#070914',
      bgGradient: 'radial-gradient(ellipse at 35% 50%, rgba(56, 189, 248, 0.14), rgba(37, 99, 235, 0.06) 50%, #04050d 85%)',
      hudGlow: 'rgba(56, 189, 248, 0.38)',
      ambientLight: '#38bdf8'
    },
    // 28 Triangles morph into a Cybernetic Security Shield & Biometric Vault
    shards: [
      // Shard 0: THE QUANTUM TILE (The Central Biometric Lock Core / Cryptographic Keel)
      { id: 0, isAnchor: true, points: [[500, 380], [430, 480], [500, 560]], fill: '#38bdf8', stroke: '#ffffff', opacity: 0.98 },
      // Shards 1-6: Inner Vault Core Plate
      { id: 1, points: [[500, 380], [570, 480], [500, 560]], fill: '#0ea5e9', stroke: '#7dd3fc', opacity: 0.92 },
      { id: 2, points: [[500, 380], [430, 300], [570, 300]], fill: '#2563eb', stroke: '#60a5fa', opacity: 0.9 },
      { id: 3, points: [[500, 380], [430, 300], [430, 480]], fill: '#1d4ed8', stroke: '#3b82f6', opacity: 0.85 },
      { id: 4, points: [[500, 380], [570, 300], [570, 480]], fill: '#1e40af', stroke: '#2563eb', opacity: 0.85 },
      { id: 5, points: [[430, 480], [500, 560], [450, 640]], fill: '#4f46e5', stroke: '#818cf8', opacity: 0.88 },
      { id: 6, points: [[570, 480], [500, 560], [550, 640]], fill: '#4338ca', stroke: '#6366f1', opacity: 0.88 },
      // Shards 7-14: Upper Shield Crest & Reinforced Bevels
      { id: 7, points: [[430, 300], [570, 300], [500, 210]], fill: '#0284c7', stroke: '#38bdf8', opacity: 0.92 },
      { id: 8, points: [[430, 300], [500, 210], [330, 240]], fill: '#0369a1', stroke: '#0284c7', opacity: 0.8 },
      { id: 9, points: [[570, 300], [500, 210], [670, 240]], fill: '#075985', stroke: '#0369a1', opacity: 0.78 },
      { id: 10, points: [[430, 300], [330, 240], [340, 380]], fill: '#1e3a8a', stroke: '#3b82f6', opacity: 0.75 },
      { id: 11, points: [[570, 300], [670, 240], [660, 380]], fill: '#172554', stroke: '#1d4ed8', opacity: 0.72 },
      { id: 12, points: [[430, 300], [430, 480], [340, 380]], fill: '#2563eb', stroke: '#60a5fa', opacity: 0.8 },
      { id: 13, points: [[570, 300], [570, 480], [660, 380]], fill: '#1d4ed8', stroke: '#3b82f6', opacity: 0.78 },
      { id: 14, points: [[430, 480], [340, 380], [330, 510]], fill: '#312e81', stroke: '#4f46e5', opacity: 0.75 },
      // Shards 15-22: Lower Armor Chevrons & Defensive Keel
      { id: 15, points: [[570, 480], [660, 380], [670, 510]], fill: '#1e1b4b', stroke: '#3730a3', opacity: 0.72 },
      { id: 16, points: [[430, 480], [330, 510], [410, 640]], fill: '#3730a3', stroke: '#6366f1', opacity: 0.75 },
      { id: 17, points: [[430, 480], [450, 640], [410, 640]], fill: '#4338ca', stroke: '#818cf8', opacity: 0.8 },
      { id: 18, points: [[570, 480], [670, 510], [590, 640]], fill: '#1e1b4b', stroke: '#4338ca', opacity: 0.7 },
      { id: 19, points: [[570, 480], [550, 640], [590, 640]], fill: '#312e81', stroke: '#6366f1', opacity: 0.78 },
      { id: 20, points: [[450, 640], [500, 560], [500, 770]], fill: '#6366f1', stroke: '#a5b4fc', opacity: 0.9 },
      { id: 21, points: [[550, 640], [500, 560], [500, 770]], fill: '#4f46e5', stroke: '#818cf8', opacity: 0.88 },
      { id: 22, points: [[410, 640], [450, 640], [500, 770]], fill: '#3730a3', stroke: '#6366f1', opacity: 0.75 },
      // Shards 23-27: Defensive Flank Wings & Cryptographic Seals
      { id: 23, points: [[590, 640], [550, 640], [500, 770]], fill: '#1e1b4b', stroke: '#4338ca', opacity: 0.7 },
      { id: 24, points: [[340, 380], [330, 510], [250, 440]], fill: '#0284c7', stroke: '#38bdf8', opacity: 0.55 },
      { id: 25, points: [[660, 380], [670, 510], [750, 440]], fill: '#1d4ed8', stroke: '#60a5fa', opacity: 0.55 },
      { id: 26, points: [[330, 510], [410, 640], [350, 690]], fill: '#4f46e5', stroke: '#a5b4fc', opacity: 0.6 },
      { id: 27, points: [[670, 510], [590, 640], [650, 690]], fill: '#312e81', stroke: '#818cf8', opacity: 0.6 }
    ]
  },

  contact: {
    id: 'contact',
    index: 4,
    number: '05',
    category: 'COMMUNICATION // DISPATCH',
    title: 'THE TERMINAL RADAR',
    role: 'Open Transmission Channels',
    leadName: 'Establish Direct Connection',
    narrative: `Whether you are architecting high-concurrency simulation backends, developing zero-latency spatial computing systems, or seeking an engineer with high mathematical rigor and aesthetic sensibility, the quantum terminal is online.`,
    quote: 'Signals transmitted across the open network. Responses dispatched within 24 hours.',
    specs: [
      { label: 'EMAIL', value: 'pranjal19082004@gmail.com' },
      { label: 'PHONE', value: '+91-8077587054' },
      { label: 'GITHUB', value: 'github.com/PranjalArya1908' },
      { label: 'LOCATION', value: 'Dehradun, Uttarakhand, India' }
    ],
    tags: ['GitHub', 'LinkedIn', 'Direct Dispatch', 'Resume Dossier', 'SSH / PGP'],
    links: [
      { label: 'RETURN TO ORIGIN (01)', targetState: 'about', primary: true },
      { label: 'DOWNLOAD RESUME (PDF)', action: 'download-resume', primary: false }
    ],
    theme: {
      primary: '#22d3ee',
      secondary: '#a855f7',
      accent: '#ec4899',
      bgBase: '#080811',
      bgGradient: 'radial-gradient(ellipse at 35% 50%, rgba(34, 211, 238, 0.12), rgba(168, 85, 247, 0.07) 50%, #05050b 85%)',
      hudGlow: 'rgba(34, 211, 238, 0.35)',
      ambientLight: '#22d3ee'
    },
    // 28 Triangles unfold into an Open Radial Array of Interactive Contact Shards
    shards: [
      // Shard 0: THE QUANTUM TILE (Central Emitter / Transmission Core Beacon)
      { id: 0, isAnchor: true, points: [[500, 430], [440, 530], [560, 530]], fill: '#22d3ee', stroke: '#ffffff', opacity: 0.98 },
      // Shards 1-5: GITHUB Interactive Island (Top-Left Quad)
      { id: 1, chip: 'github', points: [[310, 240], [390, 270], [330, 350]], fill: '#f8fafc', stroke: '#ffffff', opacity: 0.85 },
      { id: 2, chip: 'github', points: [[390, 270], [450, 250], [420, 340]], fill: '#94a3b8', stroke: '#e2e8f0', opacity: 0.88 },
      { id: 3, chip: 'github', points: [[390, 270], [330, 350], [420, 340]], fill: '#cbd5e1', stroke: '#ffffff', opacity: 0.92 },
      { id: 4, chip: 'github', points: [[330, 350], [420, 340], [370, 410]], fill: '#64748b', stroke: '#94a3b8', opacity: 0.78 },
      { id: 5, chip: 'github', points: [[250, 290], [310, 240], [330, 350]], fill: '#475569', stroke: '#cbd5e1', opacity: 0.75 },
      // Shards 6-10: LINKEDIN Interactive Island (Top-Right Quad)
      { id: 6, chip: 'linkedin', points: [[690, 240], [610, 270], [670, 350]], fill: '#0ea5e9', stroke: '#7dd3fc', opacity: 0.88 },
      { id: 7, chip: 'linkedin', points: [[610, 270], [550, 250], [580, 340]], fill: '#0284c7', stroke: '#38bdf8', opacity: 0.85 },
      { id: 8, chip: 'linkedin', points: [[610, 270], [670, 350], [580, 340]], fill: '#38bdf8', stroke: '#ffffff', opacity: 0.92 },
      { id: 9, chip: 'linkedin', points: [[670, 350], [580, 340], [630, 410]], fill: '#0369a1', stroke: '#0ea5e9', opacity: 0.78 },
      { id: 10, chip: 'linkedin', points: [[750, 290], [690, 240], [670, 350]], fill: '#075985', stroke: '#38bdf8', opacity: 0.72 },
      // Shards 11-15: EMAIL / DISPATCH Interactive Island (Bottom-Left Quad)
      { id: 11, chip: 'email', points: [[310, 660], [390, 630], [330, 550]], fill: '#a855f7', stroke: '#c084fc', opacity: 0.85 },
      { id: 12, chip: 'email', points: [[390, 630], [450, 650], [420, 560]], fill: '#7e22ce', stroke: '#a855f7', opacity: 0.82 },
      { id: 13, chip: 'email', points: [[390, 630], [330, 550], [420, 560]], fill: '#c084fc', stroke: '#ffffff', opacity: 0.9 },
      { id: 14, chip: 'email', points: [[330, 550], [420, 560], [370, 490]], fill: '#9333ea', stroke: '#e9d5ff', opacity: 0.78 },
      { id: 15, chip: 'email', points: [[250, 610], [310, 660], [330, 550]], fill: '#581c87', stroke: '#a855f7', opacity: 0.7 },
      // Shards 16-20: RESUME / DOSSIER Interactive Island (Bottom-Right Quad)
      { id: 16, chip: 'resume', points: [[690, 660], [610, 630], [670, 550]], fill: '#ec4899', stroke: '#f472b6', opacity: 0.85 },
      { id: 17, chip: 'resume', points: [[610, 630], [550, 650], [580, 560]], fill: '#be185d', stroke: '#ec4899', opacity: 0.82 },
      { id: 18, chip: 'resume', points: [[610, 630], [670, 550], [580, 560]], fill: '#f472b6', stroke: '#ffffff', opacity: 0.9 },
      { id: 19, chip: 'resume', points: [[670, 550], [580, 560], [630, 490]], fill: '#db2777', stroke: '#fbcfe8', opacity: 0.78 },
      { id: 20, chip: 'resume', points: [[750, 610], [690, 660], [670, 550]], fill: '#831843', stroke: '#ec4899', opacity: 0.7 },
      // Shards 21-27: Radial Orbital Relays & Transceiver Waveguides
      { id: 21, points: [[440, 530], [560, 530], [500, 600]], fill: '#06b6d4', stroke: '#67e8f9', opacity: 0.88 },
      { id: 22, points: [[500, 230], [460, 160], [540, 160]], fill: '#22d3ee', stroke: '#ffffff', opacity: 0.8 },
      { id: 23, points: [[190, 460], [240, 420], [240, 500]], fill: '#818cf8', stroke: '#a5b4fc', opacity: 0.65 },
      { id: 24, points: [[810, 460], [760, 420], [760, 500]], fill: '#f43f5e', stroke: '#fda4af', opacity: 0.65 },
      { id: 25, points: [[500, 710], [440, 790], [560, 790]], fill: '#a855f7', stroke: '#e9d5ff', opacity: 0.75 },
      { id: 26, points: [[440, 530], [370, 490], [420, 560]], fill: '#0891b2', stroke: '#22d3ee', opacity: 0.65 },
      { id: 27, points: [[560, 530], [630, 490], [580, 560]], fill: '#9d174d', stroke: '#f472b6', opacity: 0.65 }
    ]
  }
};

export const SECTION_KEYS = ['about', 'education', 'skills', 'crowdsafe', 'contact'];

export const PROJECT_SUBSTATES = ['crowdsafe', 'credify'];
