var invert = require('invert-obj');

function NoLegPaymentStreamFixingDateBusinessCenters (noLegPaymentStreamFixingDateBusinessCenters) {
  this.message = noLegPaymentStreamFixingDateBusinessCenters;
}

NoLegPaymentStreamFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamFixingDateBusinessCenters.Tag = '40933';

NoLegPaymentStreamFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamFixingDateBusinessCenters;