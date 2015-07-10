var invert = require('invert-obj');

function LegComplexEventStrikePrice (legComplexEventStrikePrice) {
  this.message = legComplexEventStrikePrice;
}

LegComplexEventStrikePrice.prototype.value = function () {
  return this.message;
};

LegComplexEventStrikePrice.Tag = '2239';

LegComplexEventStrikePrice.Type = 'PRICE';

module.exports = LegComplexEventStrikePrice;