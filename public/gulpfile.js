var gulp = require('gulp');
var del = require('del');
var rename = require("gulp-rename");
var htmlReplace = require('gulp-html-replace');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var destPath='./build';

gulp.task('css',function() {
  return gulp.src(['css/normalize.css','css/custom.css'])
    .pipe(concat('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(destPath+'/css'));
});
gulp.task('js',function () {
  return gulp.scr(['js/TweenLite.min.js','js/CSSPlugin.min.js','js/main.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destPath+'/js'));
});
gulp.task('html',()=>{
  return gulp.src('./index.html')
    .pipe(htmlReplace({
      'css-app':'css/app.min.css',
      'js-app':'js/app.min.js'
    }))
    .pipe(gulp.dest(destPath));
})

gulp.task('default',['css','js','html'], ()=>{
  
})