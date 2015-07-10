var invert = require('invert-obj');

function PaymentStreamFixedAmountUnitOfMeasure (paymentStreamFixedAmountUnitOfMeasure) {
  this.message = paymentStreamFixedAmountUnitOfMeasure;
}

PaymentStreamFixedAmountUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentStreamFixedAmountUnitOfMeasure.Tag = '41187';

PaymentStreamFixedAmountUnitOfMeasure.Type = 'STRING';

module.exports = PaymentStreamFixedAmountUnitOfMeasure;