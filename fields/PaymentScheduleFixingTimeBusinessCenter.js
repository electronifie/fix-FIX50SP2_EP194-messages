var invert = require('invert-obj');

function PaymentScheduleFixingTimeBusinessCenter (paymentScheduleFixingTimeBusinessCenter) {
  this.message = paymentScheduleFixingTimeBusinessCenter;
}

PaymentScheduleFixingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingTimeBusinessCenter.Tag = '40860';

PaymentScheduleFixingTimeBusinessCenter.Type = 'STRING';

module.exports = PaymentScheduleFixingTimeBusinessCenter;