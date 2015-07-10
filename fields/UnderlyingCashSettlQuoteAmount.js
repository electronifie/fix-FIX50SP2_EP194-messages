var invert = require('invert-obj');

function UnderlyingCashSettlQuoteAmount (underlyingCashSettlQuoteAmount) {
  this.message = underlyingCashSettlQuoteAmount;
}

UnderlyingCashSettlQuoteAmount.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlQuoteAmount.Tag = '42049';

UnderlyingCashSettlQuoteAmount.Type = 'AMT';

module.exports = UnderlyingCashSettlQuoteAmount;