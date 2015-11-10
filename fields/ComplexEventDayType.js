var invert = require('invert-obj');

function ComplexEventDayType (complexEventDayType) {
  this.message = complexEventDayType;
}

ComplexEventDayType.prototype.value = function () {
  return this.message;
};


ComplexEventDayType.Keys = {
  'BUSINESS': '0',
  'CALENDAR': '1',
  'COMMODITY_BUSINESS': '2',
  'CURRENCY_BUSINESS': '3',
  'EXCHANGE_BUSINESS': '4',
  'SCHEDULED_TRADING_DAY': '5',
};

ComplexEventDayType.Tag = '41024';

ComplexEventDayType.Type = 'INT';

ComplexEventDayType.Values = invert(ComplexEventDayType.Keys);

module.exports = ComplexEventDayType;