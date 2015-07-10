var invert = require('invert-obj');

function LegPaymentStreamInflationFallbackBondApplicable (legPaymentStreamInflationFallbackBondApplicable) {
  this.message = legPaymentStreamInflationFallbackBondApplicable;
}

LegPaymentStreamInflationFallbackBondApplicable.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationFallbackBondApplicable.Tag = '40357';

LegPaymentStreamInflationFallbackBondApplicable.Type = 'BOOLEAN';

module.exports = LegPaymentStreamInflationFallbackBondApplicable;