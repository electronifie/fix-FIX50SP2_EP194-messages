var invert = require('invert-obj');

function UnderlyingStreamFirstPeriodStartDateAdjusted (underlyingStreamFirstPeriodStartDateAdjusted) {
  this.message = underlyingStreamFirstPeriodStartDateAdjusted;
}

UnderlyingStreamFirstPeriodStartDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamFirstPeriodStartDateAdjusted.Tag = '40561';

UnderlyingStreamFirstPeriodStartDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamFirstPeriodStartDateAdjusted;