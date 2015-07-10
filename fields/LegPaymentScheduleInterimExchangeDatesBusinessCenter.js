var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangeDatesBusinessCenter (legPaymentScheduleInterimExchangeDatesBusinessCenter) {
  this.message = legPaymentScheduleInterimExchangeDatesBusinessCenter;
}

LegPaymentScheduleInterimExchangeDatesBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangeDatesBusinessCenter.Tag = '40409';

LegPaymentScheduleInterimExchangeDatesBusinessCenter.Type = 'STRING';

module.exports = LegPaymentScheduleInterimExchangeDatesBusinessCenter;