var invert = require('invert-obj');

function NoLegPaymentStreamResetDateBusinessCenters (noLegPaymentStreamResetDateBusinessCenters) {
  this.message = noLegPaymentStreamResetDateBusinessCenters;
}

NoLegPaymentStreamResetDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamResetDateBusinessCenters.Tag = '40931';

NoLegPaymentStreamResetDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamResetDateBusinessCenters;