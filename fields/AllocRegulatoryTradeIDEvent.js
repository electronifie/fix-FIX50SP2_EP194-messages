var invert = require('invert-obj');

function AllocRegulatoryTradeIDEvent (allocRegulatoryTradeIdevent) {
  this.message = allocRegulatoryTradeIdevent;
}

AllocRegulatoryTradeIDEvent.prototype.value = function () {
  return this.message;
};

AllocRegulatoryTradeIDEvent.Tag = '1911';

AllocRegulatoryTradeIDEvent.Type = 'INT';

module.exports = AllocRegulatoryTradeIDEvent;