var invert = require('invert-obj');

function UnderlyingStrikePriceBoundaryPrecision (underlyingStrikePriceBoundaryPrecision) {
  this.message = underlyingStrikePriceBoundaryPrecision;
}

UnderlyingStrikePriceBoundaryPrecision.prototype.value = function () {
  return this.message;
};

UnderlyingStrikePriceBoundaryPrecision.Tag = '2025';

UnderlyingStrikePriceBoundaryPrecision.Type = 'PERCENTAGE';

module.exports = UnderlyingStrikePriceBoundaryPrecision;