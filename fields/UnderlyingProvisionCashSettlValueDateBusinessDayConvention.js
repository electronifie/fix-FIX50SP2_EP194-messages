var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateBusinessDayConvention (underlyingProvisionCashSettlValueDateBusinessDayConvention) {
  this.message = underlyingProvisionCashSettlValueDateBusinessDayConvention;
}

UnderlyingProvisionCashSettlValueDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateBusinessDayConvention.Tag = '42106';

UnderlyingProvisionCashSettlValueDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlValueDateBusinessDayConvention;