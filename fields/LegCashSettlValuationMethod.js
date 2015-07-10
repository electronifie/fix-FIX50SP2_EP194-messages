var invert = require('invert-obj');

function LegCashSettlValuationMethod (legCashSettlValuationMethod) {
  this.message = legCashSettlValuationMethod;
}

LegCashSettlValuationMethod.prototype.value = function () {
  return this.message;
};

LegCashSettlValuationMethod.Tag = '41361';

LegCashSettlValuationMethod.Type = 'INT';

module.exports = LegCashSettlValuationMethod;