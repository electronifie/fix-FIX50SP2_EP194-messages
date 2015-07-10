var invert = require('invert-obj');

function NumberOfBuyOrders (numberOfBuyOrders) {
  this.message = numberOfBuyOrders;
}

NumberOfBuyOrders.prototype.value = function () {
  return this.message;
};

NumberOfBuyOrders.Tag = '2449';

NumberOfBuyOrders.Type = 'INT';

module.exports = NumberOfBuyOrders;