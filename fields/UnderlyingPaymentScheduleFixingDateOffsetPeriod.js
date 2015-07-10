var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateOffsetPeriod (underlyingPaymentScheduleFixingDateOffsetPeriod) {
  this.message = underlyingPaymentScheduleFixingDateOffsetPeriod;
}

UnderlyingPaymentScheduleFixingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateOffsetPeriod.Tag = '40691';

UnderlyingPaymentScheduleFixingDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDateOffsetPeriod;