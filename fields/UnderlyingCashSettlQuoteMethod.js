var invert = require('invert-obj');

function UnderlyingCashSettlQuoteMethod (underlyingCashSettlQuoteMethod) {
  this.message = underlyingCashSettlQuoteMethod;
}

UnderlyingCashSettlQuoteMethod.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlQuoteMethod.Tag = '42048';

UnderlyingCashSettlQuoteMethod.Type = 'INT';

module.exports = UnderlyingCashSettlQuoteMethod;