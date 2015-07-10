var invert = require('invert-obj');

function UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter (underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter) {
  this.message = underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter;
}

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter.Tag = '40650';

UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenter;