var invert = require('invert-obj');

function PaymentStreamFirstPaymentDateUnadjusted (paymentStreamFirstPaymentDateUnadjusted) {
  this.message = paymentStreamFirstPaymentDateUnadjusted;
}

PaymentStreamFirstPaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

PaymentStreamFirstPaymentDateUnadjusted.Tag = '40756';

PaymentStreamFirstPaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamFirstPaymentDateUnadjusted;