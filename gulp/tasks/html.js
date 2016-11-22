const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const path = require('path');

const assets = config.production ? [`${config.dist}/**/*.min.{js,css}`] : [`${config.dist}/**/*.{js,css}`]
const vendors = config.vendors
  .filter((vendor) => {
    return undefined !== vendor.cdn
  })
  .map((vendor) => {
    return vendor.cdn
  });

gulp.task('build:html', () => {
  const sources = gulp.src(assets, { read: false });

  return gulp.src(config.html.sources)
    .pipe($.plumber())
    .pipe($.inject(sources, { ignorePath: config.dist }))
    .pipe(config.production ? $.inject(gulp.src(vendors)) : $.util.noop())
    .pipe(config.production ? $.htmlmin({ collapseWhitespace: true, removeComments: true }) : $.util.noop())
    .pipe(gulp.dest(config.dist))
    .pipe($.connect.reload());
});

gulp.task('watch:html', function () {
  gulp.watch(config.html.sources, ['build:html']);
});
