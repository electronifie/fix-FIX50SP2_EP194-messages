var invert = require('invert-obj');

function LegPriceQuoteMethod (legPriceQuoteMethod) {
  this.message = legPriceQuoteMethod;
}

LegPriceQuoteMethod.prototype.value = function () {
  return this.message;
};

LegPriceQuoteMethod.Tag = '2195';

LegPriceQuoteMethod.Type = 'STRING';

module.exports = LegPriceQuoteMethod;