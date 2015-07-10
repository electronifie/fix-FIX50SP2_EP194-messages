var invert = require('invert-obj');

function UnderlyingPaymentStreamRateMultiplier (underlyingPaymentStreamRateMultiplier) {
  this.message = underlyingPaymentStreamRateMultiplier;
}

UnderlyingPaymentStreamRateMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateMultiplier.Tag = '40624';

UnderlyingPaymentStreamRateMultiplier.Type = 'FLOAT';

module.exports = UnderlyingPaymentStreamRateMultiplier;