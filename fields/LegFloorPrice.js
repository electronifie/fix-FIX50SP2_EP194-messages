var invert = require('invert-obj');

function LegFloorPrice (legFloorPrice) {
  this.message = legFloorPrice;
}

LegFloorPrice.prototype.value = function () {
  return this.message;
};

LegFloorPrice.Tag = '2201';

LegFloorPrice.Type = 'PRICE';

module.exports = LegFloorPrice;