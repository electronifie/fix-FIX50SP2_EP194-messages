var invert = require('invert-obj');

function AllocRegulatoryTradeID (allocRegulatoryTradeId) {
  this.message = allocRegulatoryTradeId;
}

AllocRegulatoryTradeID.prototype.value = function () {
  return this.message;
};

AllocRegulatoryTradeID.Tag = '1909';

AllocRegulatoryTradeID.Type = 'STRING';

module.exports = AllocRegulatoryTradeID;