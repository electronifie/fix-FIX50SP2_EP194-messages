var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateConversionFactor (underlyingPaymentScheduleRateConversionFactor) {
  this.message = underlyingPaymentScheduleRateConversionFactor;
}

UnderlyingPaymentScheduleRateConversionFactor.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateConversionFactor.Tag = '41885';

UnderlyingPaymentScheduleRateConversionFactor.Type = 'FLOAT';

module.exports = UnderlyingPaymentScheduleRateConversionFactor;