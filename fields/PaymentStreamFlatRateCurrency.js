var invert = require('invert-obj');

function PaymentStreamFlatRateCurrency (paymentStreamFlatRateCurrency) {
  this.message = paymentStreamFlatRateCurrency;
}

PaymentStreamFlatRateCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamFlatRateCurrency.Tag = '41182';

PaymentStreamFlatRateCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamFlatRateCurrency;