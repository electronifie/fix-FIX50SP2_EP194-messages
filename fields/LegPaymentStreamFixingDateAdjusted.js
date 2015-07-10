var invert = require('invert-obj');

function LegPaymentStreamFixingDateAdjusted (legPaymentStreamFixingDateAdjusted) {
  this.message = legPaymentStreamFixingDateAdjusted;
}

LegPaymentStreamFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateAdjusted.Tag = '40322';

LegPaymentStreamFixingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamFixingDateAdjusted;