var invert = require('invert-obj');

function UnderlyingCashSettlMinimumQuoteAmount (underlyingCashSettlMinimumQuoteAmount) {
  this.message = underlyingCashSettlMinimumQuoteAmount;
}

UnderlyingCashSettlMinimumQuoteAmount.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlMinimumQuoteAmount.Tag = '42051';

UnderlyingCashSettlMinimumQuoteAmount.Type = 'AMT';

module.exports = UnderlyingCashSettlMinimumQuoteAmount;