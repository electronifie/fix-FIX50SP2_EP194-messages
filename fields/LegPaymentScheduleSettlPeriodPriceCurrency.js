var invert = require('invert-obj');

function LegPaymentScheduleSettlPeriodPriceCurrency (legPaymentScheduleSettlPeriodPriceCurrency) {
  this.message = legPaymentScheduleSettlPeriodPriceCurrency;
}

LegPaymentScheduleSettlPeriodPriceCurrency.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleSettlPeriodPriceCurrency.Tag = '41540';

LegPaymentScheduleSettlPeriodPriceCurrency.Type = 'CURRENCY';

module.exports = LegPaymentScheduleSettlPeriodPriceCurrency;