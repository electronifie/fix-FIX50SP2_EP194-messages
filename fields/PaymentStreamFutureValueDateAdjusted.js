var invert = require('invert-obj');

function PaymentStreamFutureValueDateAdjusted (paymentStreamFutureValueDateAdjusted) {
  this.message = paymentStreamFutureValueDateAdjusted;
}

PaymentStreamFutureValueDateAdjusted.prototype.value = function () {
  return this.message;
};

PaymentStreamFutureValueDateAdjusted.Tag = '40788';

PaymentStreamFutureValueDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamFutureValueDateAdjusted;