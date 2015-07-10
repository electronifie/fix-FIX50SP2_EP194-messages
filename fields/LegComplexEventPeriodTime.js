var invert = require('invert-obj');

function LegComplexEventPeriodTime (legComplexEventPeriodTime) {
  this.message = legComplexEventPeriodTime;
}

LegComplexEventPeriodTime.prototype.value = function () {
  return this.message;
};

LegComplexEventPeriodTime.Tag = '41378';

LegComplexEventPeriodTime.Type = 'LOCALMKTTIME';

module.exports = LegComplexEventPeriodTime;