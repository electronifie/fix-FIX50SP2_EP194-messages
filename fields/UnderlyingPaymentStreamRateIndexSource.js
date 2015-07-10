var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexSource (underlyingPaymentStreamRateIndexSource) {
  this.message = underlyingPaymentStreamRateIndexSource;
}

UnderlyingPaymentStreamRateIndexSource.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexSource.Tag = '40621';

UnderlyingPaymentStreamRateIndexSource.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateIndexSource;