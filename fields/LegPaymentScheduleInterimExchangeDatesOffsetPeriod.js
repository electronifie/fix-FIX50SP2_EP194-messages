var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangeDatesOffsetPeriod (legPaymentScheduleInterimExchangeDatesOffsetPeriod) {
  this.message = legPaymentScheduleInterimExchangeDatesOffsetPeriod;
}

LegPaymentScheduleInterimExchangeDatesOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangeDatesOffsetPeriod.Tag = '40410';

LegPaymentScheduleInterimExchangeDatesOffsetPeriod.Type = 'INT';

module.exports = LegPaymentScheduleInterimExchangeDatesOffsetPeriod;