var invert = require('invert-obj');

function PaymentScheduleRateSpread (paymentScheduleRateSpread) {
  this.message = paymentScheduleRateSpread;
}

PaymentScheduleRateSpread.prototype.value = function () {
  return this.message;
};

PaymentScheduleRateSpread.Tag = '40839';

PaymentScheduleRateSpread.Type = 'PRICEOFFSET';

module.exports = PaymentScheduleRateSpread;