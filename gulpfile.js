var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var angularFilesort = require('gulp-angular-filesort');





gulp.task('js', function(){
    return gulp.src('app/**/*.js')
        .pipe(angularFilesort())
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
});

