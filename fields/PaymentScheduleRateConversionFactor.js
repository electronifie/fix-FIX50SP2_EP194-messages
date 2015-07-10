var invert = require('invert-obj');

function PaymentScheduleRateConversionFactor (paymentScheduleRateConversionFactor) {
  this.message = paymentScheduleRateConversionFactor;
}

PaymentScheduleRateConversionFactor.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateConversionFactor.Tag = '41168';

PaymentScheduleRateConversionFactor.Type = 'FLOAT';

module.exports = PaymentScheduleRateConversionFactor;