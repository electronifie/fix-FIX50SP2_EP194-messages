var invert = require('invert-obj');

function NumberOfSellOrders (numberOfSellOrders) {
  this.message = numberOfSellOrders;
}

NumberOfSellOrders.prototype.value = function () {
  return this.message;
};

NumberOfSellOrders.Tag = '2450';

NumberOfSellOrders.Type = 'INT';

module.exports = NumberOfSellOrders;