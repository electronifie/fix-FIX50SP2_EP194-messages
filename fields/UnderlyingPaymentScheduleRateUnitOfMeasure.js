var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateUnitOfMeasure (underlyingPaymentScheduleRateUnitOfMeasure) {
  this.message = underlyingPaymentScheduleRateUnitOfMeasure;
}

UnderlyingPaymentScheduleRateUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateUnitOfMeasure.Tag = '41884';

UnderlyingPaymentScheduleRateUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleRateUnitOfMeasure;