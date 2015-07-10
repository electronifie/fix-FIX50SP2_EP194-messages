var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateOffsetPeriod (underlyingProvisionCashSettlValueDateOffsetPeriod) {
  this.message = underlyingProvisionCashSettlValueDateOffsetPeriod;
}

UnderlyingProvisionCashSettlValueDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateOffsetPeriod.Tag = '42108';

UnderlyingProvisionCashSettlValueDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlValueDateOffsetPeriod;