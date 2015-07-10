var invert = require('invert-obj');

function LegPaymentStreamNonDeliverableSettlRateSource (legPaymentStreamNonDeliverableSettlRateSource) {
  this.message = legPaymentStreamNonDeliverableSettlRateSource;
}

LegPaymentStreamNonDeliverableSettlRateSource.prototype.value = function () {
  return this.message;
};

LegPaymentStreamNonDeliverableSettlRateSource.Tag = '40087';

LegPaymentStreamNonDeliverableSettlRateSource.Type = 'INT';

module.exports = LegPaymentStreamNonDeliverableSettlRateSource;