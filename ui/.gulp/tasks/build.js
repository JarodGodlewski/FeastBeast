var runSequence = require('run-sequence')

module.exports = function (cb) {
  // moves everything to the build folder
    runSequence(
      'clean',
     [ 'assets','styles','fonts','scripts','views' ],
     'html',
     cb
   )
}
