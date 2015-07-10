var invert = require('invert-obj');

function LegPaymentStreamRateCutoffOffsetDayType (legPaymentStreamRateCutoffOffsetDayType) {
  this.message = legPaymentStreamRateCutoffOffsetDayType;
}

LegPaymentStreamRateCutoffOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamRateCutoffOffsetDayType.Tag = '40325';

LegPaymentStreamRateCutoffOffsetDayType.Type = 'INT';

module.exports = LegPaymentStreamRateCutoffOffsetDayType;