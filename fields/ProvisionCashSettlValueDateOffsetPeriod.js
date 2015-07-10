var invert = require('invert-obj');

function ProvisionCashSettlValueDateOffsetPeriod (provisionCashSettlValueDateOffsetPeriod) {
  this.message = provisionCashSettlValueDateOffsetPeriod;
}

ProvisionCashSettlValueDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateOffsetPeriod.Tag = '40119';

ProvisionCashSettlValueDateOffsetPeriod.Type = 'INT';

module.exports = ProvisionCashSettlValueDateOffsetPeriod;