var invert = require('invert-obj');

function LegProvisionCashSettlValueDateRelativeTo (legProvisionCashSettlValueDateRelativeTo) {
  this.message = legProvisionCashSettlValueDateRelativeTo;
}

LegProvisionCashSettlValueDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateRelativeTo.Tag = '40528';

LegProvisionCashSettlValueDateRelativeTo.Type = 'INT';

module.exports = LegProvisionCashSettlValueDateRelativeTo;