var invert = require('invert-obj');

function PaymentDateUnadjusted (paymentDateUnadjusted) {
  this.message = paymentDateUnadjusted;
}

PaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

PaymentDateUnadjusted.Tag = '40219';

PaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentDateUnadjusted;