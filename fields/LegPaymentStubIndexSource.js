var invert = require('invert-obj');

function LegPaymentStubIndexSource (legPaymentStubIndexSource) {
  this.message = legPaymentStubIndexSource;
}

LegPaymentStubIndexSource.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexSource.Tag = '40425';

LegPaymentStubIndexSource.Type = 'INT';

module.exports = LegPaymentStubIndexSource;