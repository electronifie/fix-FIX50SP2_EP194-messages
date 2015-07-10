var invert = require('invert-obj');

function LegPaymentStubIndexCapRateSellSide (legPaymentStubIndexCapRateSellSide) {
  this.message = legPaymentStubIndexCapRateSellSide;
}

LegPaymentStubIndexCapRateSellSide.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexCapRateSellSide.Tag = '40434';

LegPaymentStubIndexCapRateSellSide.Type = 'INT';

module.exports = LegPaymentStubIndexCapRateSellSide;