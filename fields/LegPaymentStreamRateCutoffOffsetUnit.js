var invert = require('invert-obj');

function LegPaymentStreamRateCutoffOffsetUnit (legPaymentStreamRateCutoffOffsetUnit) {
  this.message = legPaymentStreamRateCutoffOffsetUnit;
}

LegPaymentStreamRateCutoffOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateCutoffOffsetUnit.Tag = '40324';

LegPaymentStreamRateCutoffOffsetUnit.Type = 'STRING';

module.exports = LegPaymentStreamRateCutoffOffsetUnit;