var invert = require('invert-obj');

function OrderResponseLevel (orderResponseLevel) {
  this.message = orderResponseLevel;
}

OrderResponseLevel.prototype.value = function () {
  return this.message;
};


OrderResponseLevel.Keys = {
  'NO_ACKNOWLEDGEMENT': '0',
  'MINIMUM_ACKNOWLEDGEMENT': '1',
  'ACKNOWLEDGE_EACH_ORDER': '2',
  'SUMMARY_ACKNOWLEDGEMENT': '3',
};

OrderResponseLevel.Tag = '2427';

OrderResponseLevel.Type = 'INT';

OrderResponseLevel.Values = invert(OrderResponseLevel.Keys);

module.exports = OrderResponseLevel;