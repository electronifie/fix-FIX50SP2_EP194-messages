var invert = require('invert-obj');

function LegPaymentStubIndexFloorRate (legPaymentStubIndexFloorRate) {
  this.message = legPaymentStubIndexFloorRate;
}

LegPaymentStubIndexFloorRate.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexFloorRate.Tag = '40435';

LegPaymentStubIndexFloorRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStubIndexFloorRate;