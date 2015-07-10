var invert = require('invert-obj');

function LegComplexEventPriceBoundaryPrecision (legComplexEventPriceBoundaryPrecision) {
  this.message = legComplexEventPriceBoundaryPrecision;
}

LegComplexEventPriceBoundaryPrecision.prototype.value = function () {
  return this.message;
};

LegComplexEventPriceBoundaryPrecision.Tag = '2230';

LegComplexEventPriceBoundaryPrecision.Type = 'PERCENTAGE';

module.exports = LegComplexEventPriceBoundaryPrecision;