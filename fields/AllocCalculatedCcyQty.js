var invert = require('invert-obj');

function AllocCalculatedCcyQty (allocCalculatedCcyQty) {
  this.message = allocCalculatedCcyQty;
}

AllocCalculatedCcyQty.prototype.value = function () {
  return this.message;
};

AllocCalculatedCcyQty.Tag = '2515';

AllocCalculatedCcyQty.Type = 'QTY';

module.exports = AllocCalculatedCcyQty;