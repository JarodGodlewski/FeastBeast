var glob = require('glob')
var gulp = require('gulp')
var less = require('gulp-less')
var concat = require('gulp-concat')
var merge = require('gulp-merge')
var minifyCss = require('gulp-clean-css')
var replace = require('gulp-replace')

module.exports = function (config) {
  return function () {
    var lessStream =  gulp.src( config.files.less )
      .pipe(less({ paths: [ config.app.src ] }))
      .on('error', function (err) {
        console.error(err.toString())
        this.emit('end')
      })
    var cssStream = gulp.src(config.files.css)
    return merge(cssStream, lessStream)
      .pipe(concat('main.css'))
      .pipe(minifyCss())
      .pipe(gulp.dest(config.app.dist + 'styles'))
  }
}
