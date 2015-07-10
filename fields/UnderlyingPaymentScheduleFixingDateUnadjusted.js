var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateUnadjusted (underlyingPaymentScheduleFixingDateUnadjusted) {
  this.message = underlyingPaymentScheduleFixingDateUnadjusted;
}

UnderlyingPaymentScheduleFixingDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateUnadjusted.Tag = '40686';

UnderlyingPaymentScheduleFixingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentScheduleFixingDateUnadjusted;