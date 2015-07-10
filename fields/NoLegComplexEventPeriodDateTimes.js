var invert = require('invert-obj');

function NoLegComplexEventPeriodDateTimes (noLegComplexEventPeriodDateTimes) {
  this.message = noLegComplexEventPeriodDateTimes;
}

NoLegComplexEventPeriodDateTimes.prototype.value = function () {
  return this.message;
};

NoLegComplexEventPeriodDateTimes.Tag = '41376';

NoLegComplexEventPeriodDateTimes.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventPeriodDateTimes;