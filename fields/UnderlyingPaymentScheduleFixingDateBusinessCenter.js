var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateBusinessCenter (underlyingPaymentScheduleFixingDateBusinessCenter) {
  this.message = underlyingPaymentScheduleFixingDateBusinessCenter;
}

UnderlyingPaymentScheduleFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateBusinessCenter.Tag = '40690';

UnderlyingPaymentScheduleFixingDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleFixingDateBusinessCenter;