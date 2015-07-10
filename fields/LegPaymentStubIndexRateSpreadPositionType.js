var invert = require('invert-obj');

function LegPaymentStubIndexRateSpreadPositionType (legPaymentStubIndexRateSpreadPositionType) {
  this.message = legPaymentStubIndexRateSpreadPositionType;
}

LegPaymentStubIndexRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexRateSpreadPositionType.Tag = '40430';

LegPaymentStubIndexRateSpreadPositionType.Type = 'INT';

module.exports = LegPaymentStubIndexRateSpreadPositionType;