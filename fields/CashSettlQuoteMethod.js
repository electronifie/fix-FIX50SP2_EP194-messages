var invert = require('invert-obj');

function CashSettlQuoteMethod (cashSettlQuoteMethod) {
  this.message = cashSettlQuoteMethod;
}

CashSettlQuoteMethod.prototype.value = function () {
  return this.message;
};


CashSettlQuoteMethod.Keys = {
  BID: '0',
  MID: '1',
  OFFER: '2',
};

CashSettlQuoteMethod.Tag = '40027';

CashSettlQuoteMethod.Type = 'INT';

CashSettlQuoteMethod.Values = invert(CashSettlQuoteMethod.Keys);

module.exports = CashSettlQuoteMethod;