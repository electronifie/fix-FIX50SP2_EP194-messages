var invert = require('invert-obj');

function UnderlyingPaymentScheduleEndDateUnadjusted (underlyingPaymentScheduleEndDateUnadjusted) {
  this.message = underlyingPaymentScheduleEndDateUnadjusted;
}

UnderlyingPaymentScheduleEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleEndDateUnadjusted.Tag = '40668';

UnderlyingPaymentScheduleEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentScheduleEndDateUnadjusted;