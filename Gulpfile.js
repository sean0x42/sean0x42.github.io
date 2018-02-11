var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var input = "./styles/**/*.scss";
var output = "./styles";
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task("sass", function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(output));
});

gulp.task("default", ["sass", "watch"]);

gulp.task("watch", function () {
    gulp.watch(input, ['sass']);
});