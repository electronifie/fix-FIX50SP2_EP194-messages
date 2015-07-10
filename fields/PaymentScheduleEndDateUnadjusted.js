var invert = require('invert-obj');

function PaymentScheduleEndDateUnadjusted (paymentScheduleEndDateUnadjusted) {
  this.message = paymentScheduleEndDateUnadjusted;
}

PaymentScheduleEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

PaymentScheduleEndDateUnadjusted.Tag = '40832';

PaymentScheduleEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentScheduleEndDateUnadjusted;