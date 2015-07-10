var invert = require('invert-obj');

function LegPaymentStubIndex (legPaymentStubIndex) {
  this.message = legPaymentStubIndex;
}

LegPaymentStubIndex.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex.Tag = '40424';

LegPaymentStubIndex.Type = 'STRING';

module.exports = LegPaymentStubIndex;