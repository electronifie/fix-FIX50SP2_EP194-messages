var invert = require('invert-obj');

function CoverPrice (coverPrice) {
  this.message = coverPrice;
}

CoverPrice.prototype.value = function () {
  return this.message;
};

CoverPrice.Tag = '1917';

CoverPrice.Type = 'PRICE';

module.exports = CoverPrice;