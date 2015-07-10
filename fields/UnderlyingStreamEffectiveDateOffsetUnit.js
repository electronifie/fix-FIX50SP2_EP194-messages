var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateOffsetUnit (underlyingStreamEffectiveDateOffsetUnit) {
  this.message = underlyingStreamEffectiveDateOffsetUnit;
}

UnderlyingStreamEffectiveDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateOffsetUnit.Tag = '40062';

UnderlyingStreamEffectiveDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingStreamEffectiveDateOffsetUnit;