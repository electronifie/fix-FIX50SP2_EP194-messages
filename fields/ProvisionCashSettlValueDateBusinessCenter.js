var invert = require('invert-obj');

function ProvisionCashSettlValueDateBusinessCenter (provisionCashSettlValueDateBusinessCenter) {
  this.message = provisionCashSettlValueDateBusinessCenter;
}

ProvisionCashSettlValueDateBusinessCenter.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateBusinessCenter.Tag = '40117';

ProvisionCashSettlValueDateBusinessCenter.Type = 'STRING';

module.exports = ProvisionCashSettlValueDateBusinessCenter;