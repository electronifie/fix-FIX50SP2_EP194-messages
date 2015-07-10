var invert = require('invert-obj');

function LegPaymentStubIndex2FloorRate (legPaymentStubIndex2FloorRate) {
  this.message = legPaymentStubIndex2FloorRate;
}

LegPaymentStubIndex2FloorRate.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2FloorRate.Tag = '40447';

LegPaymentStubIndex2FloorRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStubIndex2FloorRate;