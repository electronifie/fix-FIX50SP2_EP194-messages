var invert = require('invert-obj');

function UnderlyingProvisionCashSettlQuoteReferencePage (underlyingProvisionCashSettlQuoteReferencePage) {
  this.message = underlyingProvisionCashSettlQuoteReferencePage;
}

UnderlyingProvisionCashSettlQuoteReferencePage.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlQuoteReferencePage.Tag = '42103';

UnderlyingProvisionCashSettlQuoteReferencePage.Type = 'STRING';

module.exports = UnderlyingProvisionCashSettlQuoteReferencePage;