var invert = require('invert-obj');

function PaymentScheduleFixedCurrency (paymentScheduleFixedCurrency) {
  this.message = paymentScheduleFixedCurrency;
}

PaymentScheduleFixedCurrency.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixedCurrency.Tag = '40843';

PaymentScheduleFixedCurrency.Type = 'CURRENCY';

module.exports = PaymentScheduleFixedCurrency;