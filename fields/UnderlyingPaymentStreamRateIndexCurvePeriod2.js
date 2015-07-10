var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexCurvePeriod2 (underlyingPaymentStreamRateIndexCurvePeriod2) {
  this.message = underlyingPaymentStreamRateIndexCurvePeriod2;
}

UnderlyingPaymentStreamRateIndexCurvePeriod2.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexCurvePeriod2.Tag = '41912';

UnderlyingPaymentStreamRateIndexCurvePeriod2.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateIndexCurvePeriod2;