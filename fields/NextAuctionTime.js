var invert = require('invert-obj');

function NextAuctionTime (nextAuctionTime) {
  this.message = nextAuctionTime;
}

NextAuctionTime.prototype.value = function () {
  return this.message;
};

NextAuctionTime.Tag = '2116';

NextAuctionTime.Type = 'UTCTIMESTAMP';

module.exports = NextAuctionTime;