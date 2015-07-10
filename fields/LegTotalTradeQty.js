var invert = require('invert-obj');

function LegTotalTradeQty (legTotalTradeQty) {
  this.message = legTotalTradeQty;
}

LegTotalTradeQty.prototype.value = function () {
  return this.message;
};

LegTotalTradeQty.Tag = '2357';

LegTotalTradeQty.Type = 'QTY';

module.exports = LegTotalTradeQty;