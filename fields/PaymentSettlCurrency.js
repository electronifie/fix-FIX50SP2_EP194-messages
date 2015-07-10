var invert = require('invert-obj');

function PaymentSettlCurrency (paymentSettlCurrency) {
  this.message = paymentSettlCurrency;
}

PaymentSettlCurrency.prototype.value = function () {
  return this.message;
};

PaymentSettlCurrency.Tag = '40232';

PaymentSettlCurrency.Type = 'CURRENCY';

module.exports = PaymentSettlCurrency;