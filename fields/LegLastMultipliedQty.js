var invert = require('invert-obj');

function LegLastMultipliedQty (legLastMultipliedQty) {
  this.message = legLastMultipliedQty;
}

LegLastMultipliedQty.prototype.value = function () {
  return this.message;
};

LegLastMultipliedQty.Tag = '2358';

LegLastMultipliedQty.Type = 'QTY';

module.exports = LegLastMultipliedQty;