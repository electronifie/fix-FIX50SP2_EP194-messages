var invert = require('invert-obj');

function LegPaymentScheduleEndDateUnadjusted (legPaymentScheduleEndDateUnadjusted) {
  this.message = legPaymentScheduleEndDateUnadjusted;
}

LegPaymentScheduleEndDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleEndDateUnadjusted.Tag = '40378';

LegPaymentScheduleEndDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentScheduleEndDateUnadjusted;