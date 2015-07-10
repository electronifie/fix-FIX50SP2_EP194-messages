var invert = require('invert-obj');

function LegStreamFirstRegularPeriodStartDateUnadjusted (legStreamFirstRegularPeriodStartDateUnadjusted) {
  this.message = legStreamFirstRegularPeriodStartDateUnadjusted;
}

LegStreamFirstRegularPeriodStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamFirstRegularPeriodStartDateUnadjusted.Tag = '40271';

LegStreamFirstRegularPeriodStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamFirstRegularPeriodStartDateUnadjusted;