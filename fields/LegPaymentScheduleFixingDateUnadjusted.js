var invert = require('invert-obj');

function LegPaymentScheduleFixingDateUnadjusted (legPaymentScheduleFixingDateUnadjusted) {
  this.message = legPaymentScheduleFixingDateUnadjusted;
}

LegPaymentScheduleFixingDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleFixingDateUnadjusted.Tag = '40396';

LegPaymentScheduleFixingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentScheduleFixingDateUnadjusted;