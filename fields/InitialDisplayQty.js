var invert = require('invert-obj');

function InitialDisplayQty (initialDisplayQty) {
  this.message = initialDisplayQty;
}

InitialDisplayQty.prototype.value = function () {
  return this.message;
};

InitialDisplayQty.Tag = '1608';

InitialDisplayQty.Type = 'QTY';

module.exports = InitialDisplayQty;