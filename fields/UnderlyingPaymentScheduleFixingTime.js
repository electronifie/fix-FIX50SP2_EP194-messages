var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingTime (underlyingPaymentScheduleFixingTime) {
  this.message = underlyingPaymentScheduleFixingTime;
}

UnderlyingPaymentScheduleFixingTime.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingTime.Tag = '40695';

UnderlyingPaymentScheduleFixingTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingPaymentScheduleFixingTime;