var invert = require('invert-obj');

function CashSettlValuationMethod (cashSettlValuationMethod) {
  this.message = cashSettlValuationMethod;
}

CashSettlValuationMethod.prototype.value = function () {
  return this.message;
};


CashSettlValuationMethod.Keys = {
  MARKET: '0',
  HIGHEST: '1',
  AVERAGE_MARKET: '2',
  AVERAGE_HIGHEST: '3',
  BLENDED_MARKET: '4',
  BLENDED_HIGHEST: '5',
  AVERAGE_BLENDED_MARKET: '6',
  AVERAGE_BLENDED_HIGHEST: '7',
};

CashSettlValuationMethod.Tag = '40038';

CashSettlValuationMethod.Type = 'INT';

CashSettlValuationMethod.Values = invert(CashSettlValuationMethod.Keys);

module.exports = CashSettlValuationMethod;