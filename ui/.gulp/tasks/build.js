var runSequence = require('run-sequence')

module.exports = function (cb) {
    runSequence(
      'clean',
     [ 'assets','styles','fonts','scripts','views' ],
     'html',
     cb
   )
}
