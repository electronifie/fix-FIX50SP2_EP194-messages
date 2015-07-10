var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexLocation (underlyingPaymentStreamRateIndexLocation) {
  this.message = underlyingPaymentStreamRateIndexLocation;
}

UnderlyingPaymentStreamRateIndexLocation.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexLocation.Tag = '41913';

UnderlyingPaymentStreamRateIndexLocation.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateIndexLocation;