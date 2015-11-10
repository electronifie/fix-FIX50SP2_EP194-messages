var invert = require('invert-obj');

function SideRegulatoryTradeIDEvent (sideRegulatoryTradeIdevent) {
  this.message = sideRegulatoryTradeIdevent;
}

SideRegulatoryTradeIDEvent.prototype.value = function () {
  return this.message;
};


SideRegulatoryTradeIDEvent.Keys = {
  'INITIAL_BLOCK_TRADE': '0',
  'ALLOCATION': '1',
  'CLEARING': '2',
  'COMPRESSION': '3',
  'NOVATION': '4',
  'TERMINATION': '5',
};

SideRegulatoryTradeIDEvent.Tag = '1974';

SideRegulatoryTradeIDEvent.Type = 'INT';

SideRegulatoryTradeIDEvent.Values = invert(SideRegulatoryTradeIDEvent.Keys);

module.exports = SideRegulatoryTradeIDEvent;