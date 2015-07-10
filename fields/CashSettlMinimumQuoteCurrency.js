var invert = require('invert-obj');

function CashSettlMinimumQuoteCurrency (cashSettlMinimumQuoteCurrency) {
  this.message = cashSettlMinimumQuoteCurrency;
}

CashSettlMinimumQuoteCurrency.prototype.value = function () {
  return this.message;
};

CashSettlMinimumQuoteCurrency.Tag = '40031';

CashSettlMinimumQuoteCurrency.Type = 'CURRENCY';

module.exports = CashSettlMinimumQuoteCurrency;