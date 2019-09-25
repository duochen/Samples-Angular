import angular from 'rollup-plugin-angular';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'system',
    },
    plugins: [
        angular(),
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        typescript({
            typescript: require('typescript')
        }),
        commonjs()
    ],
    external: [             // The libraries should never get bundled into the resulting output
        'plugins-core',     // It requires the main application to import them alongside our plugins
        '@angular/core',
        '@angular/forms',       
        '@angular/htpp'
    ]
}