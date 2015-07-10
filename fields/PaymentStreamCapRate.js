var invert = require('invert-obj');

function PaymentStreamCapRate (paymentStreamCapRate) {
  this.message = paymentStreamCapRate;
}

PaymentStreamCapRate.prototype.value = function () {
  return this.message;
};

PaymentStreamCapRate.Tag = '40797';

PaymentStreamCapRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamCapRate;