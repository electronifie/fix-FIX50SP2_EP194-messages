var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationInitialIndexLevel (underlyingPaymentStreamInflationInitialIndexLevel) {
  this.message = underlyingPaymentStreamInflationInitialIndexLevel;
}

UnderlyingPaymentStreamInflationInitialIndexLevel.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationInitialIndexLevel.Tag = '40645';

UnderlyingPaymentStreamInflationInitialIndexLevel.Type = 'FLOAT';

module.exports = UnderlyingPaymentStreamInflationInitialIndexLevel;