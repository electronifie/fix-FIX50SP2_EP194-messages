var invert = require('invert-obj');

function LegCashSettlRecoveryFactor (legCashSettlRecoveryFactor) {
  this.message = legCashSettlRecoveryFactor;
}

LegCashSettlRecoveryFactor.prototype.value = function () {
  return this.message;
};

LegCashSettlRecoveryFactor.Tag = '41358';

LegCashSettlRecoveryFactor.Type = 'FLOAT';

module.exports = LegCashSettlRecoveryFactor;