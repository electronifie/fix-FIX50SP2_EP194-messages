var invert = require('invert-obj');

function UnderlyingStrikePriceBoundaryMethod (underlyingStrikePriceBoundaryMethod) {
  this.message = underlyingStrikePriceBoundaryMethod;
}

UnderlyingStrikePriceBoundaryMethod.prototype.value = function () {
  return this.message;
};

UnderlyingStrikePriceBoundaryMethod.Tag = '2024';

UnderlyingStrikePriceBoundaryMethod.Type = 'INT';

module.exports = UnderlyingStrikePriceBoundaryMethod;