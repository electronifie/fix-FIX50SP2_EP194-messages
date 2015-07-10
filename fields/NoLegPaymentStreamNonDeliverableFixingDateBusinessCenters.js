var invert = require('invert-obj');

function NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters (noLegPaymentStreamNonDeliverableFixingDateBusinessCenters) {
  this.message = noLegPaymentStreamNonDeliverableFixingDateBusinessCenters;
}

NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters.Tag = '40929';

NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamNonDeliverableFixingDateBusinessCenters;