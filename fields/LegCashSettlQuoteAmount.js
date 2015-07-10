var invert = require('invert-obj');

function LegCashSettlQuoteAmount (legCashSettlQuoteAmount) {
  this.message = legCashSettlQuoteAmount;
}

LegCashSettlQuoteAmount.prototype.value = function () {
  return this.message;
};

LegCashSettlQuoteAmount.Tag = '41352';

LegCashSettlQuoteAmount.Type = 'AMT';

module.exports = LegCashSettlQuoteAmount;