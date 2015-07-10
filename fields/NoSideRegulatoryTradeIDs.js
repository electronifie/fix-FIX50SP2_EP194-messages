var invert = require('invert-obj');

function NoSideRegulatoryTradeIDs (noSideRegulatoryTradeIds) {
  this.message = noSideRegulatoryTradeIds;
}

NoSideRegulatoryTradeIDs.prototype.value = function () {
  return this.message;
};

NoSideRegulatoryTradeIDs.Tag = '1971';

NoSideRegulatoryTradeIDs.Type = 'NUMINGROUP';

module.exports = NoSideRegulatoryTradeIDs;