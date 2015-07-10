var invert = require('invert-obj');

function RelatedLowPrice (relatedLowPrice) {
  this.message = relatedLowPrice;
}

RelatedLowPrice.prototype.value = function () {
  return this.message;
};

RelatedLowPrice.Tag = '1820';

RelatedLowPrice.Type = 'PRICE';

module.exports = RelatedLowPrice;