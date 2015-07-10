var invert = require('invert-obj');

function UnderlyingComplexEventPrice (underlyingComplexEventPrice) {
  this.message = underlyingComplexEventPrice;
}

UnderlyingComplexEventPrice.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPrice.Tag = '2048';

UnderlyingComplexEventPrice.Type = 'PRICE';

module.exports = UnderlyingComplexEventPrice;