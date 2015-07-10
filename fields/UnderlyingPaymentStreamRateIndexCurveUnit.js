var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexCurveUnit (underlyingPaymentStreamRateIndexCurveUnit) {
  this.message = underlyingPaymentStreamRateIndexCurveUnit;
}

UnderlyingPaymentStreamRateIndexCurveUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexCurveUnit.Tag = '40622';

UnderlyingPaymentStreamRateIndexCurveUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateIndexCurveUnit;