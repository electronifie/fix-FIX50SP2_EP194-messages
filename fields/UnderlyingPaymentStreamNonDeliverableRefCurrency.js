var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableRefCurrency (underlyingPaymentStreamNonDeliverableRefCurrency) {
  this.message = underlyingPaymentStreamNonDeliverableRefCurrency;
}

UnderlyingPaymentStreamNonDeliverableRefCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableRefCurrency.Tag = '40648';

UnderlyingPaymentStreamNonDeliverableRefCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamNonDeliverableRefCurrency;