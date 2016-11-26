const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');

const assets = config.production ? [`${config.dist}/**/*.min.{js,css}`] : [`${config.dist}/**/*.{js,css}`];

gulp.task('build:html', () => {
  const sources = gulp.src(assets, {
    read: false,
  });
  const stream = gulp.src(config.html.sources)
    .pipe($.plumber())
    .pipe($.inject(sources, {
      ignorePath: config.dist,
    }));

  if (config.production) {
    stream.pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }));
  }

  stream.pipe(gulp.dest(config.dist))
    .pipe($.connect.reload());

  return stream;
});

gulp.task('watch:html', () => {
  gulp.watch(config.html.sources, ['build:html']);
});
