var invert = require('invert-obj');

function UnderlyingPaymentScheduleSettlPeriodPriceCurrency (underlyingPaymentScheduleSettlPeriodPriceCurrency) {
  this.message = underlyingPaymentScheduleSettlPeriodPriceCurrency;
}

UnderlyingPaymentScheduleSettlPeriodPriceCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleSettlPeriodPriceCurrency.Tag = '41888';

UnderlyingPaymentScheduleSettlPeriodPriceCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentScheduleSettlPeriodPriceCurrency;