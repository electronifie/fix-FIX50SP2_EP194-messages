var invert = require('invert-obj');

function CashSettlMinimumQuoteAmount (cashSettlMinimumQuoteAmount) {
  this.message = cashSettlMinimumQuoteAmount;
}

CashSettlMinimumQuoteAmount.prototype.value = function () {
  return this.message;
};

CashSettlMinimumQuoteAmount.Tag = '40030';

CashSettlMinimumQuoteAmount.Type = 'AMT';

module.exports = CashSettlMinimumQuoteAmount;