var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('ts', function() {
    var tsconfig = require("./frontend/assets/typescripts/tsconfig.json");

    gulp.src([
            './frontend/assets/typescripts/**/*.ts',
            '!./node_modules/**'//node_modules配下は除外する
        ])
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(gulp.dest('./tmp'));
});
