var invert = require('invert-obj');

function ComplexEventPeriodTime (complexEventPeriodTime) {
  this.message = complexEventPeriodTime;
}

ComplexEventPeriodTime.prototype.value = function () {
  return this.message;
};

ComplexEventPeriodTime.Tag = '41009';

ComplexEventPeriodTime.Type = 'LOCALMKTTIME';

module.exports = ComplexEventPeriodTime;