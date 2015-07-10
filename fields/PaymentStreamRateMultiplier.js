var invert = require('invert-obj');

function PaymentStreamRateMultiplier (paymentStreamRateMultiplier) {
  this.message = paymentStreamRateMultiplier;
}

PaymentStreamRateMultiplier.prototype.value = function () {
  return this.message;
};

PaymentStreamRateMultiplier.Tag = '40793';

PaymentStreamRateMultiplier.Type = 'FLOAT';

module.exports = PaymentStreamRateMultiplier;