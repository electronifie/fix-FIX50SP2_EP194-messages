var invert = require('invert-obj');

function PaymentStreamInflationLagUnit (paymentStreamInflationLagUnit) {
  this.message = paymentStreamInflationLagUnit;
}

PaymentStreamInflationLagUnit.prototype.value = function () {
  return this.message;
};


PaymentStreamInflationLagUnit.Keys = {
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
};

PaymentStreamInflationLagUnit.Tag = '40809';

PaymentStreamInflationLagUnit.Type = 'STRING';

PaymentStreamInflationLagUnit.Values = invert(PaymentStreamInflationLagUnit.Keys);

module.exports = PaymentStreamInflationLagUnit;