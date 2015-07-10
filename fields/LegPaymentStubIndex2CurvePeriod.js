var invert = require('invert-obj');

function LegPaymentStubIndex2CurvePeriod (legPaymentStubIndex2CurvePeriod) {
  this.message = legPaymentStubIndex2CurvePeriod;
}

LegPaymentStubIndex2CurvePeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndex2CurvePeriod.Tag = '40440';

LegPaymentStubIndex2CurvePeriod.Type = 'INT';

module.exports = LegPaymentStubIndex2CurvePeriod;