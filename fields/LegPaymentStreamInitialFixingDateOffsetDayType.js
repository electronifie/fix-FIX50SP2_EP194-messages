var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateOffsetDayType (legPaymentStreamInitialFixingDateOffsetDayType) {
  this.message = legPaymentStreamInitialFixingDateOffsetDayType;
}

LegPaymentStreamInitialFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateOffsetDayType.Tag = '40314';

LegPaymentStreamInitialFixingDateOffsetDayType.Type = 'INT';

module.exports = LegPaymentStreamInitialFixingDateOffsetDayType;