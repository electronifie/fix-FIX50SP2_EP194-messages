var invert = require('invert-obj');

function CashSettlAmount (cashSettlAmount) {
  this.message = cashSettlAmount;
}

CashSettlAmount.prototype.value = function () {
  return this.message;
};

CashSettlAmount.Tag = '40034';

CashSettlAmount.Type = 'AMT';

module.exports = CashSettlAmount;