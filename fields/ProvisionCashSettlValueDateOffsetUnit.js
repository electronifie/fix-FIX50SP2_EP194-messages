var invert = require('invert-obj');

function ProvisionCashSettlValueDateOffsetUnit (provisionCashSettlValueDateOffsetUnit) {
  this.message = provisionCashSettlValueDateOffsetUnit;
}

ProvisionCashSettlValueDateOffsetUnit.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateOffsetUnit.Tag = '40120';

ProvisionCashSettlValueDateOffsetUnit.Type = 'STRING';

module.exports = ProvisionCashSettlValueDateOffsetUnit;