var invert = require('invert-obj');

function AllocRegulatoryTradeIDScope (allocRegulatoryTradeIdscope) {
  this.message = allocRegulatoryTradeIdscope;
}

AllocRegulatoryTradeIDScope.prototype.value = function () {
  return this.message;
};

AllocRegulatoryTradeIDScope.Tag = '2399';

AllocRegulatoryTradeIDScope.Type = 'INT';

module.exports = AllocRegulatoryTradeIDScope;