var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var srcPath = 'src/helloworld.js';

gulp.task('build', function () {
  browserify({
    entries: srcPath,
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(srcPath, ['build']);
});


gulp.task('default', ['build', 'watch']);
