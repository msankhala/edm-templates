var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

var bases = {
  build: 'build/'
};

var paths = {
  images: ['images/**/*.png']
};

gulp.task('default', ['copy'], function() {
  return gulp.src('./*.html')
  .pipe(inlineCss({
    applyStyleTags: true,
    applyLinkTags: true,
    removeStyleTags: true,
    removeLinkTags: true,
    removeHtmlSelectors: true
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('copy', function() {
  // Copy images
  gulp.src(paths.images)
  .pipe(gulp.dest(bases.build + 'images/'));
});

