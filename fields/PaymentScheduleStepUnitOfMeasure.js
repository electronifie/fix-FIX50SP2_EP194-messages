var invert = require('invert-obj');

function PaymentScheduleStepUnitOfMeasure (paymentScheduleStepUnitOfMeasure) {
  this.message = paymentScheduleStepUnitOfMeasure;
}

PaymentScheduleStepUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PaymentScheduleStepUnitOfMeasure.Tag = '41173';

PaymentScheduleStepUnitOfMeasure.Type = 'STRING';

module.exports = PaymentScheduleStepUnitOfMeasure;