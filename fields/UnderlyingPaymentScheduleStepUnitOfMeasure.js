var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepUnitOfMeasure (underlyingPaymentScheduleStepUnitOfMeasure) {
  this.message = underlyingPaymentScheduleStepUnitOfMeasure;
}

UnderlyingPaymentScheduleStepUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepUnitOfMeasure.Tag = '41890';

UnderlyingPaymentScheduleStepUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleStepUnitOfMeasure;