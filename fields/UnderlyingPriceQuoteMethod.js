var invert = require('invert-obj');

function UnderlyingPriceQuoteMethod (underlyingPriceQuoteMethod) {
  this.message = underlyingPriceQuoteMethod;
}

UnderlyingPriceQuoteMethod.prototype.value = function () {
  return this.message;
};

UnderlyingPriceQuoteMethod.Tag = '2030';

UnderlyingPriceQuoteMethod.Type = 'STRING';

module.exports = UnderlyingPriceQuoteMethod;