var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    minijs = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');


// sass task

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}));
});

// gulp sass (in terminal)
// end sass task 

// concat and mini js file

gulp.task('scripts', function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js' // can connect more then one
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(minijs())
        .pipe(gulp.dest('app/js'))
});

//end concat and mini js

gulp.task('cssmini', function () {
    return gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
});


// browserSync task

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });

});

// wnd browserSync 

// del task
gulp.task('clean', function () {
    return del.sync('dist');
});

//end del

gulp.task('clear-cache', function () {
    return cache.clearALL();
});


// Compress Task
gulp.task('compress', function () {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});


// watch task

gulp.task('watch', ['browser-sync', 'scripts', 'cssmini', 'compress'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/css/**/*.css', ['cssmini'], browserSync.reload);
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/img/*', ['compress'], browserSync.reload);


});


// gulp watch (in terminal)
// end watch task


//prodaction 

gulp.task('build', ['clean', 'scripts'], function () {
    var prodCss = gulp.src([
        'app/css/main.css',
        'app/css/main.min.css',
    ])
        .pipe(gulp.dest('dist/css'));

    var prodFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var prodJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var prodHtml = gulp.src('app/*html')
        .pipe(gulp.dest('dist/'));
});



		

