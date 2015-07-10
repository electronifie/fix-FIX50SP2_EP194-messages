var invert = require('invert-obj');

function LegCashSettlCurrency (legCashSettlCurrency) {
  this.message = legCashSettlCurrency;
}

LegCashSettlCurrency.prototype.value = function () {
  return this.message;
};

LegCashSettlCurrency.Tag = '41345';

LegCashSettlCurrency.Type = 'CURRENCY';

module.exports = LegCashSettlCurrency;