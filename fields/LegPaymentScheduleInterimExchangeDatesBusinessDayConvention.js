var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangeDatesBusinessDayConvention (legPaymentScheduleInterimExchangeDatesBusinessDayConvention) {
  this.message = legPaymentScheduleInterimExchangeDatesBusinessDayConvention;
}

LegPaymentScheduleInterimExchangeDatesBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangeDatesBusinessDayConvention.Tag = '40408';

LegPaymentScheduleInterimExchangeDatesBusinessDayConvention.Type = 'INT';

module.exports = LegPaymentScheduleInterimExchangeDatesBusinessDayConvention;