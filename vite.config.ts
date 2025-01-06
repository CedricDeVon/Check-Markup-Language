import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
    test: {
        globals: true, // Enable global test APIs like `describe` and `it`
        environment: 'node', // Use Node.js environment
        include: ['tests/**/*.test.ts'], // Test file patterns
        exclude: ['node_modules'], // Exclude unwanted files or directories
        coverage: {
            reporter: ['text', 'json', 'html'], // Enable coverage reporting
        },
    },
    build: {
        outDir: 'dist',   // Output directory for the built files
        rollupOptions: {
            input: 'src/index.ts', // Main entry point
            external: ['path'],
            plugins: [
                commonjs({
                    dynamicRequireTargets: ['./src/index.ts'], // Specify the path
                }),
            ],
            output: {
                entryFileNames: 'index.js',
                // format: 'module'
                format: 'cjs', // CommonJS format for Node.js
            },

        },
        assetsDir: ''
    },
});