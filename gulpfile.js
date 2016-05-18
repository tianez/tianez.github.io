var gulp = require('gulp')
var livereload = require('gulp-livereload')
var webpack = require("gulp-webpack")
var connect = require('gulp-connect')

var less = require('gulp-less')
var sass = require('gulp-sass')
var csscomb = require('gulp-csscomb')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssmin = require('gulp-minify-css') //css压缩
var uglify = require('gulp-uglify') //js压缩
var concat = require('gulp-concat') //文件合并

var sourcemaps = require('gulp-sourcemaps')
var rename = require('gulp-rename') //文件更名

var webpackConfig = require('./webpack.config')

gulp.task('Less', function() {
    gulp.src('app/layout/style.less')
        // .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        // .pipe(csscomb())
        .pipe(gulp.dest('app/css/'))
        // .pipe(sourcemaps.write())
        .pipe(cssmin({
            compatibility: 'ie7' //兼容IE7及以下需设置compatibility属性
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/css/'))
})

gulp.task('Sass', function() {
    gulp.src('app/layout/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(cssmin({
            compatibility: 'ie7' //兼容IE7及以下需设置compatibility属性
        }))
        .pipe(gulp.dest('app/css/'))
})

// 合并、压缩js文件
gulp.task('js_ext', function() {
    return gulp.src(
            [
                'components/utils/SHA1.js',
                'components/utils/CryptoJS.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/simditor/scripts/module.js',
                'bower_components/simditor/scripts/hotkeys.js',
                'bower_components/simditor/scripts/uploader.js',
                'bower_components/simditor/scripts/simditor.js'
            ]
        )
        .pipe(concat('ext.js'))
        .pipe(gulp.dest('build'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task('js_vendors', function() {
    return gulp.src(
            [
                'build/vendors.js',
                'build/app.js',
                'build/mobile.js'
            ]
        )
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task("webpack", function() {
    return gulp.src('./app/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('.'))
        .pipe(connect.reload());
})

gulp.task('webserver', function() {
    connect.server({
        port: 3000,
        livereload: true
    });
})

gulp.task('watch', function() {
    // livereload.listen();
    gulp.watch(['app/**/*.less'], ['Less'])
        // gulp.watch(['app/sass/*.scss'], ['Sass']);
    gulp.watch(['build/*.js'], ['js_vendors'])
    gulp.watch(
        ['app/*.js',
            'app/**/*.js',
            // 'app/css/style.css',
            'components/**'
        ], ['webpack', 'js_vendors'])
});

gulp.task('default', [
    'Less',
    // 'Sass',
    'webpack',
    'webserver',
    'watch'
])

gulp.task('js', [
    'js_ext',
    'js_vendors'
])