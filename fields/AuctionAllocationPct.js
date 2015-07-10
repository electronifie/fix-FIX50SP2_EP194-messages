var invert = require('invert-obj');

function AuctionAllocationPct (auctionAllocationPct) {
  this.message = auctionAllocationPct;
}

AuctionAllocationPct.prototype.value = function () {
  return this.message;
};

AuctionAllocationPct.Tag = '1804';

AuctionAllocationPct.Type = 'PERCENTAGE';

module.exports = AuctionAllocationPct;