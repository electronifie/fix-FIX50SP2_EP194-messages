var invert = require('invert-obj');

function UnderlyingPaymentStreamMarketRate (underlyingPaymentStreamMarketRate) {
  this.message = underlyingPaymentStreamMarketRate;
}

UnderlyingPaymentStreamMarketRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamMarketRate.Tag = '40569';

UnderlyingPaymentStreamMarketRate.Type = 'INT';

module.exports = UnderlyingPaymentStreamMarketRate;