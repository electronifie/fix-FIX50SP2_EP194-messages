var invert = require('invert-obj');

function StreamTerminationDateAdjusted (streamTerminationDateAdjusted) {
  this.message = streamTerminationDateAdjusted;
}

StreamTerminationDateAdjusted.prototype.value = function () {
  return this.message;
};

StreamTerminationDateAdjusted.Tag = '40072';

StreamTerminationDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = StreamTerminationDateAdjusted;