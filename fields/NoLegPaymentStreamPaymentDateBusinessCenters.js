var invert = require('invert-obj');

function NoLegPaymentStreamPaymentDateBusinessCenters (noLegPaymentStreamPaymentDateBusinessCenters) {
  this.message = noLegPaymentStreamPaymentDateBusinessCenters;
}

NoLegPaymentStreamPaymentDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamPaymentDateBusinessCenters.Tag = '40930';

NoLegPaymentStreamPaymentDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamPaymentDateBusinessCenters;