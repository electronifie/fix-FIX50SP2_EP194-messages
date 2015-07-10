var invert = require('invert-obj');

function OrderEventLiquidityIndicator (orderEventLiquidityIndicator) {
  this.message = orderEventLiquidityIndicator;
}

OrderEventLiquidityIndicator.prototype.value = function () {
  return this.message;
};

OrderEventLiquidityIndicator.Tag = '1801';

OrderEventLiquidityIndicator.Type = 'INT';

module.exports = OrderEventLiquidityIndicator;