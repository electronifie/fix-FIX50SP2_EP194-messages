var invert = require('invert-obj');

function PaymentStreamPaymentFrequencyUnit (paymentStreamPaymentFrequencyUnit) {
  this.message = paymentStreamPaymentFrequencyUnit;
}

PaymentStreamPaymentFrequencyUnit.prototype.value = function () {
  return this.message;
};


PaymentStreamPaymentFrequencyUnit.Keys = {
  DAY: 'D',
  WEEK: 'Wk',
  MONTH: 'Mo',
  YEAR: 'Yr',
  TERM: 'T',
};

PaymentStreamPaymentFrequencyUnit.Tag = '40754';

PaymentStreamPaymentFrequencyUnit.Type = 'STRING';

PaymentStreamPaymentFrequencyUnit.Values = invert(PaymentStreamPaymentFrequencyUnit.Keys);

module.exports = PaymentStreamPaymentFrequencyUnit;