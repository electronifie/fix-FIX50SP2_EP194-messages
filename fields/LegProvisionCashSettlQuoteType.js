var invert = require('invert-obj');

function LegProvisionCashSettlQuoteType (legProvisionCashSettlQuoteType) {
  this.message = legProvisionCashSettlQuoteType;
}

LegProvisionCashSettlQuoteType.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlQuoteType.Tag = '40469';

LegProvisionCashSettlQuoteType.Type = 'INT';

module.exports = LegProvisionCashSettlQuoteType;