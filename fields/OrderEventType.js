var invert = require('invert-obj');

function OrderEventType (orderEventType) {
  this.message = orderEventType;
}

OrderEventType.prototype.value = function () {
  return this.message;
};


OrderEventType.Keys = {
  ADDED: '1',
  MODIFIED: '2',
  DELETED: '3',
  PARTIALLY_FILLED: '4',
  FILLED: '5',
  SUSPENDED: '6',
  RELEASED: '7',
  RESTATED: '8',
  LOCKED: '9',
  TRIGGERED: '10',
  ACTIVATED: '11',
};

OrderEventType.Tag = '1796';

OrderEventType.Type = 'INT';

OrderEventType.Values = invert(OrderEventType.Keys);

module.exports = OrderEventType;