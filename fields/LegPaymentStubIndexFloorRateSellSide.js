var invert = require('invert-obj');

function LegPaymentStubIndexFloorRateSellSide (legPaymentStubIndexFloorRateSellSide) {
  this.message = legPaymentStubIndexFloorRateSellSide;
}

LegPaymentStubIndexFloorRateSellSide.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexFloorRateSellSide.Tag = '40437';

LegPaymentStubIndexFloorRateSellSide.Type = 'INT';

module.exports = LegPaymentStubIndexFloorRateSellSide;