var invert = require('invert-obj');

function TradeAllocGroupInstruction (tradeAllocGroupInstruction) {
  this.message = tradeAllocGroupInstruction;
}

TradeAllocGroupInstruction.prototype.value = function () {
  return this.message;
};


TradeAllocGroupInstruction.Keys = {
  'ADD_TO_AN_EXISTING_ALLOCATION_GROUP_IF_ONE_EXISTS_': '0',
  'DO_NOT_ADD_THE_TRADE_TO_AN_ALLOCATION_GROUP_': '1',
};

TradeAllocGroupInstruction.Tag = '1848';

TradeAllocGroupInstruction.Type = 'INT';

TradeAllocGroupInstruction.Values = invert(TradeAllocGroupInstruction.Keys);

module.exports = TradeAllocGroupInstruction;