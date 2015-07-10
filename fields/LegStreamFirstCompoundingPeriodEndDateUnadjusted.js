var invert = require('invert-obj');

function LegStreamFirstCompoundingPeriodEndDateUnadjusted (legStreamFirstCompoundingPeriodEndDateUnadjusted) {
  this.message = legStreamFirstCompoundingPeriodEndDateUnadjusted;
}

LegStreamFirstCompoundingPeriodEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamFirstCompoundingPeriodEndDateUnadjusted.Tag = '40272';

LegStreamFirstCompoundingPeriodEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamFirstCompoundingPeriodEndDateUnadjusted;