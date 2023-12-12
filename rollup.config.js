const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.tsx',
        output: [
            {
                file: packageJson.module,
                format: 'cjs',
            },
            {
                file: packageJson.main,
                format: 'esm',
            },
        ],
        plugins: [peerDepsExternal(), resolve.default(), commonjs(), typescript({ tsconfig: './tsconfig.json' })],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: packageJson.types, format: 'esm' }],
        plugins: [dts.default()],
    },
];
