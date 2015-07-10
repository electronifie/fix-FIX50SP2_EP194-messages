var invert = require('invert-obj');

function ProvisionCashSettlValueDateAdjusted (provisionCashSettlValueDateAdjusted) {
  this.message = provisionCashSettlValueDateAdjusted;
}

ProvisionCashSettlValueDateAdjusted.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateAdjusted.Tag = '40122';

ProvisionCashSettlValueDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionCashSettlValueDateAdjusted;