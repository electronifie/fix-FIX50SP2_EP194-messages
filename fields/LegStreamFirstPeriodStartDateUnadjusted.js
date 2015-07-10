var invert = require('invert-obj');

function LegStreamFirstPeriodStartDateUnadjusted (legStreamFirstPeriodStartDateUnadjusted) {
  this.message = legStreamFirstPeriodStartDateUnadjusted;
}

LegStreamFirstPeriodStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamFirstPeriodStartDateUnadjusted.Tag = '40267';

LegStreamFirstPeriodStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamFirstPeriodStartDateUnadjusted;