var invert = require('invert-obj');

function PaymentStubIndex2CurvePeriod (paymentStubIndex2CurvePeriod) {
  this.message = paymentStubIndex2CurvePeriod;
}

PaymentStubIndex2CurvePeriod.prototype.value = function () {
  return this.message;
};

PaymentStubIndex2CurvePeriod.Tag = '40894';

PaymentStubIndex2CurvePeriod.Type = 'INT';

module.exports = PaymentStubIndex2CurvePeriod;