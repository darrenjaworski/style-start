var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minify = require('gulp-minify-css'),
  rename = require('gulp-rename');

gulp.task('build-css', function() {

  gulp.src('style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 25 versions']
    }))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));

});

gulp.task('watch', function(){

  gulp.watch(['./partials/*.scss', '*.scss'], ['build-css']);

});

gulp.task('default', ['build-css']);
