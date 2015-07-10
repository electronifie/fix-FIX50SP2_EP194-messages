var invert = require('invert-obj');

function ComplexEventPriceBoundaryPrecision (complexEventPriceBoundaryPrecision) {
  this.message = complexEventPriceBoundaryPrecision;
}

ComplexEventPriceBoundaryPrecision.prototype.value = function () {
  return this.message;
};

ComplexEventPriceBoundaryPrecision.Tag = '1488';

ComplexEventPriceBoundaryPrecision.Type = 'PERCENTAGE';

module.exports = ComplexEventPriceBoundaryPrecision;