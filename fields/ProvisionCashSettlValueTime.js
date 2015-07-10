var invert = require('invert-obj');

function ProvisionCashSettlValueTime (provisionCashSettlValueTime) {
  this.message = provisionCashSettlValueTime;
}

ProvisionCashSettlValueTime.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueTime.Tag = '40114';

ProvisionCashSettlValueTime.Type = 'LOCALMKTTIME';

module.exports = ProvisionCashSettlValueTime;