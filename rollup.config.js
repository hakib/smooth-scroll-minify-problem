import { rollup } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    commonjs(),
    resolve({
      jsnext: true,
      browser: true,
    })
  ]
};
