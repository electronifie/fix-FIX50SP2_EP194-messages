var invert = require('invert-obj');

function LegComplexEventPrice (legComplexEventPrice) {
  this.message = legComplexEventPrice;
}

LegComplexEventPrice.prototype.value = function () {
  return this.message;
};

LegComplexEventPrice.Tag = '2227';

LegComplexEventPrice.Type = 'PRICE';

module.exports = LegComplexEventPrice;