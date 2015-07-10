var invert = require('invert-obj');

function OrderEventText (orderEventText) {
  this.message = orderEventText;
}

OrderEventText.prototype.value = function () {
  return this.message;
};

OrderEventText.Tag = '1802';

OrderEventText.Type = 'STRING';

module.exports = OrderEventText;