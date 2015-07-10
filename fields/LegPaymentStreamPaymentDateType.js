var invert = require('invert-obj');

function LegPaymentStreamPaymentDateType (legPaymentStreamPaymentDateType) {
  this.message = legPaymentStreamPaymentDateType;
}

LegPaymentStreamPaymentDateType.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentDateType.Tag = '41591';

LegPaymentStreamPaymentDateType.Type = 'INT';

module.exports = LegPaymentStreamPaymentDateType;