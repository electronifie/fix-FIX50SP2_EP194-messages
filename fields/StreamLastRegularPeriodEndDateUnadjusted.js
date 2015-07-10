var invert = require('invert-obj');

function StreamLastRegularPeriodEndDateUnadjusted (streamLastRegularPeriodEndDateUnadjusted) {
  this.message = streamLastRegularPeriodEndDateUnadjusted;
}

StreamLastRegularPeriodEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamLastRegularPeriodEndDateUnadjusted.Tag = '40081';

StreamLastRegularPeriodEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamLastRegularPeriodEndDateUnadjusted;