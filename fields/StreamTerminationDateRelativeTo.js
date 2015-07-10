var invert = require('invert-obj');

function StreamTerminationDateRelativeTo (streamTerminationDateRelativeTo) {
  this.message = streamTerminationDateRelativeTo;
}

StreamTerminationDateRelativeTo.prototype.value = function () {
  return this.message;
};

StreamTerminationDateRelativeTo.Tag = '40068';

StreamTerminationDateRelativeTo.Type = 'INT';

module.exports = StreamTerminationDateRelativeTo;