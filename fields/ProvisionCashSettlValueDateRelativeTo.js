var invert = require('invert-obj');

function ProvisionCashSettlValueDateRelativeTo (provisionCashSettlValueDateRelativeTo) {
  this.message = provisionCashSettlValueDateRelativeTo;
}

ProvisionCashSettlValueDateRelativeTo.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateRelativeTo.Tag = '40118';

ProvisionCashSettlValueDateRelativeTo.Type = 'INT';

module.exports = ProvisionCashSettlValueDateRelativeTo;