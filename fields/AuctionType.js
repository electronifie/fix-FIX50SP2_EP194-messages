var invert = require('invert-obj');

function AuctionType (auctionType) {
  this.message = auctionType;
}

AuctionType.prototype.value = function () {
  return this.message;
};


AuctionType.Keys = {
  BLOCK_ORDER_AUCTION: '1',
  DIRECTED_ORDER_AUCTION: '2',
  EXPOSURE_ORDER_AUCTION: '3',
  FLASH_ORDER_AUCTION: '4',
  FACILITATION_ORDER_AUCTION: '5',
  SOLICITATION_ORDER_AUCTION: '6',
  PRICE_IMPROVEMENT_MECHANISM: '7',
  DIRECTED_ORDER_PRICE_IMPROVEMENT_MECHANISM: '8',
};

AuctionType.Tag = '1803';

AuctionType.Type = 'INT';

AuctionType.Values = invert(AuctionType.Keys);

module.exports = AuctionType;