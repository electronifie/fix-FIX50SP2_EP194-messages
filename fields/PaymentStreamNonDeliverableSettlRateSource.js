var invert = require('invert-obj');

function PaymentStreamNonDeliverableSettlRateSource (paymentStreamNonDeliverableSettlRateSource) {
  this.message = paymentStreamNonDeliverableSettlRateSource;
}

PaymentStreamNonDeliverableSettlRateSource.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableSettlRateSource.Tag = '40371';

PaymentStreamNonDeliverableSettlRateSource.Type = 'INT';

module.exports = PaymentStreamNonDeliverableSettlRateSource;