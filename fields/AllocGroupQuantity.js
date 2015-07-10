var invert = require('invert-obj');

function AllocGroupQuantity (allocGroupQuantity) {
  this.message = allocGroupQuantity;
}

AllocGroupQuantity.prototype.value = function () {
  return this.message;
};

AllocGroupQuantity.Tag = '1736';

AllocGroupQuantity.Type = 'QTY';

module.exports = AllocGroupQuantity;