var invert = require('invert-obj');

function ProvisionCashSettlValueDateBusinessDayConvention (provisionCashSettlValueDateBusinessDayConvention) {
  this.message = provisionCashSettlValueDateBusinessDayConvention;
}

ProvisionCashSettlValueDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateBusinessDayConvention.Tag = '40116';

ProvisionCashSettlValueDateBusinessDayConvention.Type = 'INT';

module.exports = ProvisionCashSettlValueDateBusinessDayConvention;