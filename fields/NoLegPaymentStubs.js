var invert = require('invert-obj');

function NoLegPaymentStubs (noLegPaymentStubs) {
  this.message = noLegPaymentStubs;
}

NoLegPaymentStubs.prototype.value = function () {
  return this.message;
};

NoLegPaymentStubs.Tag = '40418';

NoLegPaymentStubs.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStubs;