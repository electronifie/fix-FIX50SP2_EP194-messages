var invert = require('invert-obj');

function PaymentStreamPaymentOffsetUnit (paymentStreamPaymentOffsetUnit) {
  this.message = paymentStreamPaymentOffsetUnit;
}

PaymentStreamPaymentOffsetUnit.prototype.value = function () {
  return this.message;
};


PaymentStreamPaymentOffsetUnit.Keys = {
  'DAY': 'D',
  'WEEK': 'Wk',
  'MONTH': 'Mo',
  'YEAR': 'Yr',
};

PaymentStreamPaymentOffsetUnit.Tag = '40760';

PaymentStreamPaymentOffsetUnit.Type = 'STRING';

PaymentStreamPaymentOffsetUnit.Values = invert(PaymentStreamPaymentOffsetUnit.Keys);

module.exports = PaymentStreamPaymentOffsetUnit;