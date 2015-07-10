var invert = require('invert-obj');

function ComplexEventCreditEventUnit (complexEventCreditEventUnit) {
  this.message = complexEventCreditEventUnit;
}

ComplexEventCreditEventUnit.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventUnit.Tag = '41002';

ComplexEventCreditEventUnit.Type = 'STRING';

module.exports = ComplexEventCreditEventUnit;