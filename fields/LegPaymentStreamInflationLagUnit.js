var invert = require('invert-obj');

function LegPaymentStreamInflationLagUnit (legPaymentStreamInflationLagUnit) {
  this.message = legPaymentStreamInflationLagUnit;
}

LegPaymentStreamInflationLagUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationLagUnit.Tag = '40351';

LegPaymentStreamInflationLagUnit.Type = 'STRING';

module.exports = LegPaymentStreamInflationLagUnit;