var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateBusinessDayConvention (legPaymentStreamInitialFixingDateBusinessDayConvention) {
  this.message = legPaymentStreamInitialFixingDateBusinessDayConvention;
}

LegPaymentStreamInitialFixingDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateBusinessDayConvention.Tag = '40310';

LegPaymentStreamInitialFixingDateBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentStreamInitialFixingDateBusinessDayConvention;