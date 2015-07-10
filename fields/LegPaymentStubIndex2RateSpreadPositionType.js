var invert = require('invert-obj');

function LegPaymentStubIndex2RateSpreadPositionType (legPaymentStubIndex2RateSpreadPositionType) {
  this.message = legPaymentStubIndex2RateSpreadPositionType;
}

LegPaymentStubIndex2RateSpreadPositionType.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2RateSpreadPositionType.Tag = '40444';

LegPaymentStubIndex2RateSpreadPositionType.Type = 'INT';

module.exports = LegPaymentStubIndex2RateSpreadPositionType;