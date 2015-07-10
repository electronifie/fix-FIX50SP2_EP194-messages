var invert = require('invert-obj');

function CashSettlQuoteAmount (cashSettlQuoteAmount) {
  this.message = cashSettlQuoteAmount;
}

CashSettlQuoteAmount.prototype.value = function () {
  return this.message;
};

CashSettlQuoteAmount.Tag = '40028';

CashSettlQuoteAmount.Type = 'AMT';

module.exports = CashSettlQuoteAmount;