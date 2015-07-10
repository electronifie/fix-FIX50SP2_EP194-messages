var invert = require('invert-obj');

function LegPaymentStubIndexCapRateBuySide (legPaymentStubIndexCapRateBuySide) {
  this.message = legPaymentStubIndexCapRateBuySide;
}

LegPaymentStubIndexCapRateBuySide.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexCapRateBuySide.Tag = '40433';

LegPaymentStubIndexCapRateBuySide.Type = 'INT';

module.exports = LegPaymentStubIndexCapRateBuySide;