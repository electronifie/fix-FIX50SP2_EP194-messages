var invert = require('invert-obj');

function LegOptPayoutAmount (legOptPayoutAmount) {
  this.message = legOptPayoutAmount;
}

LegOptPayoutAmount.prototype.value = function () {
  return this.message;
};

LegOptPayoutAmount.Tag = '2194';

LegOptPayoutAmount.Type = 'AMT';

module.exports = LegOptPayoutAmount;