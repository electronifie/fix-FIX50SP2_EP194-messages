var invert = require('invert-obj');

function LegStrikePriceBoundaryMethod (legStrikePriceBoundaryMethod) {
  this.message = legStrikePriceBoundaryMethod;
}

LegStrikePriceBoundaryMethod.prototype.value = function () {
  return this.message;
};

LegStrikePriceBoundaryMethod.Tag = '2187';

LegStrikePriceBoundaryMethod.Type = 'INT';

module.exports = LegStrikePriceBoundaryMethod;