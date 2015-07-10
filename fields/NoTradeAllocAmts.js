var invert = require('invert-obj');

function NoTradeAllocAmts (noTradeAllocAmts) {
  this.message = noTradeAllocAmts;
}

NoTradeAllocAmts.prototype.value = function () {
  return this.message;
};

NoTradeAllocAmts.Tag = '1844';

NoTradeAllocAmts.Type = 'NUMINGROUP';

module.exports = NoTradeAllocAmts;