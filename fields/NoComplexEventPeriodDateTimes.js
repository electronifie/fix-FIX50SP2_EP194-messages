var invert = require('invert-obj');

function NoComplexEventPeriodDateTimes (noComplexEventPeriodDateTimes) {
  this.message = noComplexEventPeriodDateTimes;
}

NoComplexEventPeriodDateTimes.prototype.value = function () {
  return this.message;
};

NoComplexEventPeriodDateTimes.Tag = '41007';

NoComplexEventPeriodDateTimes.Type = 'NUMINGROUP';

module.exports = NoComplexEventPeriodDateTimes;