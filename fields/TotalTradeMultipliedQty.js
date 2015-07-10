var invert = require('invert-obj');

function TotalTradeMultipliedQty (totalTradeMultipliedQty) {
  this.message = totalTradeMultipliedQty;
}

TotalTradeMultipliedQty.prototype.value = function () {
  return this.message;
};

TotalTradeMultipliedQty.Tag = '2370';

TotalTradeMultipliedQty.Type = 'QTY';

module.exports = TotalTradeMultipliedQty;