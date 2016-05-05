var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

gulp.task('compile', function() {
  return gulp.src("./src/**/*")
             .pipe(gulp.dest("./dist"))
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
