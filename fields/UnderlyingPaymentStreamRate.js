var invert = require('invert-obj');

function UnderlyingPaymentStreamRate (underlyingPaymentStreamRate) {
  this.message = underlyingPaymentStreamRate;
}

UnderlyingPaymentStreamRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRate.Tag = '40615';

UnderlyingPaymentStreamRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamRate;