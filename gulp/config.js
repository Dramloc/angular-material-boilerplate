var package = require('../package.json');
var $ = require('gulp-load-plugins')();

module.exports = {
    scripts: {
        sources: './app/**/*.js',
        destination: './public/dist',
        destinationName: package.name + '.js',
        header: '(function () {\n\'use strict\';\n',
        footer: '\n})();'
    },
    templates: {
        sources: './app/**/*.html',
        destination: './public/dist',
        destinationName: 'templates.js',
        destinationModule: 'templates'
    },
    views: {
        sources: './public/index.html'
    },
    sass: {
        sources: './app/**/*.scss',
        destination: './public/dist',
        destinationName: package.name + '.css'
    },
    browserify: {
        sources: './entry.js',
        destination: './public/dist',
        destinationName: 'bundle.js'
    },
    serve: {
        root: './public'
    },
    production: !!$.util.env.production
};