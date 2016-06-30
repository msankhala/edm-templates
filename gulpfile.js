var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    replace = require('gulp-replace'),
    debug = require('gulp-debug');

var bases = {
  imagesBasePath: 'http://srijan-best.s114.srijan-sites.com/sites/default/files/fc-email-images/',
  build: 'build/'
};

var paths = {
  images: ['images/**/*.png']
};

gulp.task('copy', function() {
  // Copy images
  gulp.src(paths.images)
  .pipe(gulp.dest(bases.build + 'images/'));
});

gulp.task('css-inliner', ['copy'], function() {
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

gulp.task('default', ['css-inliner'], function() {
  gulp.src([bases.build + '*.html'])
    .pipe(debug())
    .pipe(replace(/src="images\//gm, 'src="' + bases.imagesBasePath))
    .pipe(gulp.dest('build/'));
});

