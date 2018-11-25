import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'core/rfb.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'rfb'
    },
    plugins: [
      resolve({
        browser: true
      }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/pako/index.js': [ 'Inflate' ]
        }
      }),
      babel({
        presets: ["@babel/preset-env"],
      })
    ]
  },
  {
    input: 'core/rfb.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/pako/index.js': [ 'Inflate' ]
        }
      }),
      babel({
        presets: ["@babel/preset-env"],
      })
    ]
  }
];
