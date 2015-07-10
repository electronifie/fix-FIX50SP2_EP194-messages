var invert = require('invert-obj');

function SideMarketSegmentID (sideMarketSegmentId) {
  this.message = sideMarketSegmentId;
}

SideMarketSegmentID.prototype.value = function () {
  return this.message;
};

SideMarketSegmentID.Tag = '1898';

SideMarketSegmentID.Type = 'STRING';

module.exports = SideMarketSegmentID;