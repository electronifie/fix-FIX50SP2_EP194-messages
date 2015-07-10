var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableSettlRateSource (underlyingPaymentStreamNonDeliverableSettlRateSource) {
  this.message = underlyingPaymentStreamNonDeliverableSettlRateSource;
}

UnderlyingPaymentStreamNonDeliverableSettlRateSource.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableSettlRateSource.Tag = '40661';

UnderlyingPaymentStreamNonDeliverableSettlRateSource.Type = 'INT';

module.exports = UnderlyingPaymentStreamNonDeliverableSettlRateSource;