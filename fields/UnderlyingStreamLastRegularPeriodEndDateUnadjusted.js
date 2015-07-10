var invert = require('invert-obj');

function UnderlyingStreamLastRegularPeriodEndDateUnadjusted (underlyingStreamLastRegularPeriodEndDateUnadjusted) {
  this.message = underlyingStreamLastRegularPeriodEndDateUnadjusted;
}

UnderlyingStreamLastRegularPeriodEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamLastRegularPeriodEndDateUnadjusted.Tag = '40564';

UnderlyingStreamLastRegularPeriodEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamLastRegularPeriodEndDateUnadjusted;