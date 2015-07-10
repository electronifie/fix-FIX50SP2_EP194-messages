var invert = require('invert-obj');

function LegEventPx (legEventPx) {
  this.message = legEventPx;
}

LegEventPx.prototype.value = function () {
  return this.message;
};

LegEventPx.Tag = '2065';

LegEventPx.Type = 'PRICE';

module.exports = LegEventPx;