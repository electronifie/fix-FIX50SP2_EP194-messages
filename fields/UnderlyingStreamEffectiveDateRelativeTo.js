var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateRelativeTo (underlyingStreamEffectiveDateRelativeTo) {
  this.message = underlyingStreamEffectiveDateRelativeTo;
}

UnderlyingStreamEffectiveDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateRelativeTo.Tag = '40060';

UnderlyingStreamEffectiveDateRelativeTo.Type = 'INT';

module.exports = UnderlyingStreamEffectiveDateRelativeTo;