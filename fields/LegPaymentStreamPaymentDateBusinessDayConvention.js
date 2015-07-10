var invert = require('invert-obj');

function LegPaymentStreamPaymentDateBusinessDayConvention (legPaymentStreamPaymentDateBusinessDayConvention) {
  this.message = legPaymentStreamPaymentDateBusinessDayConvention;
}

LegPaymentStreamPaymentDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentDateBusinessDayConvention.Tag = '40292';

LegPaymentStreamPaymentDateBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentStreamPaymentDateBusinessDayConvention;