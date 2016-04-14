var gulp = require('gulp')
var livereload = require('gulp-livereload')
var webpack = require("gulp-webpack")
var connect = require('gulp-connect')

var less = require('gulp-less')
var sass = require('gulp-sass')
var csscomb = require('gulp-csscomb')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssmin = require('gulp-minify-css')
var sourcemaps = require('gulp-sourcemaps')
var rename = require('gulp-rename')

var webpackConfig = require('./webpack.config')

gulp.task('Less', function() {
    gulp.src('app/less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
        // .pipe(csscomb())
        .pipe(gulp.dest('app/css/'))
        .pipe(sourcemaps.write())
        .pipe(cssmin({
            compatibility: 'ie7' //兼容IE7及以下需设置compatibility属性
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('app/css/'))
})

gulp.task('Sass', function() {
    gulp.src('app/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(cssmin({
            compatibility: 'ie7'//兼容IE7及以下需设置compatibility属性
        }))
        .pipe(gulp.dest('app/css/'))
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
    gulp.watch(['app/less/*.less'], ['Less']);
    // gulp.watch(['app/sass/*.scss'], ['Sass']);
    gulp.watch(
        ['app/*.js',
            'app/**/*.js',
            'app/css/style.css',
            'components/forms/**'
        ], ['webpack']);
});

gulp.task('default', [
    'Less',
    // 'Sass',
    'webpack',
    'webserver',
    'watch'
])