var gulp = require('gulp');
var requireModules = require('gulp-require-modules');
var dist = 'src/assets/monaco/';
gulp.task('default', function () {
    return gulp.src('./node_modules/monaco-editor/min/**/*.*')
        .pipe(requireModules({dist: true, fromDirectory:'node_modules/monaco-editor/min', distDirectory: dist}))
        .pipe(gulp.dest(dist));
});