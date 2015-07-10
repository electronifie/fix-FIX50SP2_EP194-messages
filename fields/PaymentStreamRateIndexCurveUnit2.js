var invert = require('invert-obj');

function PaymentStreamRateIndexCurveUnit2 (paymentStreamRateIndexCurveUnit2) {
  this.message = paymentStreamRateIndexCurveUnit2;
}

PaymentStreamRateIndexCurveUnit2.prototype.value = function () {
  return this.message;
};

PaymentStreamRateIndexCurveUnit2.Tag = '41195';

PaymentStreamRateIndexCurveUnit2.Type = 'STRING';

module.exports = PaymentStreamRateIndexCurveUnit2;