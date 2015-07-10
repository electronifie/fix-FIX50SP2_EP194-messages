var invert = require('invert-obj');

function PaymentScheduleSettlPeriodPrice (paymentScheduleSettlPeriodPrice) {
  this.message = paymentScheduleSettlPeriodPrice;
}

PaymentScheduleSettlPeriodPrice.prototype.value = function () {
  return this.message;
};

PaymentScheduleSettlPeriodPrice.Tag = '41170';

PaymentScheduleSettlPeriodPrice.Type = 'PRICE';

module.exports = PaymentScheduleSettlPeriodPrice;