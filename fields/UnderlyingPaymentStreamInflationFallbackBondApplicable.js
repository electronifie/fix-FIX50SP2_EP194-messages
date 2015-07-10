var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationFallbackBondApplicable (underlyingPaymentStreamInflationFallbackBondApplicable) {
  this.message = underlyingPaymentStreamInflationFallbackBondApplicable;
}

UnderlyingPaymentStreamInflationFallbackBondApplicable.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationFallbackBondApplicable.Tag = '40646';

UnderlyingPaymentStreamInflationFallbackBondApplicable.Type = 'BOOLEAN';

module.exports = UnderlyingPaymentStreamInflationFallbackBondApplicable;