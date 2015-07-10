var invert = require('invert-obj');

function UnderlyingPaymentStreamSettlCurrency (underlyingPaymentStreamSettlCurrency) {
  this.message = underlyingPaymentStreamSettlCurrency;
}

UnderlyingPaymentStreamSettlCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamSettlCurrency.Tag = '40571';

UnderlyingPaymentStreamSettlCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentStreamSettlCurrency;