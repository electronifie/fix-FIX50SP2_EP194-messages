var invert = require('invert-obj');

function PaymentStreamFlatRateIndicator (paymentStreamFlatRateIndicator) {
  this.message = paymentStreamFlatRateIndicator;
}

PaymentStreamFlatRateIndicator.prototype.value = function () {
  return this.message;
};

PaymentStreamFlatRateIndicator.Tag = '41180';

PaymentStreamFlatRateIndicator.Type = 'BOOLEAN';

module.exports = PaymentStreamFlatRateIndicator;