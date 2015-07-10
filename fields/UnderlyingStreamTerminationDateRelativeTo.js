var invert = require('invert-obj');

function UnderlyingStreamTerminationDateRelativeTo (underlyingStreamTerminationDateRelativeTo) {
  this.message = underlyingStreamTerminationDateRelativeTo;
}

UnderlyingStreamTerminationDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateRelativeTo.Tag = '40551';

UnderlyingStreamTerminationDateRelativeTo.Type = 'INT';

module.exports = UnderlyingStreamTerminationDateRelativeTo;