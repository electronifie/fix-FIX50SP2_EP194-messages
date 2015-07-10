var invert = require('invert-obj');

function TradeAllocAmtType (tradeAllocAmtType) {
  this.message = tradeAllocAmtType;
}

TradeAllocAmtType.prototype.value = function () {
  return this.message;
};

TradeAllocAmtType.Tag = '1845';

TradeAllocAmtType.Type = 'STRING';

module.exports = TradeAllocAmtType;