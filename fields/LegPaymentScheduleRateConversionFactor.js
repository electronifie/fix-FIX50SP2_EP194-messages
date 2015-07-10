var invert = require('invert-obj');

function LegPaymentScheduleRateConversionFactor (legPaymentScheduleRateConversionFactor) {
  this.message = legPaymentScheduleRateConversionFactor;
}

LegPaymentScheduleRateConversionFactor.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateConversionFactor.Tag = '41537';

LegPaymentScheduleRateConversionFactor.Type = 'FLOAT';

module.exports = LegPaymentScheduleRateConversionFactor;