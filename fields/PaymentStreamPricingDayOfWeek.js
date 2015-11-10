var invert = require('invert-obj');

function PaymentStreamPricingDayOfWeek (paymentStreamPricingDayOfWeek) {
  this.message = paymentStreamPricingDayOfWeek;
}

PaymentStreamPricingDayOfWeek.prototype.value = function () {
  return this.message;
};


PaymentStreamPricingDayOfWeek.Keys = {
  'EVERY_DAY': '0',
  'MONDAY': '1',
  'TUESDAY': '2',
  'WEDNESDAY': '3',
  'THURSDAY': '4',
  'FRIDAY': '5',
  'SATURDAY': '6',
  'SUNDAY': '7',
};

PaymentStreamPricingDayOfWeek.Tag = '41228';

PaymentStreamPricingDayOfWeek.Type = 'INT';

PaymentStreamPricingDayOfWeek.Values = invert(PaymentStreamPricingDayOfWeek.Keys);

module.exports = PaymentStreamPricingDayOfWeek;