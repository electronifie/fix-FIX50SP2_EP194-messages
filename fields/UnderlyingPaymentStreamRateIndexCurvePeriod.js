var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexCurvePeriod (underlyingPaymentStreamRateIndexCurvePeriod) {
  this.message = underlyingPaymentStreamRateIndexCurvePeriod;
}

UnderlyingPaymentStreamRateIndexCurvePeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexCurvePeriod.Tag = '40623';

UnderlyingPaymentStreamRateIndexCurvePeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateIndexCurvePeriod;