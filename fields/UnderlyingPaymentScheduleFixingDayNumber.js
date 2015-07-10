var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDayNumber (underlyingPaymentScheduleFixingDayNumber) {
  this.message = underlyingPaymentScheduleFixingDayNumber;
}

UnderlyingPaymentScheduleFixingDayNumber.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDayNumber.Tag = '41880';

UnderlyingPaymentScheduleFixingDayNumber.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDayNumber;