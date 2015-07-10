var invert = require('invert-obj');

function PaymentStreamRateIndexCurvePeriod2 (paymentStreamRateIndexCurvePeriod2) {
  this.message = paymentStreamRateIndexCurvePeriod2;
}

PaymentStreamRateIndexCurvePeriod2.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndexCurvePeriod2.Tag = '41194';

PaymentStreamRateIndexCurvePeriod2.Type = 'INT';

module.exports = PaymentStreamRateIndexCurvePeriod2;