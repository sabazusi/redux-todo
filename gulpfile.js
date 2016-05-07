var gulp = require('gulp');
var typescript = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('ts', function() {
    var tsconfig = require("./frontend/assets/typescripts/tsconfig.json");

    gulp.src([
            './frontend/assets/typescripts/**/*.ts',
            '!./node_modules/**'//node_modules配下は除外する
        ])
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('build', ["ts"], function(){
  var b = browserify({
    entries: './tmp/index.js',
    debug: false,
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/'));
});
