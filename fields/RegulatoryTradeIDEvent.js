var invert = require('invert-obj');

function RegulatoryTradeIDEvent (regulatoryTradeIdevent) {
  this.message = regulatoryTradeIdevent;
}

RegulatoryTradeIDEvent.prototype.value = function () {
  return this.message;
};


RegulatoryTradeIDEvent.Keys = {
  'INITIAL_BLOCK_TRADE': '0',
  'ALLOCATION': '1',
  'CLEARING': '2',
  'COMPRESSION': '3',
  'NOVATION': '4',
  'TERMINATION': '5',
  'POST_TRADE_VALUATION': '6',
};

RegulatoryTradeIDEvent.Tag = '1904';

RegulatoryTradeIDEvent.Type = 'INT';

RegulatoryTradeIDEvent.Values = invert(RegulatoryTradeIDEvent.Keys);

module.exports = RegulatoryTradeIDEvent;