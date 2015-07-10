var invert = require('invert-obj');

function PaymentStreamNonDeliverableFixingDatesBusinessCenter (paymentStreamNonDeliverableFixingDatesBusinessCenter) {
  this.message = paymentStreamNonDeliverableFixingDatesBusinessCenter;
}

PaymentStreamNonDeliverableFixingDatesBusinessCenter.prototype.value = function () {
  return this.message;
};

PaymentStreamNonDeliverableFixingDatesBusinessCenter.Tag = '40819';

PaymentStreamNonDeliverableFixingDatesBusinessCenter.Type = 'STRING';

module.exports = PaymentStreamNonDeliverableFixingDatesBusinessCenter;