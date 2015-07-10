var invert = require('invert-obj');

function PaymentStreamReferenceLevelUnitOfMeasure (paymentStreamReferenceLevelUnitOfMeasure) {
  this.message = paymentStreamReferenceLevelUnitOfMeasure;
}

PaymentStreamReferenceLevelUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentStreamReferenceLevelUnitOfMeasure.Tag = '41201';

PaymentStreamReferenceLevelUnitOfMeasure.Type = 'STRING';

module.exports = PaymentStreamReferenceLevelUnitOfMeasure;