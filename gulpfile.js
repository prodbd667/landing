const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const spritesmith = require('gulp.spritesmith');
const svgSprite = require('gulp-svg-sprites');
const browserSync = require('browser-sync').create();


gulp.task('bootstrap', function () {
    return gulp.src('./src/sass/bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});
gulp.task('sass-b', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
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
        cssName: 'sprite.css',
        imgPath: '../img/sprite.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:in', function () {
    var spriteData = gulp.src('./src/img/in/*.png').pipe(spritesmith({
        imgName: 'sprite_in.png',
        cssName: 'sprite_in.css'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:point', function () {
    var spriteData = gulp.src('./src/img/point/*.png').pipe(spritesmith({
        imgName: 'point.png',
        cssName: 'point.css'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:arr', function () {
    var spriteData = gulp.src('./src/img/arr/*.png').pipe(spritesmith({
        imgName: 'arr.png',
        cssName: 'arr.css',
        imgPath: '../img/arr.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:step', function () {
    var spriteData = gulp.src('./src/img/step/*.png').pipe(spritesmith({
        imgName: 'step.png',
        cssName: 'step.css',
        imgPath: '../img/step.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:logo:client', function () {
    var spriteData = gulp.src('./src/img/logo/*.png').pipe(spritesmith({
        imgName: 'logo_cl.png',
        cssName: 'logo_cl.css',
        imgPath: '../img/logo_cl.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:blog', function () {
    var spriteData = gulp.src('./src/img/blog/*.png').pipe(spritesmith({
        imgName: 'blog.png',
        cssName: 'blog.css',
        imgPath: '../img/blog.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:case', function () {
    var spriteData = gulp.src('./src/img/case/*.png').pipe(spritesmith({
        imgName: 'case.png',
        cssName: 'case.css',
        imgPath: '../img/case.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:check', function () {
    var spriteData = gulp.src('./src/img/check/*.png').pipe(spritesmith({
        imgName: 'check.png',
        cssName: 'check.css',
        imgPath: '../img/check.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:logo', function () {
    var spriteData = gulp.src('./src/img/logo_main/*.png').pipe(spritesmith({
        imgName: 'logo.png',
        cssName: 'logo.css',
        imgPath: '../img/logo.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:mobile', function () {
    var spriteData = gulp.src('./src/img/mobile/*.png').pipe(spritesmith({
        imgName: 'mobile.png',
        cssName: 'mobile.css',
        imgPath: '../img/mobile.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});
gulp.task('sprite:social', function () {
    var spriteData = gulp.src('./src/img/social/*.png').pipe(spritesmith({
        imgName: 'social.png',
        cssName: 'social.css',
        imgPath: '../img/social.png'
    }));
    return spriteData.pipe(gulp.dest('./public/img/'));
});

gulp.task('js:lib:copy',function () {
    return gulp.src('./src/js/lib/*.*')
        .pipe(gulp.dest('./public/js/'));
});
gulp.task('js',function () {
    return gulp.src('./src/js/main.js')
        .pipe(gulp.dest('./public/js/'));
});


gulp.task('fonts:copy',function () {
    return gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./public/fonts/'));
});

gulp.task('lib:css:copy',function () {
    return gulp.src('./src/lib/*.*')
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
   gulp.watch('./src/sass/main/**/*.*', gulp.series('sass-b'));
   gulp.watch('./src/index.html', gulp.series('copy:html'));
   gulp.watch('./src/js/main.js', gulp.series('js'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('./public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('sass-b', 'copy:html', 'js', gulp.parallel('watch','serve')));
