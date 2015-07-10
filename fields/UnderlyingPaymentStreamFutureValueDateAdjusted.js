var invert = require('invert-obj');

function UnderlyingPaymentStreamFutureValueDateAdjusted (underlyingPaymentStreamFutureValueDateAdjusted) {
  this.message = underlyingPaymentStreamFutureValueDateAdjusted;
}

UnderlyingPaymentStreamFutureValueDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFutureValueDateAdjusted.Tag = '40619';

UnderlyingPaymentStreamFutureValueDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamFutureValueDateAdjusted;