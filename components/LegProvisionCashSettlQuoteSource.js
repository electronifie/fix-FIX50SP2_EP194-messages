var LegProvisionCashSettlQuoteSource = require('../fields/LegProvisionCashSettlQuoteSource');
var LegProvisionCashSettlQuoteReferencePage = require('../fields/LegProvisionCashSettlQuoteReferencePage');

function LegProvisionCashSettlQuoteSource (legProvisionCashSettlQuoteSource) {
  this.message = legProvisionCashSettlQuoteSource;
}
/* field */
LegProvisionCashSettlQuoteSource.prototype.legProvisionCashSettlQuoteSource = function () {
  return new LegProvisionCashSettlQuoteSource(this.message.tags[LegProvisionCashSettlQuoteSource.Tag]);
};

/* field */
LegProvisionCashSettlQuoteSource.prototype.legProvisionCashSettlQuoteReferencePage = function () {
  return new LegProvisionCashSettlQuoteReferencePage(this.message.tags[LegProvisionCashSettlQuoteReferencePage.Tag]);
};



LegProvisionCashSettlQuoteSource.Tag = '40470';

module.exports = LegProvisionCashSettlQuoteSource;