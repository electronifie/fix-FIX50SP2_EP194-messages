var invert = require('invert-obj');

function PaymentStreamSettlCurrency (paymentStreamSettlCurrency) {
  this.message = paymentStreamSettlCurrency;
}

PaymentStreamSettlCurrency.prototype.value = function () {
  return this.message;
};

PaymentStreamSettlCurrency.Tag = '40741';

PaymentStreamSettlCurrency.Type = 'CURRENCY';

module.exports = PaymentStreamSettlCurrency;