var invert = require('invert-obj');

function LegPaymentStubRate (legPaymentStubRate) {
  this.message = legPaymentStubRate;
}

LegPaymentStubRate.prototype.value = function () {
  return this.message;
};

LegPaymentStubRate.Tag = '40421';

LegPaymentStubRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStubRate;