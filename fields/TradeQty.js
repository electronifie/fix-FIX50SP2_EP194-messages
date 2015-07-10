var invert = require('invert-obj');

function TradeQty (tradeQty) {
  this.message = tradeQty;
}

TradeQty.prototype.value = function () {
  return this.message;
};

TradeQty.Tag = '1843';

TradeQty.Type = 'QTY';

module.exports = TradeQty;