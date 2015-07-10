var invert = require('invert-obj');

function LegPaymentStreamResetDateBusinessDayConvention (legPaymentStreamResetDateBusinessDayConvention) {
  this.message = legPaymentStreamResetDateBusinessDayConvention;
}

LegPaymentStreamResetDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamResetDateBusinessDayConvention.Tag = '40304';

LegPaymentStreamResetDateBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentStreamResetDateBusinessDayConvention;