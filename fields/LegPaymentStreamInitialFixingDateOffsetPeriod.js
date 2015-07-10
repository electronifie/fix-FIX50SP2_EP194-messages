var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateOffsetPeriod (legPaymentStreamInitialFixingDateOffsetPeriod) {
  this.message = legPaymentStreamInitialFixingDateOffsetPeriod;
}

LegPaymentStreamInitialFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateOffsetPeriod.Tag = '40312';

LegPaymentStreamInitialFixingDateOffsetPeriod.Type = 'INT';

module.exports = LegPaymentStreamInitialFixingDateOffsetPeriod;