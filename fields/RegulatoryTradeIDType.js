var invert = require('invert-obj');

function RegulatoryTradeIDType (regulatoryTradeIdtype) {
  this.message = regulatoryTradeIdtype;
}

RegulatoryTradeIDType.prototype.value = function () {
  return this.message;
};


RegulatoryTradeIDType.Keys = {
  CURRENT: '0',
  PREVIOUS: '1',
  BLOCK: '2',
  RELATED: '3',
  CLEARED_BLOCK_TRADE: '4',
};

RegulatoryTradeIDType.Tag = '1906';

RegulatoryTradeIDType.Type = 'INT';

RegulatoryTradeIDType.Values = invert(RegulatoryTradeIDType.Keys);

module.exports = RegulatoryTradeIDType;