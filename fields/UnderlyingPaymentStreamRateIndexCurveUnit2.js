var invert = require('invert-obj');

function UnderlyingPaymentStreamRateIndexCurveUnit2 (underlyingPaymentStreamRateIndexCurveUnit2) {
  this.message = underlyingPaymentStreamRateIndexCurveUnit2;
}

UnderlyingPaymentStreamRateIndexCurveUnit2.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateIndexCurveUnit2.Tag = '41911';

UnderlyingPaymentStreamRateIndexCurveUnit2.Type = 'STRING';

module.exports = UnderlyingPaymentStreamRateIndexCurveUnit2;