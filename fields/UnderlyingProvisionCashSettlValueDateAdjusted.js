var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateAdjusted (underlyingProvisionCashSettlValueDateAdjusted) {
  this.message = underlyingProvisionCashSettlValueDateAdjusted;
}

UnderlyingProvisionCashSettlValueDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateAdjusted.Tag = '42111';

UnderlyingProvisionCashSettlValueDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionCashSettlValueDateAdjusted;