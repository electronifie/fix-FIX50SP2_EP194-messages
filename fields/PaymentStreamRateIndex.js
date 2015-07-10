var invert = require('invert-obj');

function PaymentStreamRateIndex (paymentStreamRateIndex) {
  this.message = paymentStreamRateIndex;
}

PaymentStreamRateIndex.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndex.Tag = '40789';

PaymentStreamRateIndex.Type = 'STRING';

module.exports = PaymentStreamRateIndex;