var invert = require('invert-obj');

function PaymentStreamRateIndexCurveUnit (paymentStreamRateIndexCurveUnit) {
  this.message = paymentStreamRateIndexCurveUnit;
}

PaymentStreamRateIndexCurveUnit.prototype.value = function () {
  return this.message;
};


PaymentStreamRateIndexCurveUnit.Keys = {
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
};

PaymentStreamRateIndexCurveUnit.Tag = '40791';

PaymentStreamRateIndexCurveUnit.Type = 'STRING';

PaymentStreamRateIndexCurveUnit.Values = invert(PaymentStreamRateIndexCurveUnit.Keys);

module.exports = PaymentStreamRateIndexCurveUnit;