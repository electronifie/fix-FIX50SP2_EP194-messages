var invert = require('invert-obj');

function OrderOrigination (orderOrigination) {
  this.message = orderOrigination;
}

OrderOrigination.prototype.value = function () {
  return this.message;
};


OrderOrigination.Keys = {
  'ORDER_RECEIVED_FROM_A_CUSTOMER': '1',
  'ORDER_RECEIVED_FROM_WITHIN_THE_FIRM': '2',
  'ORDER_RECEIVED_FROM_ANOTHER_BROKER_DEALER': '3',
  'ORDER_RECEIVED_FROM_A_CUSTOMER_OR_ORGINATED_WITH_THE_FIRM': '4',
};

OrderOrigination.Tag = '1724';

OrderOrigination.Type = 'INT';

OrderOrigination.Values = invert(OrderOrigination.Keys);

module.exports = OrderOrigination;