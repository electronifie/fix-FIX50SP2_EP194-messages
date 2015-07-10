var invert = require('invert-obj');

function PaymentStreamRateCutoffOffsetPeriod (paymentStreamRateCutoffOffsetPeriod) {
  this.message = paymentStreamRateCutoffOffsetPeriod;
}

PaymentStreamRateCutoffOffsetPeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamRateCutoffOffsetPeriod.Tag = '40781';

PaymentStreamRateCutoffOffsetPeriod.Type = 'INT';

module.exports = PaymentStreamRateCutoffOffsetPeriod;