var invert = require('invert-obj');

function PaymentStreamRateCutoffOffsetUnit (paymentStreamRateCutoffOffsetUnit) {
  this.message = paymentStreamRateCutoffOffsetUnit;
}

PaymentStreamRateCutoffOffsetUnit.prototype.value = function () {
  return this.message;
};

PaymentStreamRateCutoffOffsetUnit.Tag = '40782';

PaymentStreamRateCutoffOffsetUnit.Type = 'STRING';

module.exports = PaymentStreamRateCutoffOffsetUnit;