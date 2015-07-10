var invert = require('invert-obj');

function PaymentStreamCapRateSellSide (paymentStreamCapRateSellSide) {
  this.message = paymentStreamCapRateSellSide;
}

PaymentStreamCapRateSellSide.prototype.value = function () {
  return this.message;
};

PaymentStreamCapRateSellSide.Tag = '40799';

PaymentStreamCapRateSellSide.Type = 'INT';

module.exports = PaymentStreamCapRateSellSide;