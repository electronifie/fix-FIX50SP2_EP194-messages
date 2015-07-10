var invert = require('invert-obj');

function AllocGroupRemainingQuantity (allocGroupRemainingQuantity) {
  this.message = allocGroupRemainingQuantity;
}

AllocGroupRemainingQuantity.prototype.value = function () {
  return this.message;
};

AllocGroupRemainingQuantity.Tag = '1737';

AllocGroupRemainingQuantity.Type = 'QTY';

module.exports = AllocGroupRemainingQuantity;