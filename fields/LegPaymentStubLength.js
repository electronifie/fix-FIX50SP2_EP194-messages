var invert = require('invert-obj');

function LegPaymentStubLength (legPaymentStubLength) {
  this.message = legPaymentStubLength;
}

LegPaymentStubLength.prototype.value = function () {
  return this.message;
};

LegPaymentStubLength.Tag = '40420';

LegPaymentStubLength.Type = 'INT';

module.exports = LegPaymentStubLength;