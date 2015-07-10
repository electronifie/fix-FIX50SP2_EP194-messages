var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexLevel (underlyingPaymentStreamRateIndexLevel) {
  this.message = underlyingPaymentStreamRateIndexLevel;
}

UnderlyingPaymentStreamRateIndexLevel.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexLevel.Tag = '41914';

UnderlyingPaymentStreamRateIndexLevel.Type = 'QTY';

module.exports = UnderlyingPaymentStreamRateIndexLevel;