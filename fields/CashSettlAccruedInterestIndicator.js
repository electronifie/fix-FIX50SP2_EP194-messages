var invert = require('invert-obj');

function CashSettlAccruedInterestIndicator (cashSettlAccruedInterestIndicator) {
  this.message = cashSettlAccruedInterestIndicator;
}

CashSettlAccruedInterestIndicator.prototype.value = function () {
  return this.message;
};

CashSettlAccruedInterestIndicator.Tag = '40037';

CashSettlAccruedInterestIndicator.Type = 'BOOLEAN';

module.exports = CashSettlAccruedInterestIndicator;