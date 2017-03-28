var gulp = require('gulp')
// config
var config = require('./.gulp/config')

// task definitions
var tasks = {
  assets: require('./.gulp/tasks/assets'),
  build: require('./.gulp/tasks/build'),
  clean: require('./.gulp/tasks/clean'),
  scripts: require('./.gulp/tasks/scripts'),
  spinup: require('./.gulp/tasks/spinup'),
  fonts: require('./.gulp/tasks/fonts'),
  html: require('./.gulp/tasks/html'),
  styles: require('./.gulp/tasks/styles'),
  views: require('./.gulp/tasks/views')
}

// tasks
gulp.task('default', ['build'])
gulp.task('build', tasks.build)
gulp.task('spinup', ['build'], tasks.spinup(config))
gulp.task('clean', tasks.clean(config))
gulp.task('assets', tasks.assets(config))
gulp.task('scripts', tasks.scripts(config))
gulp.task('fonts', tasks.fonts(config))
gulp.task('styles', tasks.styles(config))
gulp.task('views', tasks.views(config))
gulp.task('html', tasks.html(config));
