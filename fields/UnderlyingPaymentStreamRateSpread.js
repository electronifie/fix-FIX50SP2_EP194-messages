var invert = require('invert-obj');

function UnderlyingPaymentStreamRateSpread (underlyingPaymentStreamRateSpread) {
  this.message = underlyingPaymentStreamRateSpread;
}

UnderlyingPaymentStreamRateSpread.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateSpread.Tag = '40625';

UnderlyingPaymentStreamRateSpread.Type = 'PRICEOFFSET';

module.exports = UnderlyingPaymentStreamRateSpread;