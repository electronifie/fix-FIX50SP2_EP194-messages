var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateOffsetDayType (underlyingPaymentScheduleFixingDateOffsetDayType) {
  this.message = underlyingPaymentScheduleFixingDateOffsetDayType;
}

UnderlyingPaymentScheduleFixingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateOffsetDayType.Tag = '40693';

UnderlyingPaymentScheduleFixingDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDateOffsetDayType;