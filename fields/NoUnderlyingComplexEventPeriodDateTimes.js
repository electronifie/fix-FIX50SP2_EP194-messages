var invert = require('invert-obj');

function NoUnderlyingComplexEventPeriodDateTimes (noUnderlyingComplexEventPeriodDateTimes) {
  this.message = noUnderlyingComplexEventPeriodDateTimes;
}

NoUnderlyingComplexEventPeriodDateTimes.prototype.value = function () {
  return this.message;
};

NoUnderlyingComplexEventPeriodDateTimes.Tag = '41726';

NoUnderlyingComplexEventPeriodDateTimes.Type = 'NUMINGROUP';

module.exports = NoUnderlyingComplexEventPeriodDateTimes;