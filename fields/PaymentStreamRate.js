var invert = require('invert-obj');

function PaymentStreamRate (paymentStreamRate) {
  this.message = paymentStreamRate;
}

PaymentStreamRate.prototype.value = function () {
  return this.message;
};

PaymentStreamRate.Tag = '40784';

PaymentStreamRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamRate;