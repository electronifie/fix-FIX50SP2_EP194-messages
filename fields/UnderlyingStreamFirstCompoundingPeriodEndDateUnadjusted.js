var invert = require('invert-obj');

function UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted (underlyingStreamFirstCompoundingPeriodEndDateUnadjusted) {
  this.message = underlyingStreamFirstCompoundingPeriodEndDateUnadjusted;
}

UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted.Tag = '40563';

UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted;