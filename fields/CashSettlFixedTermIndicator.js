var invert = require('invert-obj');

function CashSettlFixedTermIndicator (cashSettlFixedTermIndicator) {
  this.message = cashSettlFixedTermIndicator;
}

CashSettlFixedTermIndicator.prototype.value = function () {
  return this.message;
};

CashSettlFixedTermIndicator.Tag = '40036';

CashSettlFixedTermIndicator.Type = 'BOOLEAN';

module.exports = CashSettlFixedTermIndicator;