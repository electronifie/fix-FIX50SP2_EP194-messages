var invert = require('invert-obj');

function LegPaymentStreamCalculationLagUnit (legPaymentStreamCalculationLagUnit) {
  this.message = legPaymentStreamCalculationLagUnit;
}

LegPaymentStreamCalculationLagUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamCalculationLagUnit.Tag = '41579';

LegPaymentStreamCalculationLagUnit.Type = 'STRING';

module.exports = LegPaymentStreamCalculationLagUnit;