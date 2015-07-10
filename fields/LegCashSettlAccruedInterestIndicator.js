var invert = require('invert-obj');

function LegCashSettlAccruedInterestIndicator (legCashSettlAccruedInterestIndicator) {
  this.message = legCashSettlAccruedInterestIndicator;
}

LegCashSettlAccruedInterestIndicator.prototype.value = function () {
  return this.message;
};

LegCashSettlAccruedInterestIndicator.Tag = '41360';

LegCashSettlAccruedInterestIndicator.Type = 'BOOLEAN';

module.exports = LegCashSettlAccruedInterestIndicator;