var invert = require('invert-obj');

function OfferSpread (offerSpread) {
  this.message = offerSpread;
}

OfferSpread.prototype.value = function () {
  return this.message;
};

OfferSpread.Tag = '2534';

OfferSpread.Type = 'FLOAT';

module.exports = OfferSpread;