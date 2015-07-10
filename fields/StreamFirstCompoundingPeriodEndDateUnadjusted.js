var invert = require('invert-obj');

function StreamFirstCompoundingPeriodEndDateUnadjusted (streamFirstCompoundingPeriodEndDateUnadjusted) {
  this.message = streamFirstCompoundingPeriodEndDateUnadjusted;
}

StreamFirstCompoundingPeriodEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamFirstCompoundingPeriodEndDateUnadjusted.Tag = '40080';

StreamFirstCompoundingPeriodEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamFirstCompoundingPeriodEndDateUnadjusted;