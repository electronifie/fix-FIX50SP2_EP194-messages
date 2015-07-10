var invert = require('invert-obj');

function UnderlyingPaymentScheduleRateSpread (underlyingPaymentScheduleRateSpread) {
  this.message = underlyingPaymentScheduleRateSpread;
}

UnderlyingPaymentScheduleRateSpread.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRateSpread.Tag = '40675';

UnderlyingPaymentScheduleRateSpread.Type = 'PRICEOFFSET';

module.exports = UnderlyingPaymentScheduleRateSpread;