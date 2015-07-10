var invert = require('invert-obj');

function TradeAllocCurrency (tradeAllocCurrency) {
  this.message = tradeAllocCurrency;
}

TradeAllocCurrency.prototype.value = function () {
  return this.message;
};

TradeAllocCurrency.Tag = '1847';

TradeAllocCurrency.Type = 'CURRENCY';

module.exports = TradeAllocCurrency;