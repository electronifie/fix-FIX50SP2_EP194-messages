var invert = require('invert-obj');

function UnderlyingPaymentStreamFlatRateIndicator (underlyingPaymentStreamFlatRateIndicator) {
  this.message = underlyingPaymentStreamFlatRateIndicator;
}

UnderlyingPaymentStreamFlatRateIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFlatRateIndicator.Tag = '41897';

UnderlyingPaymentStreamFlatRateIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamFlatRateIndicator;