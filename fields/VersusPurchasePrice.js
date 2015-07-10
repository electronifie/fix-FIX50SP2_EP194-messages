var invert = require('invert-obj');

function VersusPurchasePrice (versusPurchasePrice) {
  this.message = versusPurchasePrice;
}

VersusPurchasePrice.prototype.value = function () {
  return this.message;
};

VersusPurchasePrice.Tag = '1754';

VersusPurchasePrice.Type = 'PRICE';

module.exports = VersusPurchasePrice;