var invert = require('invert-obj');

function PaymentStreamPaymentOffsetDayType (paymentStreamPaymentOffsetDayType) {
  this.message = paymentStreamPaymentOffsetDayType;
}

PaymentStreamPaymentOffsetDayType.prototype.value = function () {
  return this.message;
};


PaymentStreamPaymentOffsetDayType.Keys = {
  'BUSINESS': '0',
  'CALENDAR': '1',
  'COMMODITY_BUSINESS': '2',
  'CURRENCY_BUSINESS': '3',
  'EXCHANGE_BUSINESS': '4',
  'SCHEDULED_TRADING_DAY': '5',
};

PaymentStreamPaymentOffsetDayType.Tag = '40920';

PaymentStreamPaymentOffsetDayType.Type = 'INT';

PaymentStreamPaymentOffsetDayType.Values = invert(PaymentStreamPaymentOffsetDayType.Keys);

module.exports = PaymentStreamPaymentOffsetDayType;