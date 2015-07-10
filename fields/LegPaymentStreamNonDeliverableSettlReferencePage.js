var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableSettlReferencePage (legPaymentStreamNonDeliverableSettlReferencePage) {
  this.message = legPaymentStreamNonDeliverableSettlReferencePage;
}

LegPaymentStreamNonDeliverableSettlReferencePage.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableSettlReferencePage.Tag = '40228';

LegPaymentStreamNonDeliverableSettlReferencePage.Type = 'STRING';

module.exports = LegPaymentStreamNonDeliverableSettlReferencePage;