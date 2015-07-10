var ProvisionCashSettlQuoteSource = require('../fields/ProvisionCashSettlQuoteSource');
var ProvisionCashSettlQuoteReferencePage = require('../fields/ProvisionCashSettlQuoteReferencePage');

function ProvisionCashSettlQuoteSource (provisionCashSettlQuoteSource) {
  this.message = provisionCashSettlQuoteSource;
}
/* field */
ProvisionCashSettlQuoteSource.prototype.provisionCashSettlQuoteSource = function () {
  return new ProvisionCashSettlQuoteSource(this.message.tags[ProvisionCashSettlQuoteSource.Tag]);
};

/* field */
ProvisionCashSettlQuoteSource.prototype.provisionCashSettlQuoteReferencePage = function () {
  return new ProvisionCashSettlQuoteReferencePage(this.message.tags[ProvisionCashSettlQuoteReferencePage.Tag]);
};



ProvisionCashSettlQuoteSource.Tag = '40112';

module.exports = ProvisionCashSettlQuoteSource;