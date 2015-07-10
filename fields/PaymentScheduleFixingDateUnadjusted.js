var invert = require('invert-obj');

function PaymentScheduleFixingDateUnadjusted (paymentScheduleFixingDateUnadjusted) {
  this.message = paymentScheduleFixingDateUnadjusted;
}

PaymentScheduleFixingDateUnadjusted.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDateUnadjusted.Tag = '40850';

PaymentScheduleFixingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentScheduleFixingDateUnadjusted;