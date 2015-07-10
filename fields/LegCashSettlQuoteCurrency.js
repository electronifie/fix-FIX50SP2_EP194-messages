var invert = require('invert-obj');

function LegCashSettlQuoteCurrency (legCashSettlQuoteCurrency) {
  this.message = legCashSettlQuoteCurrency;
}

LegCashSettlQuoteCurrency.prototype.value = function () {
  return this.message;
};

LegCashSettlQuoteCurrency.Tag = '41353';

LegCashSettlQuoteCurrency.Type = 'CURRENCY';

module.exports = LegCashSettlQuoteCurrency;