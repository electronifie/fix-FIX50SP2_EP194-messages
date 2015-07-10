var invert = require('invert-obj');

function LegPaymentStreamInflationLagDayType (legPaymentStreamInflationLagDayType) {
  this.message = legPaymentStreamInflationLagDayType;
}

LegPaymentStreamInflationLagDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationLagDayType.Tag = '40352';

LegPaymentStreamInflationLagDayType.Type = 'INT';

module.exports = LegPaymentStreamInflationLagDayType;