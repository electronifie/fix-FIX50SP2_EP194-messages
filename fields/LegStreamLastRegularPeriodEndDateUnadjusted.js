var invert = require('invert-obj');

function LegStreamLastRegularPeriodEndDateUnadjusted (legStreamLastRegularPeriodEndDateUnadjusted) {
  this.message = legStreamLastRegularPeriodEndDateUnadjusted;
}

LegStreamLastRegularPeriodEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamLastRegularPeriodEndDateUnadjusted.Tag = '40273';

LegStreamLastRegularPeriodEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamLastRegularPeriodEndDateUnadjusted;