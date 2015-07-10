var invert = require('invert-obj');

function ComplexEventCreditEventDayType (complexEventCreditEventDayType) {
  this.message = complexEventCreditEventDayType;
}

ComplexEventCreditEventDayType.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventDayType.Tag = '41003';

ComplexEventCreditEventDayType.Type = 'INT';

module.exports = ComplexEventCreditEventDayType;