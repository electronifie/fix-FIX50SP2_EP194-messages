var invert = require('invert-obj');

function LegProvisionCashSettlMethod (legProvisionCashSettlMethod) {
  this.message = legProvisionCashSettlMethod;
}

LegProvisionCashSettlMethod.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlMethod.Tag = '40466';

LegProvisionCashSettlMethod.Type = 'INT';

module.exports = LegProvisionCashSettlMethod;