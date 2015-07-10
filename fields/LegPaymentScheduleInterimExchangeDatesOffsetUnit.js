var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangeDatesOffsetUnit (legPaymentScheduleInterimExchangeDatesOffsetUnit) {
  this.message = legPaymentScheduleInterimExchangeDatesOffsetUnit;
}

LegPaymentScheduleInterimExchangeDatesOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangeDatesOffsetUnit.Tag = '40411';

LegPaymentScheduleInterimExchangeDatesOffsetUnit.Type = 'STRING';

module.exports = LegPaymentScheduleInterimExchangeDatesOffsetUnit;