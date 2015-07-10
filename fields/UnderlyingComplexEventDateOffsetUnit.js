var invert = require('invert-obj');

function UnderlyingComplexEventDateOffsetUnit (underlyingComplexEventDateOffsetUnit) {
  this.message = underlyingComplexEventDateOffsetUnit;
}

UnderlyingComplexEventDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDateOffsetUnit.Tag = '41742';

UnderlyingComplexEventDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingComplexEventDateOffsetUnit;