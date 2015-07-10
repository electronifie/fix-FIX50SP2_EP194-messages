var invert = require('invert-obj');

function PaymentScheduleSettlPeriodPriceCurrency (paymentScheduleSettlPeriodPriceCurrency) {
  this.message = paymentScheduleSettlPeriodPriceCurrency;
}

PaymentScheduleSettlPeriodPriceCurrency.prototype.value = function () {
  return this.message;
};

PaymentScheduleSettlPeriodPriceCurrency.Tag = '41171';

PaymentScheduleSettlPeriodPriceCurrency.Type = 'CURRENCY';

module.exports = PaymentScheduleSettlPeriodPriceCurrency;