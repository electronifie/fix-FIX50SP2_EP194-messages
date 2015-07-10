var invert = require('invert-obj');

function SideOrigTradeID (sideOrigTradeId) {
  this.message = sideOrigTradeId;
}

SideOrigTradeID.prototype.value = function () {
  return this.message;
};

SideOrigTradeID.Tag = '1507';

SideOrigTradeID.Type = 'STRING';

module.exports = SideOrigTradeID;