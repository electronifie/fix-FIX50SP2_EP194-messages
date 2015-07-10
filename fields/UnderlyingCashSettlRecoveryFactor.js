var invert = require('invert-obj');

function UnderlyingCashSettlRecoveryFactor (underlyingCashSettlRecoveryFactor) {
  this.message = underlyingCashSettlRecoveryFactor;
}

UnderlyingCashSettlRecoveryFactor.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlRecoveryFactor.Tag = '42055';

UnderlyingCashSettlRecoveryFactor.Type = 'FLOAT';

module.exports = UnderlyingCashSettlRecoveryFactor;