var invert = require('invert-obj');

function NoPriceMovementValues (noPriceMovementValues) {
  this.message = noPriceMovementValues;
}

NoPriceMovementValues.prototype.value = function () {
  return this.message;
};

NoPriceMovementValues.Tag = '1920';

NoPriceMovementValues.Type = 'NUMINGROUP';

module.exports = NoPriceMovementValues;