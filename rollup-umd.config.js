const globals = {
    '@angular/core': 'ng.core',
    '@angular/router': 'ng.router',
};

export default {
    external: Object.keys(globals),
    input: './dist/public_api.js',
    onwarn: () => null,
    output: {
        format: 'umd',
        name: 'cqr',
        file: 'dist/angular-library-rollup.umd.js',
        globals,
        exports: 'named',
        amd: { id: 'cqr' }
    }
}