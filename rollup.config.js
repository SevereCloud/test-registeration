import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import { eslint } from 'rollup-plugin-eslint';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);
const extensions = ['.js', '.vue'];
const isProduction = !process.env.ROLLUP_WATCH;
const globals = { vue: 'Vue' };

const lintOpts = {
  extensions,
  exclude: ['**/*.json'],
  cache: true,
  throwOnError: true
};

const plugins = [
  replace({
    values: {
      'process.env.MIN_SCORE': process.env.MIN_SCORE || 0.5,
      'process.env.TOKEN_EMAIL': `'${process.env.TOKEN_EMAIL}'`,
      'process.env.TOKEN_PHONE': `'${process.env.TOKEN_PHONE}'`
    }
  }),
  resolve(),
  eslint(lintOpts),
  bundleSize(),
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    css: true
  }),
  buble(),

  // Watch the `public` directory and refresh the
  // browser on changes when not in production
  !isProduction && livereload('public')
];

export default {
  external,
  plugins,
  input: 'src/entry.js',
  output: {
    globals,
    // sourcemap: true,
    file: 'public/bundle.js',
    format: 'umd'
  }
};
