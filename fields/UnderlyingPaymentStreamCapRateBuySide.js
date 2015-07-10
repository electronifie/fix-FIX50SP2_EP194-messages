var invert = require('invert-obj');

function UnderlyingPaymentStreamCapRateBuySide (underlyingPaymentStreamCapRateBuySide) {
  this.message = underlyingPaymentStreamCapRateBuySide;
}

UnderlyingPaymentStreamCapRateBuySide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamCapRateBuySide.Tag = '40629';

UnderlyingPaymentStreamCapRateBuySide.Type = 'INT';

module.exports = UnderlyingPaymentStreamCapRateBuySide;