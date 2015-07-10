var invert = require('invert-obj');

function CashSettlQuoteCurrency (cashSettlQuoteCurrency) {
  this.message = cashSettlQuoteCurrency;
}

CashSettlQuoteCurrency.prototype.value = function () {
  return this.message;
};

CashSettlQuoteCurrency.Tag = '40029';

CashSettlQuoteCurrency.Type = 'CURRENCY';

module.exports = CashSettlQuoteCurrency;