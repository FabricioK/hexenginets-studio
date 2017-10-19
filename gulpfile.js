var gulp = require('gulp');
var requireModules = require('gulp-require-modules');
 
var dist = 'assets/monaco/'
gulp.task('default', function () {
    return gulp.src('src/*.js')
        .pipe(requireModules({dist: false}))
        .pipe(gulp.dest(dist));
});