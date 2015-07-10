var invert = require('invert-obj');

function PaymentStreamReferenceLevel (paymentStreamReferenceLevel) {
  this.message = paymentStreamReferenceLevel;
}

PaymentStreamReferenceLevel.prototype.value = function () {
  return this.message;
};

PaymentStreamReferenceLevel.Tag = '41200';

PaymentStreamReferenceLevel.Type = 'QTY';

module.exports = PaymentStreamReferenceLevel;