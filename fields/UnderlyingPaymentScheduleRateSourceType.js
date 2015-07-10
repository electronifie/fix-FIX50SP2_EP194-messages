var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateSourceType (underlyingPaymentScheduleRateSourceType) {
  this.message = underlyingPaymentScheduleRateSourceType;
}

UnderlyingPaymentScheduleRateSourceType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateSourceType.Tag = '40706';

UnderlyingPaymentScheduleRateSourceType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleRateSourceType;