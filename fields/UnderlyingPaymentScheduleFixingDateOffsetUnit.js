var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateOffsetUnit (underlyingPaymentScheduleFixingDateOffsetUnit) {
  this.message = underlyingPaymentScheduleFixingDateOffsetUnit;
}

UnderlyingPaymentScheduleFixingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateOffsetUnit.Tag = '40692';

UnderlyingPaymentScheduleFixingDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleFixingDateOffsetUnit;