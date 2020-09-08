export default {
    input: './dist/public_api.js',
    output: {
        name: 'angular-library-rollup',
        format: 'es',
        file: './dist/angular-library-rollup.js',
    },
    external: [
        '@angular/core',
        '@angular/router',
    ],
};