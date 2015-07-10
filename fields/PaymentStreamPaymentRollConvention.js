var invert = require('invert-obj');

function PaymentStreamPaymentRollConvention (paymentStreamPaymentRollConvention) {
  this.message = paymentStreamPaymentRollConvention;
}

PaymentStreamPaymentRollConvention.prototype.value = function () {
  return this.message;
};

PaymentStreamPaymentRollConvention.Tag = '40755';

PaymentStreamPaymentRollConvention.Type = 'STRING';

module.exports = PaymentStreamPaymentRollConvention;