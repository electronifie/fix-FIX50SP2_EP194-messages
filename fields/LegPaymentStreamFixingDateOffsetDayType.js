var invert = require('invert-obj');

function LegPaymentStreamFixingDateOffsetDayType (legPaymentStreamFixingDateOffsetDayType) {
  this.message = legPaymentStreamFixingDateOffsetDayType;
}

LegPaymentStreamFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateOffsetDayType.Tag = '40321';

LegPaymentStreamFixingDateOffsetDayType.Type = 'INT';

module.exports = LegPaymentStreamFixingDateOffsetDayType;