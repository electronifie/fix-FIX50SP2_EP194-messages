var invert = require('invert-obj');

function PaymentStreamInflationLagDayType (paymentStreamInflationLagDayType) {
  this.message = paymentStreamInflationLagDayType;
}

PaymentStreamInflationLagDayType.prototype.value = function () {
  return this.message;
};


PaymentStreamInflationLagDayType.Keys = {
  BUSINESS: '0',
  CALENDAR: '1',
  COMMODITY_BUSINESS: '2',
  CURRENCY_BUSINESS: '3',
  EXCHANGE_BUSINESS: '4',
  SCHEDULED_TRADING_DAY: '5',
};

PaymentStreamInflationLagDayType.Tag = '40810';

PaymentStreamInflationLagDayType.Type = 'INT';

PaymentStreamInflationLagDayType.Values = invert(PaymentStreamInflationLagDayType.Keys);

module.exports = PaymentStreamInflationLagDayType;