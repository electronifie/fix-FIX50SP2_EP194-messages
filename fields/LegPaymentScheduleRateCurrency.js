var invert = require('invert-obj');

function LegPaymentScheduleRateCurrency (legPaymentScheduleRateCurrency) {
  this.message = legPaymentScheduleRateCurrency;
}

LegPaymentScheduleRateCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateCurrency.Tag = '41535';

LegPaymentScheduleRateCurrency.Type = 'CURRENCY';

module.exports = LegPaymentScheduleRateCurrency;