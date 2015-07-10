var invert = require('invert-obj');

function StreamFirstRegularPeriodStartDateUnadjusted (streamFirstRegularPeriodStartDateUnadjusted) {
  this.message = streamFirstRegularPeriodStartDateUnadjusted;
}

StreamFirstRegularPeriodStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamFirstRegularPeriodStartDateUnadjusted.Tag = '40079';

StreamFirstRegularPeriodStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamFirstRegularPeriodStartDateUnadjusted;