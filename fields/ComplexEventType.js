var invert = require('invert-obj');

function ComplexEventType (complexEventType) {
  this.message = complexEventType;
}

ComplexEventType.prototype.value = function () {
  return this.message;
};


ComplexEventType.Keys = {
  'CAPPED': '1',
  'TRIGGER': '2',
  'KNOCK_IN_UP': '3',
  'KNOCK_IN_DOWN': '4',
  'KNOCK_OUT_UP': '5',
  'KNOCK_OUT_DOWN': '6',
  'UNDERLYING': '7',
  'RESET_BARRIER': '8',
  'ROLLING_BARRIER': '9',
  'ONE_TOUCH': '10',
  'NO_TOUCH': '11',
  'DOUBLE_ONE_TOUCH': '12',
  'DOUBLE_NO_TOUCH': '13',
  'FOREIGN_EXCHANGE_COMPOSITE': '14',
  'FOREIGN_EXCHANGE_QUANTO': '15',
  'FOREIGN_EXCHANGE_CROSS_CURRENCY': '16',
  'STRIKE_SPREAD': '17',
  'CALENDAR_SPREAD': '18',
  'PRICE_OBSERVATION': '19',
  'PASS_THROUGH': '20',
  'STRIKE_SCHEDULE': '21',
};

ComplexEventType.Tag = '1484';

ComplexEventType.Type = 'INT';

ComplexEventType.Values = invert(ComplexEventType.Keys);

module.exports = ComplexEventType;