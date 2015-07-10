var invert = require('invert-obj');

function PaymentStreamInitialRate (paymentStreamInitialRate) {
  this.message = paymentStreamInitialRate;
}

PaymentStreamInitialRate.prototype.value = function () {
  return this.message;
};

PaymentStreamInitialRate.Tag = '40803';

PaymentStreamInitialRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamInitialRate;