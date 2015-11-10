var invert = require('invert-obj');

function ProtectionTermEventDayType (protectionTermEventDayType) {
  this.message = protectionTermEventDayType;
}

ProtectionTermEventDayType.prototype.value = function () {
  return this.message;
};


ProtectionTermEventDayType.Keys = {
  'BUSINESS': '0',
  'CALENDAR': '1',
  'COMMODITY_BUSINESS': '2',
  'CURRENCY_BUSINESS': '3',
  'EXCHANGE_BUSINESS': '4',
  'SCHEDULED_TRADING_DAY': '5',
};

ProtectionTermEventDayType.Tag = '40197';

ProtectionTermEventDayType.Type = 'INT';

ProtectionTermEventDayType.Values = invert(ProtectionTermEventDayType.Keys);

module.exports = ProtectionTermEventDayType;