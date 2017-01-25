const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const spritesmith = require('gulp.spritesmith');
const browserSync = require('browser-sync').create();


gulp.task('bootstrap', function () {
    return gulp.src('./src/sass/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass-b', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('copy:bootstrap', function () {
    return gulp.src('./node_modules/bootstrap-sass/assets/**')
        .pipe(gulp.dest('./src/bootstrap/'));
});

gulp.task('copy:html', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('./src/img/service_mywifi/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});

gulp.task('watch', function () {
   gulp.watch('./src/sass/main/**/*.*', gulp.series('sass-b'));
   gulp.watch('./src/index.html', gulp.series('copy:html'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: 'public'
    });

    browserSync.watch('./public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('sass-b', 'copy:html', gulp.parallel('watch','serve')));
