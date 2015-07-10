var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateAdjusted (underlyingPaymentScheduleFixingDateAdjusted) {
  this.message = underlyingPaymentScheduleFixingDateAdjusted;
}

UnderlyingPaymentScheduleFixingDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateAdjusted.Tag = '40694';

UnderlyingPaymentScheduleFixingDateAdjusted.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleFixingDateAdjusted;