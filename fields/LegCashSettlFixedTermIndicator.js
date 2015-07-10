var invert = require('invert-obj');

function LegCashSettlFixedTermIndicator (legCashSettlFixedTermIndicator) {
  this.message = legCashSettlFixedTermIndicator;
}

LegCashSettlFixedTermIndicator.prototype.value = function () {
  return this.message;
};

LegCashSettlFixedTermIndicator.Tag = '41359';

LegCashSettlFixedTermIndicator.Type = 'BOOLEAN';

module.exports = LegCashSettlFixedTermIndicator;