/**
 * Created by martina on 10/12/15.
 */
(function(){
    "use strict";
    var gulp = require('gulp');

    gulp.task('index', function () {
        gulp.src('src/*.html')
            .pipe(gulp.dest( 'dist' ));
    });

    gulp.task('watch', [], function(){
        gulp.watch('src/index.html', ['index']);
    });

})();