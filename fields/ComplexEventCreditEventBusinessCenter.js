var invert = require('invert-obj');

function ComplexEventCreditEventBusinessCenter (complexEventCreditEventBusinessCenter) {
  this.message = complexEventCreditEventBusinessCenter;
}

ComplexEventCreditEventBusinessCenter.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventBusinessCenter.Tag = '2135';

ComplexEventCreditEventBusinessCenter.Type = 'STRING';

module.exports = ComplexEventCreditEventBusinessCenter;