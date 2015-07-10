var invert = require('invert-obj');

function LegStreamFirstPeriodStartDateAdjusted (legStreamFirstPeriodStartDateAdjusted) {
  this.message = legStreamFirstPeriodStartDateAdjusted;
}

LegStreamFirstPeriodStartDateAdjusted.prototype.value = function () {
  return this.message;
};

LegStreamFirstPeriodStartDateAdjusted.Tag = '40270';

LegStreamFirstPeriodStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamFirstPeriodStartDateAdjusted;