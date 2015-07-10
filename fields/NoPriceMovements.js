var invert = require('invert-obj');

function NoPriceMovements (noPriceMovements) {
  this.message = noPriceMovements;
}

NoPriceMovements.prototype.value = function () {
  return this.message;
};

NoPriceMovements.Tag = '1919';

NoPriceMovements.Type = 'NUMINGROUP';

module.exports = NoPriceMovements;