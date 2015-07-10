var invert = require('invert-obj');

function OrderEventQty (orderEventQty) {
  this.message = orderEventQty;
}

OrderEventQty.prototype.value = function () {
  return this.message;
};

OrderEventQty.Tag = '1800';

OrderEventQty.Type = 'QTY';

module.exports = OrderEventQty;