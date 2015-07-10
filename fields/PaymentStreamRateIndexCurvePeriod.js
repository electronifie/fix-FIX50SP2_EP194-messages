var invert = require('invert-obj');

function PaymentStreamRateIndexCurvePeriod (paymentStreamRateIndexCurvePeriod) {
  this.message = paymentStreamRateIndexCurvePeriod;
}

PaymentStreamRateIndexCurvePeriod.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndexCurvePeriod.Tag = '40792';

PaymentStreamRateIndexCurvePeriod.Type = 'INT';

module.exports = PaymentStreamRateIndexCurvePeriod;