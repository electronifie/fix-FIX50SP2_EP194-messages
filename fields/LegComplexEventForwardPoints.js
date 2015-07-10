var invert = require('invert-obj');

function LegComplexEventForwardPoints (legComplexEventForwardPoints) {
  this.message = legComplexEventForwardPoints;
}

LegComplexEventForwardPoints.prototype.value = function () {
  return this.message;
};

LegComplexEventForwardPoints.Tag = '2410';

LegComplexEventForwardPoints.Type = 'PRICEOFFSET';

module.exports = LegComplexEventForwardPoints;