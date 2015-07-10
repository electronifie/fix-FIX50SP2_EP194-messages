var invert = require('invert-obj');

function PaymentStreamLastRegularPaymentDateUnadjusted (paymentStreamLastRegularPaymentDateUnadjusted) {
  this.message = paymentStreamLastRegularPaymentDateUnadjusted;
}

PaymentStreamLastRegularPaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

PaymentStreamLastRegularPaymentDateUnadjusted.Tag = '40757';

PaymentStreamLastRegularPaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentStreamLastRegularPaymentDateUnadjusted;