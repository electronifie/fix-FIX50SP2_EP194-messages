var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateCurrency (underlyingPaymentScheduleRateCurrency) {
  this.message = underlyingPaymentScheduleRateCurrency;
}

UnderlyingPaymentScheduleRateCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateCurrency.Tag = '41883';

UnderlyingPaymentScheduleRateCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentScheduleRateCurrency;