var invert = require('invert-obj');

function LegPaymentScheduleRateUnitOfMeasure (legPaymentScheduleRateUnitOfMeasure) {
  this.message = legPaymentScheduleRateUnitOfMeasure;
}

LegPaymentScheduleRateUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleRateUnitOfMeasure.Tag = '41536';

LegPaymentScheduleRateUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentScheduleRateUnitOfMeasure;