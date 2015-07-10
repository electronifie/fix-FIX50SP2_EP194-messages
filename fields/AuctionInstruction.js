var invert = require('invert-obj');

function AuctionInstruction (auctionInstruction) {
  this.message = auctionInstruction;
}

AuctionInstruction.prototype.value = function () {
  return this.message;
};


AuctionInstruction.Keys = {
  AUTOMATIC_AUCTION_PERMITTED: '0',
  AUTOMATIC_AUCTION_NOT_PERMITTED: '1',
};

AuctionInstruction.Tag = '1805';

AuctionInstruction.Type = 'INT';

AuctionInstruction.Values = invert(AuctionInstruction.Keys);

module.exports = AuctionInstruction;