var invert = require('invert-obj');

function PriceMovementPoint (priceMovementPoint) {
  this.message = priceMovementPoint;
}

PriceMovementPoint.prototype.value = function () {
  return this.message;
};

PriceMovementPoint.Tag = '1922';

PriceMovementPoint.Type = 'INT';

module.exports = PriceMovementPoint;