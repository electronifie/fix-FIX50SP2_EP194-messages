var invert = require('invert-obj');

function CashSettlCurrency (cashSettlCurrency) {
  this.message = cashSettlCurrency;
}

CashSettlCurrency.prototype.value = function () {
  return this.message;
};

CashSettlCurrency.Tag = '40023';

CashSettlCurrency.Type = 'CURRENCY';

module.exports = CashSettlCurrency;