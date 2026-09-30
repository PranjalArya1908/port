import { build } from 'vite';
import path from 'path';
import fs from 'fs';

async function run() {
  console.log('Starting build...');
  const res = await build({
    root: process.cwd(),
    build: {
      outDir: 'dist',
      emptyOutDir: true
    }
  });
  console.log('Build completed:', fs.existsSync('./dist'));
}

run().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
