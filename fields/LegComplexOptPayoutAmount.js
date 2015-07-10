var invert = require('invert-obj');

function LegComplexOptPayoutAmount (legComplexOptPayoutAmount) {
  this.message = legComplexOptPayoutAmount;
}

LegComplexOptPayoutAmount.prototype.value = function () {
  return this.message;
};

LegComplexOptPayoutAmount.Tag = '2223';

LegComplexOptPayoutAmount.Type = 'AMT';

module.exports = LegComplexOptPayoutAmount;