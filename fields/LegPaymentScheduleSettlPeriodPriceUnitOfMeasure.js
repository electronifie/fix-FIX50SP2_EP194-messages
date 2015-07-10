var invert = require('invert-obj');

function LegPaymentScheduleSettlPeriodPriceUnitOfMeasure (legPaymentScheduleSettlPeriodPriceUnitOfMeasure) {
  this.message = legPaymentScheduleSettlPeriodPriceUnitOfMeasure;
}

LegPaymentScheduleSettlPeriodPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleSettlPeriodPriceUnitOfMeasure.Tag = '41541';

LegPaymentScheduleSettlPeriodPriceUnitOfMeasure.Type = 'STRING';

module.exports = LegPaymentScheduleSettlPeriodPriceUnitOfMeasure;