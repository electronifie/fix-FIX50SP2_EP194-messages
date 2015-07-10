var invert = require('invert-obj');

function LegProvisionCashSettlValueDateOffsetUnit (legProvisionCashSettlValueDateOffsetUnit) {
  this.message = legProvisionCashSettlValueDateOffsetUnit;
}

LegProvisionCashSettlValueDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateOffsetUnit.Tag = '40530';

LegProvisionCashSettlValueDateOffsetUnit.Type = 'STRING';

module.exports = LegProvisionCashSettlValueDateOffsetUnit;