var invert = require('invert-obj');

function StreamTerminationDateOffsetUnit (streamTerminationDateOffsetUnit) {
  this.message = streamTerminationDateOffsetUnit;
}

StreamTerminationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

StreamTerminationDateOffsetUnit.Tag = '40070';

StreamTerminationDateOffsetUnit.Type = 'STRING';

module.exports = StreamTerminationDateOffsetUnit;