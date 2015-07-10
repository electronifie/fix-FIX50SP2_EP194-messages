var invert = require('invert-obj');

function LegStrikePriceBoundaryPrecision (legStrikePriceBoundaryPrecision) {
  this.message = legStrikePriceBoundaryPrecision;
}

LegStrikePriceBoundaryPrecision.prototype.value = function () {
  return this.message;
};

LegStrikePriceBoundaryPrecision.Tag = '2188';

LegStrikePriceBoundaryPrecision.Type = 'PERCENTAGE';

module.exports = LegStrikePriceBoundaryPrecision;