import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import { build } from 'esbuild';

void build({
  plugins: [pnpPlugin()],
  format: 'esm',
  target: 'es6',
  platform: 'browser',
  bundle: true,
  minify: true,
  external: [],
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.mjs',
});
