var invert = require('invert-obj');

function NoUnderlyingPaymentScheduleFixingDays (noUnderlyingPaymentScheduleFixingDays) {
  this.message = noUnderlyingPaymentScheduleFixingDays;
}

NoUnderlyingPaymentScheduleFixingDays.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentScheduleFixingDays.Tag = '41878';

NoUnderlyingPaymentScheduleFixingDays.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentScheduleFixingDays;