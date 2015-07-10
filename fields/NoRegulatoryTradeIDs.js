var invert = require('invert-obj');

function NoRegulatoryTradeIDs (noRegulatoryTradeIds) {
  this.message = noRegulatoryTradeIds;
}

NoRegulatoryTradeIDs.prototype.value = function () {
  return this.message;
};

NoRegulatoryTradeIDs.Tag = '1907';

NoRegulatoryTradeIDs.Type = 'NUMINGROUP';

module.exports = NoRegulatoryTradeIDs;