var invert = require('invert-obj');

function LegStreamMaximumTransactionAmount (legStreamMaximumTransactionAmount) {
  this.message = legStreamMaximumTransactionAmount;
}

LegStreamMaximumTransactionAmount.prototype.value = function () {
  return this.message;
};

LegStreamMaximumTransactionAmount.Tag = '41554';

LegStreamMaximumTransactionAmount.Type = 'AMT';

module.exports = LegStreamMaximumTransactionAmount;