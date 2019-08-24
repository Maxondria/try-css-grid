const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(["./*.html", "./css/*.css"]).on("change", browserSync.reload);
});
