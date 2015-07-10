var invert = require('invert-obj');

function LegPaymentStubType (legPaymentStubType) {
  this.message = legPaymentStubType;
}

LegPaymentStubType.prototype.value = function () {
  return this.message;
};

LegPaymentStubType.Tag = '40419';

LegPaymentStubType.Type = 'INT';

module.exports = LegPaymentStubType;