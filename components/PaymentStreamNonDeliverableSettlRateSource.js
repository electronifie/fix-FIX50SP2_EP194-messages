var PaymentStreamNonDeliverableSettlRateSource = require('../fields/PaymentStreamNonDeliverableSettlRateSource');
var PaymentStreamNonDeliverableSettlReferencePage = require('../fields/PaymentStreamNonDeliverableSettlReferencePage');

function PaymentStreamNonDeliverableSettlRateSource (paymentStreamNonDeliverableSettlRateSource) {
  this.message = paymentStreamNonDeliverableSettlRateSource;
}
/* field */
PaymentStreamNonDeliverableSettlRateSource.prototype.paymentStreamNonDeliverableSettlRateSource = function () {
  return new PaymentStreamNonDeliverableSettlRateSource(this.message.tags[PaymentStreamNonDeliverableSettlRateSource.Tag]);
};

/* field */
PaymentStreamNonDeliverableSettlRateSource.prototype.paymentStreamNonDeliverableSettlReferencePage = function () {
  return new PaymentStreamNonDeliverableSettlReferencePage(this.message.tags[PaymentStreamNonDeliverableSettlReferencePage.Tag]);
};



PaymentStreamNonDeliverableSettlRateSource.Tag = '40371';

module.exports = PaymentStreamNonDeliverableSettlRateSource;