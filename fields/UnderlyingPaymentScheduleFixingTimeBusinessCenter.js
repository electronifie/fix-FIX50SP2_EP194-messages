var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingTimeBusinessCenter (underlyingPaymentScheduleFixingTimeBusinessCenter) {
  this.message = underlyingPaymentScheduleFixingTimeBusinessCenter;
}

UnderlyingPaymentScheduleFixingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingTimeBusinessCenter.Tag = '40696';

UnderlyingPaymentScheduleFixingTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleFixingTimeBusinessCenter;