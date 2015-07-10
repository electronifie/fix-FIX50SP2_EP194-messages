var invert = require('invert-obj');

function UnderlyingComplexEventPriceBoundaryPrecision (underlyingComplexEventPriceBoundaryPrecision) {
  this.message = underlyingComplexEventPriceBoundaryPrecision;
}

UnderlyingComplexEventPriceBoundaryPrecision.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPriceBoundaryPrecision.Tag = '2050';

UnderlyingComplexEventPriceBoundaryPrecision.Type = 'PERCENTAGE';

module.exports = UnderlyingComplexEventPriceBoundaryPrecision;