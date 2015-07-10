var invert = require('invert-obj');

function LegProvisionCashSettlValueDateAdjusted (legProvisionCashSettlValueDateAdjusted) {
  this.message = legProvisionCashSettlValueDateAdjusted;
}

LegProvisionCashSettlValueDateAdjusted.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateAdjusted.Tag = '40532';

LegProvisionCashSettlValueDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionCashSettlValueDateAdjusted;