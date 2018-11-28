var gulp = require('gulp'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable: true,
        path: 'src/index.html'
      },
      open: true
    }));
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('*.js')
    .pipe(connect.reload());
});

gulp.task('watch', ['html', 'js'], function() {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['src/app/home/*.js'], ['js']);
});

gulp.task('default', ['webserver', 'watch']);