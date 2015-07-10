var invert = require('invert-obj');

function UnderlyingComplexEventPriceBoundaryMethod (underlyingComplexEventPriceBoundaryMethod) {
  this.message = underlyingComplexEventPriceBoundaryMethod;
}

UnderlyingComplexEventPriceBoundaryMethod.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPriceBoundaryMethod.Tag = '2049';

UnderlyingComplexEventPriceBoundaryMethod.Type = 'INT';

module.exports = UnderlyingComplexEventPriceBoundaryMethod;