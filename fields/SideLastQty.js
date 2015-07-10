var invert = require('invert-obj');

function SideLastQty (sideLastQty) {
  this.message = sideLastQty;
}

SideLastQty.prototype.value = function () {
  return this.message;
};

SideLastQty.Tag = '1009';

SideLastQty.Type = 'QTY';

module.exports = SideLastQty;