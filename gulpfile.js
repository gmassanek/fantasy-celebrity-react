var gulp = require('gulp');
var bower = require('gulp-bower')
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('vendorJS', function(){
  gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/slimscroll/jquery.slimscroll.min.js',
    './vendor/mvpready-admin.js',
    './vendor/mvpready-core.js',
    './vendor/mvpready-helpers.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./public/assets/'));
});

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

gulp.task('default', ['vendorJS', 'build', 'watch']);
