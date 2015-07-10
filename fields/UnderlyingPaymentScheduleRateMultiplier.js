var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateMultiplier (underlyingPaymentScheduleRateMultiplier) {
  this.message = underlyingPaymentScheduleRateMultiplier;
}

UnderlyingPaymentScheduleRateMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateMultiplier.Tag = '40674';

UnderlyingPaymentScheduleRateMultiplier.Type = 'FLOAT';

module.exports = UnderlyingPaymentScheduleRateMultiplier;