var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/test/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/test/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/test/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('builds/test/js/**/*', ['js']);
  gulp.watch('builds/test/css/*.css', ['css']);
  gulp.watch(['builds/test/*.html',
    'builds/test/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/test/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
