var invert = require('invert-obj');

function TotalOfferSize (totalOfferSize) {
  this.message = totalOfferSize;
}

TotalOfferSize.prototype.value = function () {
  return this.message;
};

TotalOfferSize.Tag = '1750';

TotalOfferSize.Type = 'QTY';

module.exports = TotalOfferSize;