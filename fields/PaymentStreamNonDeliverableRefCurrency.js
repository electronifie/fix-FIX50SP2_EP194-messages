var invert = require('invert-obj');

function PaymentStreamNonDeliverableRefCurrency (paymentStreamNonDeliverableRefCurrency) {
  this.message = paymentStreamNonDeliverableRefCurrency;
}

PaymentStreamNonDeliverableRefCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableRefCurrency.Tag = '40817';

PaymentStreamNonDeliverableRefCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamNonDeliverableRefCurrency;