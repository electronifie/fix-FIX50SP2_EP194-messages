var invert = require('invert-obj');

function LegPaymentStreamInflationLagPeriod (legPaymentStreamInflationLagPeriod) {
  this.message = legPaymentStreamInflationLagPeriod;
}

LegPaymentStreamInflationLagPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationLagPeriod.Tag = '40350';

LegPaymentStreamInflationLagPeriod.Type = 'INT';

module.exports = LegPaymentStreamInflationLagPeriod;