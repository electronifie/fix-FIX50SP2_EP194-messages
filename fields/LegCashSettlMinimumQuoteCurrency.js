var invert = require('invert-obj');

function LegCashSettlMinimumQuoteCurrency (legCashSettlMinimumQuoteCurrency) {
  this.message = legCashSettlMinimumQuoteCurrency;
}

LegCashSettlMinimumQuoteCurrency.prototype.value = function () {
  return this.message;
};

LegCashSettlMinimumQuoteCurrency.Tag = '41355';

LegCashSettlMinimumQuoteCurrency.Type = 'CURRENCY';

module.exports = LegCashSettlMinimumQuoteCurrency;