var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateOffsetUnit (underlyingProvisionCashSettlValueDateOffsetUnit) {
  this.message = underlyingProvisionCashSettlValueDateOffsetUnit;
}

UnderlyingProvisionCashSettlValueDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateOffsetUnit.Tag = '42109';

UnderlyingProvisionCashSettlValueDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingProvisionCashSettlValueDateOffsetUnit;