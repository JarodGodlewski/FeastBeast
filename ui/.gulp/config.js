module.exports = {
  app: { src: 'app/', dist: 'dist/' },
  files: {
    scripts: [ 'app/**/*.js' ],
    views: ['app/templates/**/*.html'],
    less: ['app/styles/less/*.less'],
    css: ['app/styles/css/*.css'],
    imgs: ['app/images/*']
  }
}
