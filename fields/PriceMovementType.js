var invert = require('invert-obj');

function PriceMovementType (priceMovementType) {
  this.message = priceMovementType;
}

PriceMovementType.prototype.value = function () {
  return this.message;
};


PriceMovementType.Keys = {
  'AMOUNT': '0',
  'PERCENTAGE': '1',
};

PriceMovementType.Tag = '1923';

PriceMovementType.Type = 'INT';

PriceMovementType.Values = invert(PriceMovementType.Keys);

module.exports = PriceMovementType;