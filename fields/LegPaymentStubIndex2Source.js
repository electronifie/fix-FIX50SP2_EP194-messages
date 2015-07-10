var invert = require('invert-obj');

function LegPaymentStubIndex2Source (legPaymentStubIndex2Source) {
  this.message = legPaymentStubIndex2Source;
}

LegPaymentStubIndex2Source.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2Source.Tag = '40439';

LegPaymentStubIndex2Source.Type = 'INT';

module.exports = LegPaymentStubIndex2Source;