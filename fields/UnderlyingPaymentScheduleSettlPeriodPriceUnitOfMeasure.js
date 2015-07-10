var invert = require('invert-obj');

function UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure (underlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure) {
  this.message = underlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure;
}

UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure.Tag = '41889';

UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure;