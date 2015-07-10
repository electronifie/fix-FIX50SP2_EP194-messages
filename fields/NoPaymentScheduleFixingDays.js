var invert = require('invert-obj');

function NoPaymentScheduleFixingDays (noPaymentScheduleFixingDays) {
  this.message = noPaymentScheduleFixingDays;
}

NoPaymentScheduleFixingDays.prototype.value = function () {
  return this.message;
};

NoPaymentScheduleFixingDays.Tag = '41161';

NoPaymentScheduleFixingDays.Type = 'NUMINGROUP';

module.exports = NoPaymentScheduleFixingDays;