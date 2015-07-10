var invert = require('invert-obj');

function LegPaymentStreamAveragingMethod (legPaymentStreamAveragingMethod) {
  this.message = legPaymentStreamAveragingMethod;
}

LegPaymentStreamAveragingMethod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamAveragingMethod.Tag = '40348';

LegPaymentStreamAveragingMethod.Type = 'INT';

module.exports = LegPaymentStreamAveragingMethod;