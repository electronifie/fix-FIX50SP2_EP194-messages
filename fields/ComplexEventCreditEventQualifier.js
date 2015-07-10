var invert = require('invert-obj');

function ComplexEventCreditEventQualifier (complexEventCreditEventQualifier) {
  this.message = complexEventCreditEventQualifier;
}

ComplexEventCreditEventQualifier.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventQualifier.Tag = '41006';

ComplexEventCreditEventQualifier.Type = 'CHAR';

module.exports = ComplexEventCreditEventQualifier;