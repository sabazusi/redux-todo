var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('ts', function() {
    var options =  {
        out: 'index.js'
    };

    gulp.src([
            './frontend/assets/typescripts/**/*.ts',
            '!./node_modules/**'//node_modules配下は除外する
        ])
        .pipe(typescript(options))
        .pipe(gulp.dest('./tmp'));
});