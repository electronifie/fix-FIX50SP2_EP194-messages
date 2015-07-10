var invert = require('invert-obj');

function ComplexEventCreditEventType (complexEventCreditEventType) {
  this.message = complexEventCreditEventType;
}

ComplexEventCreditEventType.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventType.Tag = '40998';

ComplexEventCreditEventType.Type = 'STRING';

module.exports = ComplexEventCreditEventType;