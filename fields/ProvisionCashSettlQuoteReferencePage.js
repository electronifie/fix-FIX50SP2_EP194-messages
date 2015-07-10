var invert = require('invert-obj');

function ProvisionCashSettlQuoteReferencePage (provisionCashSettlQuoteReferencePage) {
  this.message = provisionCashSettlQuoteReferencePage;
}

ProvisionCashSettlQuoteReferencePage.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlQuoteReferencePage.Tag = '41406';

ProvisionCashSettlQuoteReferencePage.Type = 'STRING';

module.exports = ProvisionCashSettlQuoteReferencePage;