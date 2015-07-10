var invert = require('invert-obj');

function SideRegulatoryTradeIDType (sideRegulatoryTradeIdtype) {
  this.message = sideRegulatoryTradeIdtype;
}

SideRegulatoryTradeIDType.prototype.value = function () {
  return this.message;
};


SideRegulatoryTradeIDType.Keys = {
  CURRENT: '0',
  PREVIOUS: '1',
  BLOCK: '2',
  RELATED: '3',
};

SideRegulatoryTradeIDType.Tag = '1975';

SideRegulatoryTradeIDType.Type = 'INT';

SideRegulatoryTradeIDType.Values = invert(SideRegulatoryTradeIDType.Keys);

module.exports = SideRegulatoryTradeIDType;