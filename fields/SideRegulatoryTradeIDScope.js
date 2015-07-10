var invert = require('invert-obj');

function SideRegulatoryTradeIDScope (sideRegulatoryTradeIdscope) {
  this.message = sideRegulatoryTradeIdscope;
}

SideRegulatoryTradeIDScope.prototype.value = function () {
  return this.message;
};

SideRegulatoryTradeIDScope.Tag = '2398';

SideRegulatoryTradeIDScope.Type = 'INT';

module.exports = SideRegulatoryTradeIDScope;