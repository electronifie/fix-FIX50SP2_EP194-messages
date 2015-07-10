var LegPaymentStreamNonDeliverableSettlRateSource = require('../fields/LegPaymentStreamNonDeliverableSettlRateSource');
var LegPaymentStreamNonDeliverableSettlReferencePage = require('../fields/LegPaymentStreamNonDeliverableSettlReferencePage');

function LegPaymentStreamNonDeliverableSettlRateSource (legPaymentStreamNonDeliverableSettlRateSource) {
  this.message = legPaymentStreamNonDeliverableSettlRateSource;
}
/* field */
LegPaymentStreamNonDeliverableSettlRateSource.prototype.legPaymentStreamNonDeliverableSettlRateSource = function () {
  return new LegPaymentStreamNonDeliverableSettlRateSource(this.message.tags[LegPaymentStreamNonDeliverableSettlRateSource.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableSettlRateSource.prototype.legPaymentStreamNonDeliverableSettlReferencePage = function () {
  return new LegPaymentStreamNonDeliverableSettlReferencePage(this.message.tags[LegPaymentStreamNonDeliverableSettlReferencePage.Tag]);
};



LegPaymentStreamNonDeliverableSettlRateSource.Tag = '40087';

module.exports = LegPaymentStreamNonDeliverableSettlRateSource;