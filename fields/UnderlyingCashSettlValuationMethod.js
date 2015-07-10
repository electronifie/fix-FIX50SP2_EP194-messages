var invert = require('invert-obj');

function UnderlyingCashSettlValuationMethod (underlyingCashSettlValuationMethod) {
  this.message = underlyingCashSettlValuationMethod;
}

UnderlyingCashSettlValuationMethod.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlValuationMethod.Tag = '42058';

UnderlyingCashSettlValuationMethod.Type = 'INT';

module.exports = UnderlyingCashSettlValuationMethod;