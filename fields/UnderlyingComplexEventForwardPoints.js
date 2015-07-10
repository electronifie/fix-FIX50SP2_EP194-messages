var invert = require('invert-obj');

function UnderlyingComplexEventForwardPoints (underlyingComplexEventForwardPoints) {
  this.message = underlyingComplexEventForwardPoints;
}

UnderlyingComplexEventForwardPoints.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventForwardPoints.Tag = '2420';

UnderlyingComplexEventForwardPoints.Type = 'PRICEOFFSET';

module.exports = UnderlyingComplexEventForwardPoints;