var invert = require('invert-obj');

function PaymentScheduleRateUnitOfMeasure (paymentScheduleRateUnitOfMeasure) {
  this.message = paymentScheduleRateUnitOfMeasure;
}

PaymentScheduleRateUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateUnitOfMeasure.Tag = '41167';

PaymentScheduleRateUnitOfMeasure.Type = 'STRING';

module.exports = PaymentScheduleRateUnitOfMeasure;