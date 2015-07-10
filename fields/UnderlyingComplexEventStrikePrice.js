var invert = require('invert-obj');

function UnderlyingComplexEventStrikePrice (underlyingComplexEventStrikePrice) {
  this.message = underlyingComplexEventStrikePrice;
}

UnderlyingComplexEventStrikePrice.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventStrikePrice.Tag = '2274';

UnderlyingComplexEventStrikePrice.Type = 'PRICE';

module.exports = UnderlyingComplexEventStrikePrice;