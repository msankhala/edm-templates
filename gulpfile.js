var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    replace = require('gulp-replace'),
    debug = require('gulp-debug');

var bases = {
  imagesBasePath: 'http://www.flightcentre.com.au/cms_images/crm/media/',
  build: 'build/'
};

gulp.task('css-inliner', function() {
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
  // Replace image url with absolute url.
  gulp.src([bases.build + '*.html'])
    .pipe(debug())
    .pipe(replace(/src="images\//gm, 'src="' + bases.imagesBasePath))
    .pipe(replace(/background="images\//gm, 'background="' + bases.imagesBasePath))
    .pipe(gulp.dest('build/'));
});

