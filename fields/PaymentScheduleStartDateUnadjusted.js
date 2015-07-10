var invert = require('invert-obj');

function PaymentScheduleStartDateUnadjusted (paymentScheduleStartDateUnadjusted) {
  this.message = paymentScheduleStartDateUnadjusted;
}

PaymentScheduleStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

PaymentScheduleStartDateUnadjusted.Tag = '40831';

PaymentScheduleStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentScheduleStartDateUnadjusted;