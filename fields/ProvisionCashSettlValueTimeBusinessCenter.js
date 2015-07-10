var invert = require('invert-obj');

function ProvisionCashSettlValueTimeBusinessCenter (provisionCashSettlValueTimeBusinessCenter) {
  this.message = provisionCashSettlValueTimeBusinessCenter;
}

ProvisionCashSettlValueTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueTimeBusinessCenter.Tag = '40115';

ProvisionCashSettlValueTimeBusinessCenter.Type = 'STRING';

module.exports = ProvisionCashSettlValueTimeBusinessCenter;