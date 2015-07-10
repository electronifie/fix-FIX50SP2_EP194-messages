var invert = require('invert-obj');

function LegVersusPurchaseDate (legVersusPurchaseDate) {
  this.message = legVersusPurchaseDate;
}

LegVersusPurchaseDate.prototype.value = function () {
  return this.message;
};

LegVersusPurchaseDate.Tag = '1757';

LegVersusPurchaseDate.Type = 'LOCALMKTDATE';

module.exports = LegVersusPurchaseDate;