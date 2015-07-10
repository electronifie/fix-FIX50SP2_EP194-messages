var invert = require('invert-obj');

function ComplexEventStrikePrice (complexEventStrikePrice) {
  this.message = complexEventStrikePrice;
}

ComplexEventStrikePrice.prototype.value = function () {
  return this.message;
};

ComplexEventStrikePrice.Tag = '2130';

ComplexEventStrikePrice.Type = 'PRICE';

module.exports = ComplexEventStrikePrice;