var invert = require('invert-obj');

function LastMultipliedQty (lastMultipliedQty) {
  this.message = lastMultipliedQty;
}

LastMultipliedQty.prototype.value = function () {
  return this.message;
};

LastMultipliedQty.Tag = '2368';

LastMultipliedQty.Type = 'QTY';

module.exports = LastMultipliedQty;