var invert = require('invert-obj');

function LegPaymentScheduleFixedCurrency (legPaymentScheduleFixedCurrency) {
  this.message = legPaymentScheduleFixedCurrency;
}

LegPaymentScheduleFixedCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixedCurrency.Tag = '40389';

LegPaymentScheduleFixedCurrency.Type = 'CURRENCY';

module.exports = LegPaymentScheduleFixedCurrency;