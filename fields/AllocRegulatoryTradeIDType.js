var invert = require('invert-obj');

function AllocRegulatoryTradeIDType (allocRegulatoryTradeIdtype) {
  this.message = allocRegulatoryTradeIdtype;
}

AllocRegulatoryTradeIDType.prototype.value = function () {
  return this.message;
};

AllocRegulatoryTradeIDType.Tag = '1912';

AllocRegulatoryTradeIDType.Type = 'INT';

module.exports = AllocRegulatoryTradeIDType;