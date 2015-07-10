var invert = require('invert-obj');

function LegMidPx (legMidPx) {
  this.message = legMidPx;
}

LegMidPx.prototype.value = function () {
  return this.message;
};

LegMidPx.Tag = '2346';

LegMidPx.Type = 'PRICE';

module.exports = LegMidPx;