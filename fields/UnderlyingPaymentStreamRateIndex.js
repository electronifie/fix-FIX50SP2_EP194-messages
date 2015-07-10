var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndex (underlyingPaymentStreamRateIndex) {
  this.message = underlyingPaymentStreamRateIndex;
}

UnderlyingPaymentStreamRateIndex.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndex.Tag = '40620';

UnderlyingPaymentStreamRateIndex.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateIndex;