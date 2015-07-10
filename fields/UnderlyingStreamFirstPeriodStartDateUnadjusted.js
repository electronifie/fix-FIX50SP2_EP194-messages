var invert = require('invert-obj');

function UnderlyingStreamFirstPeriodStartDateUnadjusted (underlyingStreamFirstPeriodStartDateUnadjusted) {
  this.message = underlyingStreamFirstPeriodStartDateUnadjusted;
}

UnderlyingStreamFirstPeriodStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamFirstPeriodStartDateUnadjusted.Tag = '40558';

UnderlyingStreamFirstPeriodStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamFirstPeriodStartDateUnadjusted;