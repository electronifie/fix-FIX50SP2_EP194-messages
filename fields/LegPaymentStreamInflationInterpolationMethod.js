var invert = require('invert-obj');

function LegPaymentStreamInflationInterpolationMethod (legPaymentStreamInflationInterpolationMethod) {
  this.message = legPaymentStreamInflationInterpolationMethod;
}

LegPaymentStreamInflationInterpolationMethod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInflationInterpolationMethod.Tag = '40353';

LegPaymentStreamInflationInterpolationMethod.Type = 'INT';

module.exports = LegPaymentStreamInflationInterpolationMethod;