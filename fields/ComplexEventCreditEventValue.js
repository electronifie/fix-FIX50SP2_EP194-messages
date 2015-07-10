var invert = require('invert-obj');

function ComplexEventCreditEventValue (complexEventCreditEventValue) {
  this.message = complexEventCreditEventValue;
}

ComplexEventCreditEventValue.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventValue.Tag = '40999';

ComplexEventCreditEventValue.Type = 'STRING';

module.exports = ComplexEventCreditEventValue;