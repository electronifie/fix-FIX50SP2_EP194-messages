var invert = require('invert-obj');

function PriceMovementValue (priceMovementValue) {
  this.message = priceMovementValue;
}

PriceMovementValue.prototype.value = function () {
  return this.message;
};

PriceMovementValue.Tag = '1921';

PriceMovementValue.Type = 'FLOAT';

module.exports = PriceMovementValue;