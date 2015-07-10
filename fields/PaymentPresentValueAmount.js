var invert = require('invert-obj');

function PaymentPresentValueAmount (paymentPresentValueAmount) {
  this.message = paymentPresentValueAmount;
}

PaymentPresentValueAmount.prototype.value = function () {
  return this.message;
};

PaymentPresentValueAmount.Tag = '40225';

PaymentPresentValueAmount.Type = 'AMT';

module.exports = PaymentPresentValueAmount;