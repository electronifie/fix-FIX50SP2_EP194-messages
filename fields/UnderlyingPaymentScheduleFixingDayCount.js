var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDayCount (underlyingPaymentScheduleFixingDayCount) {
  this.message = underlyingPaymentScheduleFixingDayCount;
}

UnderlyingPaymentScheduleFixingDayCount.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDayCount.Tag = '41892';

UnderlyingPaymentScheduleFixingDayCount.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDayCount;