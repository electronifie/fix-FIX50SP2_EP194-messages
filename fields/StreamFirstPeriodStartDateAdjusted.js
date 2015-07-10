var invert = require('invert-obj');

function StreamFirstPeriodStartDateAdjusted (streamFirstPeriodStartDateAdjusted) {
  this.message = streamFirstPeriodStartDateAdjusted;
}

StreamFirstPeriodStartDateAdjusted.prototype.value = function () {
  return this.message;
};

StreamFirstPeriodStartDateAdjusted.Tag = '40078';

StreamFirstPeriodStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = StreamFirstPeriodStartDateAdjusted;