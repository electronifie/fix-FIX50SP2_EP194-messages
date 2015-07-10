var invert = require('invert-obj');

function UnderlyingPaymentStubIndexCurvePeriod (underlyingPaymentStubIndexCurvePeriod) {
  this.message = underlyingPaymentStubIndexCurvePeriod;
}

UnderlyingPaymentStubIndexCurvePeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStubIndexCurvePeriod.Tag = '40716';

UnderlyingPaymentStubIndexCurvePeriod.Type = 'INT';

module.exports = UnderlyingPaymentStubIndexCurvePeriod;