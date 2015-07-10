var invert = require('invert-obj');

function LegPaymentStreamRateCutoffOffsetPeriod (legPaymentStreamRateCutoffOffsetPeriod) {
  this.message = legPaymentStreamRateCutoffOffsetPeriod;
}

LegPaymentStreamRateCutoffOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateCutoffOffsetPeriod.Tag = '40323';

LegPaymentStreamRateCutoffOffsetPeriod.Type = 'INT';

module.exports = LegPaymentStreamRateCutoffOffsetPeriod;