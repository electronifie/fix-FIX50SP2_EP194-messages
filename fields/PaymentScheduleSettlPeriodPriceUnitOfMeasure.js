var invert = require('invert-obj');

function PaymentScheduleSettlPeriodPriceUnitOfMeasure (paymentScheduleSettlPeriodPriceUnitOfMeasure) {
  this.message = paymentScheduleSettlPeriodPriceUnitOfMeasure;
}

PaymentScheduleSettlPeriodPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentScheduleSettlPeriodPriceUnitOfMeasure.Tag = '41172';

PaymentScheduleSettlPeriodPriceUnitOfMeasure.Type = 'STRING';

module.exports = PaymentScheduleSettlPeriodPriceUnitOfMeasure;