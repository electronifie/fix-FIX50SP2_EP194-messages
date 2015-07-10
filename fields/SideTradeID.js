var invert = require('invert-obj');

function SideTradeID (sideTradeId) {
  this.message = sideTradeId;
}

SideTradeID.prototype.value = function () {
  return this.message;
};

SideTradeID.Tag = '1506';

SideTradeID.Type = 'STRING';

module.exports = SideTradeID;