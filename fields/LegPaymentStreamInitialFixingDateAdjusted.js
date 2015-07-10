var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateAdjusted (legPaymentStreamInitialFixingDateAdjusted) {
  this.message = legPaymentStreamInitialFixingDateAdjusted;
}

LegPaymentStreamInitialFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateAdjusted.Tag = '40315';

LegPaymentStreamInitialFixingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamInitialFixingDateAdjusted;