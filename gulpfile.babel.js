import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('go', ['scripts'])

gulp.task('browserify', () => {
    return browserify('app/index.js')
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.js'))          // gives streaming vinyl file object
        .pipe(buffer())                     // convert from streaming to buffered vinyl file object
        .pipe(uglify({ mangle: false }))    // now gulp-uglify works
        .pipe(gulp.dest('build/js'));
});


var scriptFiles = [
    './js/vendor/jQuery.js',
    './js/vendor/tmpl.js',
    './js/helper.js',
    './js/views/components/contacts.js',
    './js/views/components/skills.js',
    './js/views/map.js',
    './js/views/bio.js',
    './js/views/work.js',
    './js/views/projects.js',
    './js/views/education.js',
    './js/views/lets-connect.js',
    './js/resumeBuilder.js'
];
gulp.task('scripts', function() {
    return gulp.src(scriptFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(''));
});
