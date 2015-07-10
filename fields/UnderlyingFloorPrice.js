var invert = require('invert-obj');

function UnderlyingFloorPrice (underlyingFloorPrice) {
  this.message = underlyingFloorPrice;
}

UnderlyingFloorPrice.prototype.value = function () {
  return this.message;
};

UnderlyingFloorPrice.Tag = '2034';

UnderlyingFloorPrice.Type = 'PRICE';

module.exports = UnderlyingFloorPrice;