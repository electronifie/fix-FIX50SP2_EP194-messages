var invert = require('invert-obj');

function PaymentScheduleRateSource (paymentScheduleRateSource) {
  this.message = paymentScheduleRateSource;
}

PaymentScheduleRateSource.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateSource.Tag = '40869';

PaymentScheduleRateSource.Type = 'INT';

module.exports = PaymentScheduleRateSource;