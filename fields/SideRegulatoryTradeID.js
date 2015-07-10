var invert = require('invert-obj');

function SideRegulatoryTradeID (sideRegulatoryTradeId) {
  this.message = sideRegulatoryTradeId;
}

SideRegulatoryTradeID.prototype.value = function () {
  return this.message;
};

SideRegulatoryTradeID.Tag = '1972';

SideRegulatoryTradeID.Type = 'STRING';

module.exports = SideRegulatoryTradeID;