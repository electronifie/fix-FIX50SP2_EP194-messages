var invert = require('invert-obj');

function TradeAllocStatus (tradeAllocStatus) {
  this.message = tradeAllocStatus;
}

TradeAllocStatus.prototype.value = function () {
  return this.message;
};


TradeAllocStatus.Keys = {
  PENDING_CLEAR: '0',
  CLAIMED: '1',
  CLEARED: '2',
  REJECTED: '3',
};

TradeAllocStatus.Tag = '1840';

TradeAllocStatus.Type = 'INT';

TradeAllocStatus.Values = invert(TradeAllocStatus.Keys);

module.exports = TradeAllocStatus;