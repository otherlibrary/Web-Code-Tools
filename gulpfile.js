var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var streamqueue  = require('streamqueue');
var removeUseStrict = require("gulp-remove-use-strict");
var cleanCSS = require('gulp-clean-css');

gulp.task('scripts', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/**/*.module.js'),
    gulp.src('app/**/*.config.js'),
    gulp.src('app/**/*.service.js'),
    gulp.src('app/**/*.factory.js'),
    gulp.src('app/**/*.component.js'),
    gulp.src('app/**/*.directive.js'),
    gulp.src('app/**/*.controller.js')
  )
  .pipe(concat('scripts.min.js'))
  .pipe(removeUseStrict())
  .pipe(uglify())
  .pipe(gulp.dest('app/dist'));
});

gulp.task('scriptsVendor', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/vendor/**/*.js'),
    gulp.src('app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'),
    gulp.src('app/bower_components/re-tree/re-tree.min.js'),
    gulp.src('app/bower_components/angular-bootstrap/ui-bootstrap.min.js'),
    gulp.src('app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'),
    gulp.src('app/bower_components/angular-bootstrap-material/dist/angular-bootstrap-material.min.js'),
    gulp.src('app/bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js'),
    gulp.src('app/bower_components/angular-breadcrumb/dist/angular-breadcrumb.min.js'),
    gulp.src('app/bower_components/angular-google-adsense/dist/angular-google-adsense.min.js'),
    gulp.src('app/bower_components/angular-google-analytics/dist/angular-google-analytics.min.js'),
    gulp.src('app/bower_components/angular-ui-router/release/angular-ui-router.min.js'),
    gulp.src('app/bower_components/clipboard/dist/clipboard.min.js'),
    gulp.src('app/bower_components/ngclipboard/dist/ngclipboard.min.js'),
    gulp.src('app/bower_components/ng-device-detector/ng-device-detector.min.js')
  )
  .pipe(concat('scripts-vendor.min.js'))
  .pipe(removeUseStrict())
  .pipe(uglify())
  .pipe(gulp.dest('app/dist'));
})

gulp.task('styles', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/styles/animations.css'),
    gulp.src('app/styles/styles.css')
  )
  .pipe(concat('styles.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/dist'));
});

gulp.task('stylesVendor', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/vendor/**/*.css'),
    gulp.src('app/bower_components/angular-bootstrap-colorpicker/css/colorpicker.min.css')
  )
  .pipe(concat('styles-vendor.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/dist'));
});
