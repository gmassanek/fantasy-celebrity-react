var gulp = require('gulp');
var sass = require('gulp-sass');
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

gulp.task('vendorCSS', function(){
  gulp.src([
    './vendor/mvpready-admin.css'
  ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('public/assets'));
});

gulp.task('watchSass', function() {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
  gulp.src([
    'src/application.scss'
  ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('application.css'))
  .pipe(gulp.dest('public/assets'));
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

gulp.task('watchJs', function() {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('default', ['vendorJS', 'sass', 'build', 'watchJs', 'watchSass']);
