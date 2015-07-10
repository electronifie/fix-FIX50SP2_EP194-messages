var invert = require('invert-obj');

function LegCashSettlValuationSubsequentBusinessDaysOffset (legCashSettlValuationSubsequentBusinessDaysOffset) {
  this.message = legCashSettlValuationSubsequentBusinessDaysOffset;
}

LegCashSettlValuationSubsequentBusinessDaysOffset.prototype.value = function () {
  return this.message;
};

LegCashSettlValuationSubsequentBusinessDaysOffset.Tag = '41347';

LegCashSettlValuationSubsequentBusinessDaysOffset.Type = 'INT';

module.exports = LegCashSettlValuationSubsequentBusinessDaysOffset;