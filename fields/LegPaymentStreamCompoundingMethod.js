var invert = require('invert-obj');

function LegPaymentStreamCompoundingMethod (legPaymentStreamCompoundingMethod) {
  this.message = legPaymentStreamCompoundingMethod;
}

LegPaymentStreamCompoundingMethod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamCompoundingMethod.Tag = '40288';

LegPaymentStreamCompoundingMethod.Type = 'INT';

module.exports = LegPaymentStreamCompoundingMethod;