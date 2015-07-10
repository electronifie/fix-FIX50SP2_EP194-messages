var invert = require('invert-obj');

function OrderDelay (orderDelay) {
  this.message = orderDelay;
}

OrderDelay.prototype.value = function () {
  return this.message;
};

OrderDelay.Tag = '1428';

OrderDelay.Type = 'INT';

module.exports = OrderDelay;