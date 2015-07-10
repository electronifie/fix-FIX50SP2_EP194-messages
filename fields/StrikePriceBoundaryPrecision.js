var invert = require('invert-obj');

function StrikePriceBoundaryPrecision (strikePriceBoundaryPrecision) {
  this.message = strikePriceBoundaryPrecision;
}

StrikePriceBoundaryPrecision.prototype.value = function () {
  return this.message;
};

StrikePriceBoundaryPrecision.Tag = '1480';

StrikePriceBoundaryPrecision.Type = 'PERCENTAGE';

module.exports = StrikePriceBoundaryPrecision;