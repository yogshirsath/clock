// Gulp
var gulp = require('gulp');

// Sass/CSS stuff
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sass = require("gulp-sass");

const PRODUCTION = process.argv.includes('-production');


var sassOptions = {
    includePaths: ['./sass'],
    outputStyle: PRODUCTION == true ? 'compressed' : false
};

// JS stuff
const minify = require('gulp-minify');

gulp.task('styles', function(done) {
    gulp.src('./assets/scss/style.scss')
    .pipe(sass(sassOptions))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('.'));
    done();
});

var minifyOptions = {
    ext: {
        min: '.js'
    }
};
minifyOptions.mangle = PRODUCTION;
minifyOptions.compress = PRODUCTION;
minifyOptions.noSource = PRODUCTION;
if (PRODUCTION == false) {
    minifyOptions.preserveComments = 'all';
}

gulp.task('compress', function(done) {
    gulp.src(['./assets/js/*.js'])
    .pipe(minify(minifyOptions))
    .pipe(gulp.dest('./dist/'));
    done();
});

gulp.task('watch', function(done) {
    gulp.watch('./assets/js/*.js', gulp.series('compress'));
    gulp.watch('./assets/**/*.scss', gulp.series('styles'));
    done();
});

gulp.task('default', gulp.series('compress', 'styles', 'watch'));
