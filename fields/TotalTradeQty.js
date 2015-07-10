var invert = require('invert-obj');

function TotalTradeQty (totalTradeQty) {
  this.message = totalTradeQty;
}

TotalTradeQty.prototype.value = function () {
  return this.message;
};

TotalTradeQty.Tag = '2367';

TotalTradeQty.Type = 'QTY';

module.exports = TotalTradeQty;