var invert = require('invert-obj');

function LegPaymentScheduleSettlPeriodPrice (legPaymentScheduleSettlPeriodPrice) {
  this.message = legPaymentScheduleSettlPeriodPrice;
}

LegPaymentScheduleSettlPeriodPrice.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleSettlPeriodPrice.Tag = '41539';

LegPaymentScheduleSettlPeriodPrice.Type = 'PRICE';

module.exports = LegPaymentScheduleSettlPeriodPrice;