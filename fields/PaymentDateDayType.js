var invert = require('invert-obj');

function PaymentDateDayType (paymentDateDayType) {
  this.message = paymentDateDayType;
}

PaymentDateDayType.prototype.value = function () {
  return this.message;
};


PaymentDateDayType.Keys = {
  'BUSINESS': '0',
  'CALENDAR': '1',
  'COMMODITY_BUSINESS': '2',
  'CURRENCY_BUSINESS': '3',
  'EXCHANGE_BUSINESS': '4',
  'SCHEDULED_TRADING_DAY': '5',
};

PaymentDateDayType.Tag = '41159';

PaymentDateDayType.Type = 'INT';

PaymentDateDayType.Values = invert(PaymentDateDayType.Keys);

module.exports = PaymentDateDayType;