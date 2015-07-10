var invert = require('invert-obj');

function LegPaymentStreamCalculationLagPeriod (legPaymentStreamCalculationLagPeriod) {
  this.message = legPaymentStreamCalculationLagPeriod;
}

LegPaymentStreamCalculationLagPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamCalculationLagPeriod.Tag = '41578';

LegPaymentStreamCalculationLagPeriod.Type = 'INT';

module.exports = LegPaymentStreamCalculationLagPeriod;