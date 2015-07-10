var invert = require('invert-obj');

function LegPaymentScheduleStartDateUnadjusted (legPaymentScheduleStartDateUnadjusted) {
  this.message = legPaymentScheduleStartDateUnadjusted;
}

LegPaymentScheduleStartDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStartDateUnadjusted.Tag = '40377';

LegPaymentScheduleStartDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentScheduleStartDateUnadjusted;