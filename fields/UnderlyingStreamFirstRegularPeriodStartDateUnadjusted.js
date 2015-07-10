var invert = require('invert-obj');

function UnderlyingStreamFirstRegularPeriodStartDateUnadjusted (underlyingStreamFirstRegularPeriodStartDateUnadjusted) {
  this.message = underlyingStreamFirstRegularPeriodStartDateUnadjusted;
}

UnderlyingStreamFirstRegularPeriodStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamFirstRegularPeriodStartDateUnadjusted.Tag = '40562';

UnderlyingStreamFirstRegularPeriodStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamFirstRegularPeriodStartDateUnadjusted;