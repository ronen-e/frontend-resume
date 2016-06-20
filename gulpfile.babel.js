import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';

gulp.task('go', ['browserify'])

gulp.task('browserify', () => {
    return browserify('app/index.js')
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.js'))          // gives streaming vinyl file object
        .pipe(buffer())                     // convert from streaming to buffered vinyl file object
        .pipe(uglify({ mangle: false }))    // now gulp-uglify works
        .pipe(gulp.dest('build/js'))
});
