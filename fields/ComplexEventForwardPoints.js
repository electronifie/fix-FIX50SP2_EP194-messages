var invert = require('invert-obj');

function ComplexEventForwardPoints (complexEventForwardPoints) {
  this.message = complexEventForwardPoints;
}

ComplexEventForwardPoints.prototype.value = function () {
  return this.message;
};

ComplexEventForwardPoints.Tag = '2408';

ComplexEventForwardPoints.Type = 'PRICEOFFSET';

module.exports = ComplexEventForwardPoints;