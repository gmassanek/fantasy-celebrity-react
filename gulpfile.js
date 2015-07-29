var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var srcPath = 'src/application.js';

gulp.task('build', function () {
  browserify({
    entries: srcPath,
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('application.js'))
  .pipe(gulp.dest('public/assets'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});


gulp.task('default', ['build', 'watch']);
