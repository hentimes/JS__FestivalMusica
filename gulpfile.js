
const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(cb) {

    src("src/scss/**/*.scss")    //identificar archivo
        .pipe(plumber())
        .pipe(sass())               //compilarlo
        .pipe(dest("build/css"))    //almacenarlo

    cb();                       //avisa a gulp que finalizo la f
}

function dev(cb) {
    watch ("src/scss/**/*.scss", css)


    cb();
}
exports.css = css;
exports.dev = dev;