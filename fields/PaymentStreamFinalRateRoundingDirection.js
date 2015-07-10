var invert = require('invert-obj');

function PaymentStreamFinalRateRoundingDirection (paymentStreamFinalRateRoundingDirection) {
  this.message = paymentStreamFinalRateRoundingDirection;
}

PaymentStreamFinalRateRoundingDirection.prototype.value = function () {
  return this.message;
};

PaymentStreamFinalRateRoundingDirection.Tag = '40804';

PaymentStreamFinalRateRoundingDirection.Type = 'INT';

module.exports = PaymentStreamFinalRateRoundingDirection;