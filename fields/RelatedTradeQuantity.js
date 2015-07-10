var invert = require('invert-obj');

function RelatedTradeQuantity (relatedTradeQuantity) {
  this.message = relatedTradeQuantity;
}

RelatedTradeQuantity.prototype.value = function () {
  return this.message;
};

RelatedTradeQuantity.Tag = '1860';

RelatedTradeQuantity.Type = 'QTY';

module.exports = RelatedTradeQuantity;