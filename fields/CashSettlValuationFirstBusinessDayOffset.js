var invert = require('invert-obj');

function CashSettlValuationFirstBusinessDayOffset (cashSettlValuationFirstBusinessDayOffset) {
  this.message = cashSettlValuationFirstBusinessDayOffset;
}

CashSettlValuationFirstBusinessDayOffset.prototype.value = function () {
  return this.message;
};

CashSettlValuationFirstBusinessDayOffset.Tag = '40024';

CashSettlValuationFirstBusinessDayOffset.Type = 'INT';

module.exports = CashSettlValuationFirstBusinessDayOffset;