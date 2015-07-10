var invert = require('invert-obj');

function TradeAllocAmtReason (tradeAllocAmtReason) {
  this.message = tradeAllocAmtReason;
}

TradeAllocAmtReason.prototype.value = function () {
  return this.message;
};

TradeAllocAmtReason.Tag = '1850';

TradeAllocAmtReason.Type = 'INT';

module.exports = TradeAllocAmtReason;