var invert = require('invert-obj');

function RelatedHighPrice (relatedHighPrice) {
  this.message = relatedHighPrice;
}

RelatedHighPrice.prototype.value = function () {
  return this.message;
};

RelatedHighPrice.Tag = '1819';

RelatedHighPrice.Type = 'PRICE';

module.exports = RelatedHighPrice;