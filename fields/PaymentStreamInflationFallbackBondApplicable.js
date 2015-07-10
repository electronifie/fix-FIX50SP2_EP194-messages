var invert = require('invert-obj');

function PaymentStreamInflationFallbackBondApplicable (paymentStreamInflationFallbackBondApplicable) {
  this.message = paymentStreamInflationFallbackBondApplicable;
}

PaymentStreamInflationFallbackBondApplicable.prototype.value = function () {
  return this.message;
};

PaymentStreamInflationFallbackBondApplicable.Tag = '40815';

PaymentStreamInflationFallbackBondApplicable.Type = 'BOOLEAN';

module.exports = PaymentStreamInflationFallbackBondApplicable;