var invert = require('invert-obj');

function NoPaymentStreamNonDeliverableFixingDatesBusinessCenters (noPaymentStreamNonDeliverableFixingDatesBusinessCenters) {
  this.message = noPaymentStreamNonDeliverableFixingDatesBusinessCenters;
}

NoPaymentStreamNonDeliverableFixingDatesBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentStreamNonDeliverableFixingDatesBusinessCenters.Tag = '40946';

NoPaymentStreamNonDeliverableFixingDatesBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamNonDeliverableFixingDatesBusinessCenters;