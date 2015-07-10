var invert = require('invert-obj');

function LegPaymentStreamFixingDateBusinessDayConvention (legPaymentStreamFixingDateBusinessDayConvention) {
  this.message = legPaymentStreamFixingDateBusinessDayConvention;
}

LegPaymentStreamFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateBusinessDayConvention.Tag = '40317';

LegPaymentStreamFixingDateBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentStreamFixingDateBusinessDayConvention;