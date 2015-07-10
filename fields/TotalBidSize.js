var invert = require('invert-obj');

function TotalBidSize (totalBidSize) {
  this.message = totalBidSize;
}

TotalBidSize.prototype.value = function () {
  return this.message;
};

TotalBidSize.Tag = '1749';

TotalBidSize.Type = 'QTY';

module.exports = TotalBidSize;