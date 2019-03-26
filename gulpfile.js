const gulp = require('gulp');
const path = require('path');
const eslint = require('gulp-eslint');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

const tsProject = ts.createProject('tsconfig.json');
const outputPath = path.join(__dirname, 'build', 'out');

function build() {
  return tsProject
    .src()
    .pipe(eslint())
    .pipe(tsProject())
    .pipe(gulp.dest(outputPath));
}

function cleanOutput() {
  return gulp.src(outputPath).pipe(clean());
}

gulp.task('default', build);
gulp.task('clean', cleanOutput);
