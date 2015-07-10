var invert = require('invert-obj');

function UnderlyingPaymentScheduleSettlPeriodPrice (underlyingPaymentScheduleSettlPeriodPrice) {
  this.message = underlyingPaymentScheduleSettlPeriodPrice;
}

UnderlyingPaymentScheduleSettlPeriodPrice.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleSettlPeriodPrice.Tag = '41887';

UnderlyingPaymentScheduleSettlPeriodPrice.Type = 'PRICE';

module.exports = UnderlyingPaymentScheduleSettlPeriodPrice;