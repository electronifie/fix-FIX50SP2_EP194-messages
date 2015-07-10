var invert = require('invert-obj');

function UnderlyingPaymentStreamCapRateSellSide (underlyingPaymentStreamCapRateSellSide) {
  this.message = underlyingPaymentStreamCapRateSellSide;
}

UnderlyingPaymentStreamCapRateSellSide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamCapRateSellSide.Tag = '40630';

UnderlyingPaymentStreamCapRateSellSide.Type = 'INT';

module.exports = UnderlyingPaymentStreamCapRateSellSide;