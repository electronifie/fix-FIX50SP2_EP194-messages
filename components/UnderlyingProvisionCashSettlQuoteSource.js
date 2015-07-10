var UnderlyingProvisionCashSettlQuoteSource = require('../fields/UnderlyingProvisionCashSettlQuoteSource');
var UnderlyingProvisionCashSettlQuoteReferencePage = require('../fields/UnderlyingProvisionCashSettlQuoteReferencePage');

function UnderlyingProvisionCashSettlQuoteSource (underlyingProvisionCashSettlQuoteSource) {
  this.message = underlyingProvisionCashSettlQuoteSource;
}
/* field */
UnderlyingProvisionCashSettlQuoteSource.prototype.underlyingProvisionCashSettlQuoteSource = function () {
  return new UnderlyingProvisionCashSettlQuoteSource(this.message.tags[UnderlyingProvisionCashSettlQuoteSource.Tag]);
};

/* field */
UnderlyingProvisionCashSettlQuoteSource.prototype.underlyingProvisionCashSettlQuoteReferencePage = function () {
  return new UnderlyingProvisionCashSettlQuoteReferencePage(this.message.tags[UnderlyingProvisionCashSettlQuoteReferencePage.Tag]);
};



UnderlyingProvisionCashSettlQuoteSource.Tag = '42102';

module.exports = UnderlyingProvisionCashSettlQuoteSource;