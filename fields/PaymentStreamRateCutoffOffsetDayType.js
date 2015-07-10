var invert = require('invert-obj');

function PaymentStreamRateCutoffOffsetDayType (paymentStreamRateCutoffOffsetDayType) {
  this.message = paymentStreamRateCutoffOffsetDayType;
}

PaymentStreamRateCutoffOffsetDayType.prototype.value = function () {
  return this.message;
};

PaymentStreamRateCutoffOffsetDayType.Tag = '40783';

PaymentStreamRateCutoffOffsetDayType.Type = 'INT';

module.exports = PaymentStreamRateCutoffOffsetDayType;