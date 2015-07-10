var invert = require('invert-obj');

function UnderlyingCashSettlValuationSubsequentBusinessDaysOffset (underlyingCashSettlValuationSubsequentBusinessDaysOffset) {
  this.message = underlyingCashSettlValuationSubsequentBusinessDaysOffset;
}

UnderlyingCashSettlValuationSubsequentBusinessDaysOffset.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlValuationSubsequentBusinessDaysOffset.Tag = '42044';

UnderlyingCashSettlValuationSubsequentBusinessDaysOffset.Type = 'INT';

module.exports = UnderlyingCashSettlValuationSubsequentBusinessDaysOffset;