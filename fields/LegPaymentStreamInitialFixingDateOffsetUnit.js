var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateOffsetUnit (legPaymentStreamInitialFixingDateOffsetUnit) {
  this.message = legPaymentStreamInitialFixingDateOffsetUnit;
}

LegPaymentStreamInitialFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateOffsetUnit.Tag = '40313';

LegPaymentStreamInitialFixingDateOffsetUnit.Type = 'STRING';

module.exports = LegPaymentStreamInitialFixingDateOffsetUnit;