var filter = require('gulp-filter')
var gulp = require('gulp')
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var wiredep = require('wiredep')
module.exports = function (config) {
  return function () {
    var srcDir = config.app.src
    var distDir = config.app.dist
    return gulp.src(srcDir + 'index.html')
    .pipe(inject(
        gulp.src(wiredep({
            bowerJson: require('../../bower.json')
        }).js)
        .pipe(concat('bower.js'))
        .pipe(gulp.dest(distDir + 'bower_components')),
        { name: 'bower', ignorePath: distDir, addRootSlash: false }
    ))
    .pipe(gulp.dest(distDir))
    .pipe(inject(
      gulp.src(config.files.scripts),
      { name: 'app', ignorePath: 'app', addRootSlash: false }
    ))
    .pipe(gulp.dest(distDir))
  }
}
