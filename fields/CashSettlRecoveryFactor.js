var invert = require('invert-obj');

function CashSettlRecoveryFactor (cashSettlRecoveryFactor) {
  this.message = cashSettlRecoveryFactor;
}

CashSettlRecoveryFactor.prototype.value = function () {
  return this.message;
};

CashSettlRecoveryFactor.Tag = '40035';

CashSettlRecoveryFactor.Type = 'FLOAT';

module.exports = CashSettlRecoveryFactor;