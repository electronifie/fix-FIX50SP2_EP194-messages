var invert = require('invert-obj');

function UnderlyingPaymentStubIndex2CurvePeriod (underlyingPaymentStubIndex2CurvePeriod) {
  this.message = underlyingPaymentStubIndex2CurvePeriod;
}

UnderlyingPaymentStubIndex2CurvePeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndex2CurvePeriod.Tag = '40730';

UnderlyingPaymentStubIndex2CurvePeriod.Type = 'INT';

module.exports = UnderlyingPaymentStubIndex2CurvePeriod;