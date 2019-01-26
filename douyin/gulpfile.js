var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
gulp.task('default', function(){
  gulp.run(["minijs","minicss","minihtml"]);
});
gulp.task('minijs', function(){
  return gulp.src('./js/*.js')
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(uglify()) // Uglifies Javascript files
    .pipe(gulp.dest('dist/js'))
});
gulp.task('minicss',function(){
    gulp.src('./css/*.css')
        .pipe(concat('main.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('minihtml', function () {
    return gulp.src('./*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});
