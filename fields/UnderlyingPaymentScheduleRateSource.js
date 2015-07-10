var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateSource (underlyingPaymentScheduleRateSource) {
  this.message = underlyingPaymentScheduleRateSource;
}

UnderlyingPaymentScheduleRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateSource.Tag = '40705';

UnderlyingPaymentScheduleRateSource.Type = 'INT';

module.exports = UnderlyingPaymentScheduleRateSource;