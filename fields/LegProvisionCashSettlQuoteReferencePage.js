var invert = require('invert-obj');

function LegProvisionCashSettlQuoteReferencePage (legProvisionCashSettlQuoteReferencePage) {
  this.message = legProvisionCashSettlQuoteReferencePage;
}

LegProvisionCashSettlQuoteReferencePage.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlQuoteReferencePage.Tag = '41407';

LegProvisionCashSettlQuoteReferencePage.Type = 'STRING';

module.exports = LegProvisionCashSettlQuoteReferencePage;