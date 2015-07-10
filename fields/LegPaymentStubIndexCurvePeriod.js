var invert = require('invert-obj');

function LegPaymentStubIndexCurvePeriod (legPaymentStubIndexCurvePeriod) {
  this.message = legPaymentStubIndexCurvePeriod;
}

LegPaymentStubIndexCurvePeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStubIndexCurvePeriod.Tag = '40426';

LegPaymentStubIndexCurvePeriod.Type = 'INT';

module.exports = LegPaymentStubIndexCurvePeriod;