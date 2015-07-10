var invert = require('invert-obj');

function BidSpread (bidSpread) {
  this.message = bidSpread;
}

BidSpread.prototype.value = function () {
  return this.message;
};

BidSpread.Tag = '2533';

BidSpread.Type = 'FLOAT';

module.exports = BidSpread;