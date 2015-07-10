var invert = require('invert-obj');

function NoPaymentScheduleRateSources (noPaymentScheduleRateSources) {
  this.message = noPaymentScheduleRateSources;
}

NoPaymentScheduleRateSources.prototype.value = function () {
  return this.message;
};

NoPaymentScheduleRateSources.Tag = '40868';

NoPaymentScheduleRateSources.Type = 'NUMINGROUP';

module.exports = NoPaymentScheduleRateSources;