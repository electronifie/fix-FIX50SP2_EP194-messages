var invert = require('invert-obj');

function CashSettlValuationTime (cashSettlValuationTime) {
  this.message = cashSettlValuationTime;
}

CashSettlValuationTime.prototype.value = function () {
  return this.message;
};

CashSettlValuationTime.Tag = '40025';

CashSettlValuationTime.Type = 'LOCALMKTTIME';

module.exports = CashSettlValuationTime;