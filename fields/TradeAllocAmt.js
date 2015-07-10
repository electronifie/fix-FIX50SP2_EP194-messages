var invert = require('invert-obj');

function TradeAllocAmt (tradeAllocAmt) {
  this.message = tradeAllocAmt;
}

TradeAllocAmt.prototype.value = function () {
  return this.message;
};

TradeAllocAmt.Tag = '1846';

TradeAllocAmt.Type = 'AMT';

module.exports = TradeAllocAmt;