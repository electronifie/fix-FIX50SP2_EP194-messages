var invert = require('invert-obj');

function OrderHandlingInstSource (orderHandlingInstSource) {
  this.message = orderHandlingInstSource;
}

OrderHandlingInstSource.prototype.value = function () {
  return this.message;
};


OrderHandlingInstSource.Keys = {
  FINRA_OATS: '1',
  FIA_EXECUTION_SOURCE_CODE: '2',
};

OrderHandlingInstSource.Tag = '1032';

OrderHandlingInstSource.Type = 'INT';

OrderHandlingInstSource.Values = invert(OrderHandlingInstSource.Keys);

module.exports = OrderHandlingInstSource;