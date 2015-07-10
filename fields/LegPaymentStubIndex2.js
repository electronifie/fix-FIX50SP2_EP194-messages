var invert = require('invert-obj');

function LegPaymentStubIndex2 (legPaymentStubIndex2) {
  this.message = legPaymentStubIndex2;
}

LegPaymentStubIndex2.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2.Tag = '40438';

LegPaymentStubIndex2.Type = 'STRING';

module.exports = LegPaymentStubIndex2;