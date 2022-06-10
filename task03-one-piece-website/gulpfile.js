/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary gulpfile for the Task 03 of the Web Training. Done by Esteban Mata.
 */

const browserSync = require("browser-sync");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const BrowserSync = require("browser-sync").create();

function CompileSass(cb) {
  gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css/"))
    .pipe(BrowserSync.stream());
  cb();
}

function serve() {
  BrowserSync.init({
    server: "./",
  });

  gulp.watch("./scss/**/*.scss", CompileSass);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.default = gulp.series(CompileSass, serve);
