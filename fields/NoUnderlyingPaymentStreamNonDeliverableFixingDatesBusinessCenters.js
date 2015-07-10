var invert = require('invert-obj');

function NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters (noUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters) {
  this.message = noUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters;
}

NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters.Tag = '40968';

NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenters;