var invert = require('invert-obj');

function LegCashSettlValuationTime (legCashSettlValuationTime) {
  this.message = legCashSettlValuationTime;
}

LegCashSettlValuationTime.prototype.value = function () {
  return this.message;
};

LegCashSettlValuationTime.Tag = '41349';

LegCashSettlValuationTime.Type = 'LOCALMKTTIME';

module.exports = LegCashSettlValuationTime;