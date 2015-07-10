var invert = require('invert-obj');

function PaymentText (paymentText) {
  this.message = paymentText;
}

PaymentText.prototype.value = function () {
  return this.message;
};

PaymentText.Tag = '40229';

PaymentText.Type = 'STRING';

module.exports = PaymentText;