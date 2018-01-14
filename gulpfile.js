var gulp = require('gulp');
var path = require('path');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var flow = require('gulp-flowtype');
var clean = require('gulp-clean');

var outputPath = path.join(__dirname, 'build', 'out');

function build() {
  return gulp
    .src(path.join(__dirname, 'src', '**/*.js'))
    .pipe(eslint())
    .pipe(flow())
    .pipe(babel())
    .pipe(gulp.dest(outputPath));
}

function cleanOutput() {
  return gulp.src(outputPath).pipe(clean());
}

gulp.task('default', build);
gulp.task('clean', cleanOutput);
