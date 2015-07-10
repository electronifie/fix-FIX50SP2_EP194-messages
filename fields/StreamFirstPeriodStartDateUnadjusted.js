var invert = require('invert-obj');

function StreamFirstPeriodStartDateUnadjusted (streamFirstPeriodStartDateUnadjusted) {
  this.message = streamFirstPeriodStartDateUnadjusted;
}

StreamFirstPeriodStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamFirstPeriodStartDateUnadjusted.Tag = '40075';

StreamFirstPeriodStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamFirstPeriodStartDateUnadjusted;