var invert = require('invert-obj');

function PaymentScheduleRateSourceType (paymentScheduleRateSourceType) {
  this.message = paymentScheduleRateSourceType;
}

PaymentScheduleRateSourceType.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateSourceType.Tag = '40870';

PaymentScheduleRateSourceType.Type = 'INT';

module.exports = PaymentScheduleRateSourceType;