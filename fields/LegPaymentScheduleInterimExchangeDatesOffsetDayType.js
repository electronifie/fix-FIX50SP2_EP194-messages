var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangeDatesOffsetDayType (legPaymentScheduleInterimExchangeDatesOffsetDayType) {
  this.message = legPaymentScheduleInterimExchangeDatesOffsetDayType;
}

LegPaymentScheduleInterimExchangeDatesOffsetDayType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangeDatesOffsetDayType.Tag = '40412';

LegPaymentScheduleInterimExchangeDatesOffsetDayType.Type = 'INT';

module.exports = LegPaymentScheduleInterimExchangeDatesOffsetDayType;