var invert = require('invert-obj');

function PaymentStreamFinalRate (paymentStreamFinalRate) {
  this.message = paymentStreamFinalRate;
}

PaymentStreamFinalRate.prototype.value = function () {
  return this.message;
};

PaymentStreamFinalRate.Tag = '41208';

PaymentStreamFinalRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamFinalRate;