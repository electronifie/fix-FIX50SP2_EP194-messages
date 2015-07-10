var invert = require('invert-obj');

function PaymentUnitOfMeasure (paymentUnitOfMeasure) {
  this.message = paymentUnitOfMeasure;
}

PaymentUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentUnitOfMeasure.Tag = '41155';

PaymentUnitOfMeasure.Type = 'STRING';

module.exports = PaymentUnitOfMeasure;