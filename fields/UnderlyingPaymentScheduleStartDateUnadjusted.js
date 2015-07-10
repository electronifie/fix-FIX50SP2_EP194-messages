var invert = require('invert-obj');

function UnderlyingPaymentScheduleStartDateUnadjusted (underlyingPaymentScheduleStartDateUnadjusted) {
  this.message = underlyingPaymentScheduleStartDateUnadjusted;
}

UnderlyingPaymentScheduleStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStartDateUnadjusted.Tag = '40667';

UnderlyingPaymentScheduleStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentScheduleStartDateUnadjusted;