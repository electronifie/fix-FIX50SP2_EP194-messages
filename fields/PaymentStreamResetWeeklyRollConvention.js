var invert = require('invert-obj');

function PaymentStreamResetWeeklyRollConvention (paymentStreamResetWeeklyRollConvention) {
  this.message = paymentStreamResetWeeklyRollConvention;
}

PaymentStreamResetWeeklyRollConvention.prototype.value = function () {
  return this.message;
};


PaymentStreamResetWeeklyRollConvention.Keys = {
  'MONDAY': 'MON',
  'TUESDAY': 'TUE',
  'WEDNESDAY': 'WED',
  'THURSDAY': 'THU',
  'FRIDAY': 'FRI',
  'SATURDAY': 'SAT',
  'SUNDAY': 'SUN',
};

PaymentStreamResetWeeklyRollConvention.Tag = '40766';

PaymentStreamResetWeeklyRollConvention.Type = 'STRING';

PaymentStreamResetWeeklyRollConvention.Values = invert(PaymentStreamResetWeeklyRollConvention.Keys);

module.exports = PaymentStreamResetWeeklyRollConvention;