var invert = require('invert-obj');

function LegPaymentStreamFixingDateOffsetUnit (legPaymentStreamFixingDateOffsetUnit) {
  this.message = legPaymentStreamFixingDateOffsetUnit;
}

LegPaymentStreamFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateOffsetUnit.Tag = '40320';

LegPaymentStreamFixingDateOffsetUnit.Type = 'STRING';

module.exports = LegPaymentStreamFixingDateOffsetUnit;