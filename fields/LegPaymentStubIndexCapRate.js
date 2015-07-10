var invert = require('invert-obj');

function LegPaymentStubIndexCapRate (legPaymentStubIndexCapRate) {
  this.message = legPaymentStubIndexCapRate;
}

LegPaymentStubIndexCapRate.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexCapRate.Tag = '40432';

LegPaymentStubIndexCapRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStubIndexCapRate;