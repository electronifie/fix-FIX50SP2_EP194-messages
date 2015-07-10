var invert = require('invert-obj');

function LegPaymentScheduleRateSourceType (legPaymentScheduleRateSourceType) {
  this.message = legPaymentScheduleRateSourceType;
}

LegPaymentScheduleRateSourceType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateSourceType.Tag = '40416';

LegPaymentScheduleRateSourceType.Type = 'INT';

module.exports = LegPaymentScheduleRateSourceType;