var invert = require('invert-obj');

function OrderEventReason (orderEventReason) {
  this.message = orderEventReason;
}

OrderEventReason.prototype.value = function () {
  return this.message;
};


OrderEventReason.Keys = {
  'ADD_ORDER_REQUEST': '1',
  'MODIFY_ORDER_REQUEST': '2',
  'DELETE_ORDER_REQUEST': '3',
  'ORDER_ENTERED_OUT_OF_BAND': '4',
  'ORDER_MODIFIED_OUT_OF_BAND': '5',
  'ORDER_DELETED_OUT_OF_BAND': '6',
  'ORDER_ACTIVATED_OR_TRIGGERED': '7',
  'ORDER_EXPIRED': '8',
  'RESERVE_ORDER_REFRESHED': '9',
  'AWAY_MARKET_BETTER': '10',
  'CORPORATE_ACTION': '11',
  'START_OF_DAY': '12',
  'END_OF_DAY': '13',
};

OrderEventReason.Tag = '1798';

OrderEventReason.Type = 'INT';

OrderEventReason.Values = invert(OrderEventReason.Keys);

module.exports = OrderEventReason;