var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDayOfWeek (underlyingPaymentScheduleFixingDayOfWeek) {
  this.message = underlyingPaymentScheduleFixingDayOfWeek;
}

UnderlyingPaymentScheduleFixingDayOfWeek.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDayOfWeek.Tag = '41879';

UnderlyingPaymentScheduleFixingDayOfWeek.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDayOfWeek;