const {src, dest, watch, parallel, series} = require("gulp");
const concat = require("gulp-concat");
const cssConcat = require("gulp-concat-css");
const minify = require("gulp-clean-css");
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();

//File paths
const files = {
    cssPath: "src/**/*.css",
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    imgPath: "src/pictures/*.*"
}

//Copies all HTML files to publish-folder
function htmlTasks() {
    return src(files.htmlPath)
        .pipe(dest('pub'));
}

//Copies all images to publish-folder
function imgTasks() {
    return src(files.imgPath)
        .pipe(dest('pub/pictures'));
}

//Minifies and concats all css files to publish css-folder
function cssTasks() {
    return src(files.cssPath)
        .pipe(cssConcat('styles.css'))
        .pipe(minify())
        .pipe(dest('pub/css'))
        .pipe(browserSync.stream());
}

//Minifies and concats all js files to publish js-folder
function jsTasks() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('pub/js'));
}

function browserSyncTask() {
    browserSync.init({
        server: {
            baseDir: "./pub"
        }
    });
}

//Watcher
function watchTasks() {
    watch(files.htmlPath, htmlTasks).on('change', browserSync.reload);
    watch(files.cssPath, cssTasks).on('change', browserSync.reload);
    watch(files.imgPath, imgTasks).on('change', browserSync.reload);
    watch(files.jsPath, jsTasks).on('change', browserSync.reload);
    
}

//Default task
exports.default = series(
    parallel(browserSyncTask, htmlTasks, imgTasks, cssTasks, jsTasks, watchTasks),
);