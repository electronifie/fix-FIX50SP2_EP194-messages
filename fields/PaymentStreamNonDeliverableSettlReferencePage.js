var invert = require('invert-obj');

function PaymentStreamNonDeliverableSettlReferencePage (paymentStreamNonDeliverableSettlReferencePage) {
  this.message = paymentStreamNonDeliverableSettlReferencePage;
}

PaymentStreamNonDeliverableSettlReferencePage.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableSettlReferencePage.Tag = '40372';

PaymentStreamNonDeliverableSettlReferencePage.Type = 'STRING';

module.exports = PaymentStreamNonDeliverableSettlReferencePage;