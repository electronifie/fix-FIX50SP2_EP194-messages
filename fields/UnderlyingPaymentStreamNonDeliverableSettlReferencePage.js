var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableSettlReferencePage (underlyingPaymentStreamNonDeliverableSettlReferencePage) {
  this.message = underlyingPaymentStreamNonDeliverableSettlReferencePage;
}

UnderlyingPaymentStreamNonDeliverableSettlReferencePage.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableSettlReferencePage.Tag = '40824';

UnderlyingPaymentStreamNonDeliverableSettlReferencePage.Type = 'STRING';

module.exports = UnderlyingPaymentStreamNonDeliverableSettlReferencePage;