var invert = require('invert-obj');

function NoUnderlyingPaymentScheduleRateSources (noUnderlyingPaymentScheduleRateSources) {
  this.message = noUnderlyingPaymentScheduleRateSources;
}

NoUnderlyingPaymentScheduleRateSources.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentScheduleRateSources.Tag = '40704';

NoUnderlyingPaymentScheduleRateSources.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentScheduleRateSources;