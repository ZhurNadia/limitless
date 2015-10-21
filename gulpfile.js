var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    rename = require('gulp-rename');

// Concat css
gulp.task('concat', function () {
    gulp.src('./assets/css/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./build/css/'))
});

// Compile SASS
gulp.task('sass', function () {
    gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});


// Minify JS
gulp.task('uglify', function() {
    gulp.src('./assets/js/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('webserver', function() {
    gulp.src('public')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});


gulp.task('build', function() {
    // concat css
    gulp.run('concat');
    gulp.run('sass');
    gulp.run('uglify');






    //// image
    //gulp.src('./assets/images/*')
    //    .pipe(imagemin())
    //    .pipe(gulp.dest('./build/img'))

});