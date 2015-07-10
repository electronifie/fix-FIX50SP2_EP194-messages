var invert = require('invert-obj');

function LegComplexEventPriceBoundaryMethod (legComplexEventPriceBoundaryMethod) {
  this.message = legComplexEventPriceBoundaryMethod;
}

LegComplexEventPriceBoundaryMethod.prototype.value = function () {
  return this.message;
};

LegComplexEventPriceBoundaryMethod.Tag = '2229';

LegComplexEventPriceBoundaryMethod.Type = 'INT';

module.exports = LegComplexEventPriceBoundaryMethod;