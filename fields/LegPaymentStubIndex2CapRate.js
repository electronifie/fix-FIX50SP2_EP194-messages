var invert = require('invert-obj');

function LegPaymentStubIndex2CapRate (legPaymentStubIndex2CapRate) {
  this.message = legPaymentStubIndex2CapRate;
}

LegPaymentStubIndex2CapRate.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2CapRate.Tag = '40446';

LegPaymentStubIndex2CapRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStubIndex2CapRate;