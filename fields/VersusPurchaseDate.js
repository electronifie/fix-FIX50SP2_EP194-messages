var invert = require('invert-obj');

function VersusPurchaseDate (versusPurchaseDate) {
  this.message = versusPurchaseDate;
}

VersusPurchaseDate.prototype.value = function () {
  return this.message;
};

VersusPurchaseDate.Tag = '1753';

VersusPurchaseDate.Type = 'LOCALMKTDATE';

module.exports = VersusPurchaseDate;