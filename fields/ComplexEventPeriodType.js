var invert = require('invert-obj');

function ComplexEventPeriodType (complexEventPeriodType) {
  this.message = complexEventPeriodType;
}

ComplexEventPeriodType.prototype.value = function () {
  return this.message;
};


ComplexEventPeriodType.Keys = {
  'ASIAN_OUT': '0',
  'ASIAN_IN': '1',
  'BARRIER_CAP': '2',
  'BARRIER_FLOOR': '3',
  'KNOCK_OUT': '4',
  'KNOCK_IN': '5',
};

ComplexEventPeriodType.Tag = '41011';

ComplexEventPeriodType.Type = 'INT';

ComplexEventPeriodType.Values = invert(ComplexEventPeriodType.Keys);

module.exports = ComplexEventPeriodType;