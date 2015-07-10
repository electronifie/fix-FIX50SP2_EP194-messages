var invert = require('invert-obj');

function UnderlyingPaymentStreamFinalRateRoundingDirection (underlyingPaymentStreamFinalRateRoundingDirection) {
  this.message = underlyingPaymentStreamFinalRateRoundingDirection;
}

UnderlyingPaymentStreamFinalRateRoundingDirection.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFinalRateRoundingDirection.Tag = '40635';

UnderlyingPaymentStreamFinalRateRoundingDirection.Type = 'INT';

module.exports = UnderlyingPaymentStreamFinalRateRoundingDirection;