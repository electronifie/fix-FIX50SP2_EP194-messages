var invert = require('invert-obj');

function NoAllocRegulatoryTradeIDs (noAllocRegulatoryTradeIds) {
  this.message = noAllocRegulatoryTradeIds;
}

NoAllocRegulatoryTradeIDs.prototype.value = function () {
  return this.message;
};

NoAllocRegulatoryTradeIDs.Tag = '1908';

NoAllocRegulatoryTradeIDs.Type = 'NUMINGROUP';

module.exports = NoAllocRegulatoryTradeIDs;