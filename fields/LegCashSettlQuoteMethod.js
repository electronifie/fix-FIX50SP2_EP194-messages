var invert = require('invert-obj');

function LegCashSettlQuoteMethod (legCashSettlQuoteMethod) {
  this.message = legCashSettlQuoteMethod;
}

LegCashSettlQuoteMethod.prototype.value = function () {
  return this.message;
};

LegCashSettlQuoteMethod.Tag = '41351';

LegCashSettlQuoteMethod.Type = 'INT';

module.exports = LegCashSettlQuoteMethod;