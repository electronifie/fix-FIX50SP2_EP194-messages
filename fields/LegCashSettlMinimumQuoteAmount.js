var invert = require('invert-obj');

function LegCashSettlMinimumQuoteAmount (legCashSettlMinimumQuoteAmount) {
  this.message = legCashSettlMinimumQuoteAmount;
}

LegCashSettlMinimumQuoteAmount.prototype.value = function () {
  return this.message;
};

LegCashSettlMinimumQuoteAmount.Tag = '41354';

LegCashSettlMinimumQuoteAmount.Type = 'AMT';

module.exports = LegCashSettlMinimumQuoteAmount;