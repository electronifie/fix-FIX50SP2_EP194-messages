var invert = require('invert-obj');

function OrderEventPx (orderEventPx) {
  this.message = orderEventPx;
}

OrderEventPx.prototype.value = function () {
  return this.message;
};

OrderEventPx.Tag = '1799';

OrderEventPx.Type = 'PRICE';

module.exports = OrderEventPx;