var invert = require('invert-obj');

function LegCashSettlAmount (legCashSettlAmount) {
  this.message = legCashSettlAmount;
}

LegCashSettlAmount.prototype.value = function () {
  return this.message;
};

LegCashSettlAmount.Tag = '41357';

LegCashSettlAmount.Type = 'AMT';

module.exports = LegCashSettlAmount;