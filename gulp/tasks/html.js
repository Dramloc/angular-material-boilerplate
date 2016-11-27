const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');

const assets = config.production ? [`${config.html.dest}/**/*.min.js`] : [`${config.html.dest}/**/*.js`];

gulp.task('build:html', () => {
  const sources = gulp.src(assets, {
    read: false,
  });
  const stream = gulp.src(config.html.src)
    .pipe($.plumber())
    .pipe($.inject(sources, {
      ignorePath: config.html.dest,
    }));

  if (config.production) {
    stream.pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }));
  }

  stream.pipe(gulp.dest(config.html.dest))
    .pipe($.connect.reload());

  return stream;
});

gulp.task('watch:html', () => {
  gulp.watch(config.html.src, ['build:html']);
});
