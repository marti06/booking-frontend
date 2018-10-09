/**
 * Created by martina on 10/12/15.
 */
(function(){
    "use strict";
    let gulp = require('gulp');
    let clean = require('gulp-clean');
    let image = require('gulp-image');
    let cssMin = require('gulp-css');

    gulp.task('clean', function() {
        gulp.src('dist/*')
            .pipe(clean({force: true}));
    });

    gulp.task('cssMinfy', function(){
        return gulp.src('src/**/*.css')
            .pipe(cssMin())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('image', function () {
        gulp.src('src/images/*')
            .pipe(image())
            .pipe(gulp.dest('dist/images'));
    });

    gulp.task('html', function () {
        gulp.src(['src/**/*.html'])
            .pipe(gulp.dest( 'dist' ));
    });

    gulp.task('js', function () {
        gulp.src(['src/**/*.js'])
            .pipe(gulp.dest( 'dist' ));
    });



    gulp.task('build', ['html', 'js', 'image', 'cssMinfy']);

})();