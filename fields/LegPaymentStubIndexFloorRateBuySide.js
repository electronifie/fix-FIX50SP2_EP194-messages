var invert = require('invert-obj');

function LegPaymentStubIndexFloorRateBuySide (legPaymentStubIndexFloorRateBuySide) {
  this.message = legPaymentStubIndexFloorRateBuySide;
}

LegPaymentStubIndexFloorRateBuySide.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexFloorRateBuySide.Tag = '40436';

LegPaymentStubIndexFloorRateBuySide.Type = 'INT';

module.exports = LegPaymentStubIndexFloorRateBuySide;