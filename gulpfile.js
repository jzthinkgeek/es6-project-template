var gulp = require('gulp');
var path = require('path');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

var outputPath = path.join(__dirname, 'build', 'out');

function build() {
  return gulp.src(path.join(__dirname, 'src', '**/*.js'))
    .pipe(eslint())
    .pipe(babel())
    .pipe(gulp.dest(outputPath));
}

gulp.task('default', build);
