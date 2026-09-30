import { PORTFOLIO_STATES } from './states.js';

function calcTriangleArea(pts) {
  const [p0, p1, p2] = pts;
  return 0.5 * Math.abs(p0[0] * (p1[1] - p2[1]) + p1[0] * (p2[1] - p0[1]) + p2[0] * (p0[1] - p1[1]));
}

console.log("=== VALIDATING PORTFOLIO_STATES ===");
let hasError = false;

for (const [key, state] of Object.entries(PORTFOLIO_STATES)) {
  console.log(`\nChecking state: [${key}] (number: ${state.number}, title: ${state.title})`);
  if (!state.shards || state.shards.length !== 28) {
    console.error(`ERROR: State ${key} has ${state.shards?.length || 0} shards, expected 28!`);
    hasError = true;
    continue;
  }

  const anchor = state.shards[0];
  if (!anchor.isAnchor) {
    console.error(`ERROR: Shard 0 in ${key} is not marked isAnchor!`);
    hasError = true;
  }

  state.shards.forEach((s, idx) => {
    if (s.id !== idx) {
      console.error(`ERROR: Shard index mismatch at ${idx}, id is ${s.id}`);
      hasError = true;
    }
    if (!s.points || s.points.length !== 3) {
      console.error(`ERROR: Shard ${idx} in ${key} does not have 3 points!`);
      hasError = true;
      return;
    }
    for (const pt of s.points) {
      if (typeof pt[0] !== 'number' || typeof pt[1] !== 'number' || isNaN(pt[0]) || isNaN(pt[1])) {
        console.error(`ERROR: Shard ${idx} in ${key} has invalid coordinate:`, pt);
        hasError = true;
      }
      if (pt[0] < 0 || pt[0] > 1000 || pt[1] < 0 || pt[1] > 1000) {
        console.warn(`WARNING: Shard ${idx} in ${key} has point outside [0, 1000]:`, pt);
      }
    }
    const area = calcTriangleArea(s.points);
    if (area < 10) {
      console.warn(`NOTICE: Shard ${idx} in ${key} has very small area: ${area}`);
    }
  });

  const anchorCentroid = [
    (anchor.points[0][0] + anchor.points[1][0] + anchor.points[2][0]) / 3,
    (anchor.points[0][1] + anchor.points[1][1] + anchor.points[2][1]) / 3,
  ];
  console.log(`  ✓ 28 shards verified. Quantum Anchor centroid: (${anchorCentroid[0].toFixed(1)}, ${anchorCentroid[1].toFixed(1)})`);
}

if (!hasError) {
  console.log("\n>>> ALL GEOMETRIC STATES ARE 100% VALID AND COMPLIANT! <<<");
} else {
  console.error("\n>>> ERRORS DETECTED IN GEOMETRY <<<");
  process.exit(1);
}
