var invert = require('invert-obj');

function PaymentScheduleRateCurrency (paymentScheduleRateCurrency) {
  this.message = paymentScheduleRateCurrency;
}

PaymentScheduleRateCurrency.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateCurrency.Tag = '41166';

PaymentScheduleRateCurrency.Type = 'CURRENCY';

module.exports = PaymentScheduleRateCurrency;