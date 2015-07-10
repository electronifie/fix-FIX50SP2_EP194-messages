var invert = require('invert-obj');

function LegPaymentStreamFixingDateOffsetPeriod (legPaymentStreamFixingDateOffsetPeriod) {
  this.message = legPaymentStreamFixingDateOffsetPeriod;
}

LegPaymentStreamFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateOffsetPeriod.Tag = '40319';

LegPaymentStreamFixingDateOffsetPeriod.Type = 'INT';

module.exports = LegPaymentStreamFixingDateOffsetPeriod;