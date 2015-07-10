var invert = require('invert-obj');

function LegVersusPurchasePrice (legVersusPurchasePrice) {
  this.message = legVersusPurchasePrice;
}

LegVersusPurchasePrice.prototype.value = function () {
  return this.message;
};

LegVersusPurchasePrice.Tag = '1758';

LegVersusPurchasePrice.Type = 'PRICE';

module.exports = LegVersusPurchasePrice;