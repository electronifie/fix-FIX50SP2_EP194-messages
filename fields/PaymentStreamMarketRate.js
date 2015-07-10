var invert = require('invert-obj');

function PaymentStreamMarketRate (paymentStreamMarketRate) {
  this.message = paymentStreamMarketRate;
}

PaymentStreamMarketRate.prototype.value = function () {
  return this.message;
};

PaymentStreamMarketRate.Tag = '40739';

PaymentStreamMarketRate.Type = 'INT';

module.exports = PaymentStreamMarketRate;