var invert = require('invert-obj');

function LegPaymentStreamPaymentOffsetDayType (legPaymentStreamPaymentOffsetDayType) {
  this.message = legPaymentStreamPaymentOffsetDayType;
}

LegPaymentStreamPaymentOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentOffsetDayType.Tag = '40302';

LegPaymentStreamPaymentOffsetDayType.Type = 'INT';

module.exports = LegPaymentStreamPaymentOffsetDayType;