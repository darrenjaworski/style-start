var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync').create(),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  colorRgbaFallback = require('postcss-color-rgba-fallback'),
  opacity = require('postcss-opacity'),
  pixrem = require('pixrem'),
  mqpacker = require('css-mqpacker');

var processors = [
  autoprefixer({
    browsers: ['last 25 versions']
  }),
  colorRgbaFallback,
  opacity,
  pixrem,
  mqpacker,
  cssnano
];

gulp.task('build-css', function() {

  gulp.src('style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());

});

gulp.task('serve', function() {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

});

gulp.task('watch', function(){

  gulp.watch(['./partials/*.scss', '*.scss'], ['build-css']);

});

gulp.task('default', ['build-css', 'serve', 'watch']);
