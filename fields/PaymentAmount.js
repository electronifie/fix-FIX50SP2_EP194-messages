var invert = require('invert-obj');

function PaymentAmount (paymentAmount) {
  this.message = paymentAmount;
}

PaymentAmount.prototype.value = function () {
  return this.message;
};

PaymentAmount.Tag = '40217';

PaymentAmount.Type = 'AMT';

module.exports = PaymentAmount;