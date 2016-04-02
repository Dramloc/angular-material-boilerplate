var gulp = require('gulp');

var serve = require('gulp-serve');

var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var minify = require('gulp-minify');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');

var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var configuration = {
    angular: {
        src: './app',
        dist: './public/dist',
        name: 'app',
        templates: {
            name: 'core-templates',
            module: 'app.core',
            folder: './app/core'
        }
    },
    sass: {
        src: './app',
        dist: './public/dist',
        name: 'app'
    },
    server: {
        
    }
}

// Generate template cache for angular.
gulp.task('angular:templates', function() {
    return gulp.src(configuration.angular.src + '/**/*.html')
        .pipe(templateCache(configuration.angular.templates.name + '.js', {
            module: configuration.angular.templates.module
        }))
        .pipe(gulp.dest(configuration.angular.templates.folder + '/'));
});

// Concatenate angular files in one file.
gulp.task('angular:concat', ['angular:templates'], function() {
    return gulp.src([configuration.angular.src + '/**/*-module.js', configuration.angular.src + '/**/*.js'])
        .pipe(concat(configuration.angular.name + '.js'))
        .pipe(header('(function() { '))
        .pipe(footer('})();'))
        .pipe(gulp.dest(configuration.angular.dist + '/'))
});

// Inject dependencies in angular.
gulp.task('angular:inject', ['angular:concat'], function() {
    return gulp.src(configuration.angular.dist + '/' + configuration.angular.name + '.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest(configuration.angular.dist + '/'));
});

// Minify concatenated file.
gulp.task('angular', ['angular:inject'], function() {
    return gulp.src(configuration.angular.dist + '/' + configuration.angular.name + '.js')
        .pipe(minify())
        .pipe(gulp.dest(configuration.angular.dist + '/'))
});

// Watch angular modifications.
gulp.task('angular:watch', function() {
    gulp.watch([configuration.angular.src + '/**/*.js', configuration.angular.src + '/**/*.html'], ['angular']);
});



// Compile SASS (.scss) to CSS (.css) files.
gulp.task('sass:compile', function() {
    return gulp.src(configuration.sass.src + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(configuration.sass.dist + '/'));
});

// Concatenate CSS files.
gulp.task('sass:concat', ['sass:compile'], function() {
    return gulp.src(configuration.sass.dist + '/**/*.css')
        .pipe(concat(configuration.sass.name + '.css'))
        .pipe(gulp.dest(configuration.sass.dist + '/'));
});

// Minify CSS file.
gulp.task('sass', ['sass:concat'], function() {
    return gulp.src(configuration.sass.dist + '/' + configuration.sass.name + '.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(configuration.sass.dist + '/'));
});

// Watch SASS modifications.
gulp.task('sass:watch', function() {
    gulp.watch(configuration.sass.src + '/**/*.scss', ['sass']);
});

gulp.task('serve', serve('public'));

gulp.task('build', ['angular', 'sass']);

gulp.task('watch', ['angular:watch', 'sass:watch']);

gulp.task('default', ['build', 'serve', 'watch']);