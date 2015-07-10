var invert = require('invert-obj');

function UnderlyingCashSettlValuationFirstBusinessDayOffset (underlyingCashSettlValuationFirstBusinessDayOffset) {
  this.message = underlyingCashSettlValuationFirstBusinessDayOffset;
}

UnderlyingCashSettlValuationFirstBusinessDayOffset.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlValuationFirstBusinessDayOffset.Tag = '42043';

UnderlyingCashSettlValuationFirstBusinessDayOffset.Type = 'INT';

module.exports = UnderlyingCashSettlValuationFirstBusinessDayOffset;