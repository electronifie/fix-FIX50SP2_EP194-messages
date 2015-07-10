var invert = require('invert-obj');

function NoLegPaymentStreamInitialFixingDateBusinessCenters (noLegPaymentStreamInitialFixingDateBusinessCenters) {
  this.message = noLegPaymentStreamInitialFixingDateBusinessCenters;
}

NoLegPaymentStreamInitialFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamInitialFixingDateBusinessCenters.Tag = '40932';

NoLegPaymentStreamInitialFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamInitialFixingDateBusinessCenters;