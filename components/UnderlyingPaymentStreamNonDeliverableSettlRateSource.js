var UnderlyingPaymentStreamNonDeliverableSettlRateSource = require('../fields/UnderlyingPaymentStreamNonDeliverableSettlRateSource');
var UnderlyingPaymentStreamNonDeliverableSettlReferencePage = require('../fields/UnderlyingPaymentStreamNonDeliverableSettlReferencePage');

function UnderlyingPaymentStreamNonDeliverableSettlRateSource (underlyingPaymentStreamNonDeliverableSettlRateSource) {
  this.message = underlyingPaymentStreamNonDeliverableSettlRateSource;
}
/* field */
UnderlyingPaymentStreamNonDeliverableSettlRateSource.prototype.underlyingPaymentStreamNonDeliverableSettlRateSource = function () {
  return new UnderlyingPaymentStreamNonDeliverableSettlRateSource(this.message.tags[UnderlyingPaymentStreamNonDeliverableSettlRateSource.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlRateSource.prototype.underlyingPaymentStreamNonDeliverableSettlReferencePage = function () {
  return new UnderlyingPaymentStreamNonDeliverableSettlReferencePage(this.message.tags[UnderlyingPaymentStreamNonDeliverableSettlReferencePage.Tag]);
};



UnderlyingPaymentStreamNonDeliverableSettlRateSource.Tag = '40661';

module.exports = UnderlyingPaymentStreamNonDeliverableSettlRateSource;