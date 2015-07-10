var invert = require('invert-obj');

function LegTotalTradeMultipliedQty (legTotalTradeMultipliedQty) {
  this.message = legTotalTradeMultipliedQty;
}

LegTotalTradeMultipliedQty.prototype.value = function () {
  return this.message;
};

LegTotalTradeMultipliedQty.Tag = '2360';

LegTotalTradeMultipliedQty.Type = 'QTY';

module.exports = LegTotalTradeMultipliedQty;