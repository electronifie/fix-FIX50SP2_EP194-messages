var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateAdjusted (underlyingStreamEffectiveDateAdjusted) {
  this.message = underlyingStreamEffectiveDateAdjusted;
}

UnderlyingStreamEffectiveDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateAdjusted.Tag = '40064';

UnderlyingStreamEffectiveDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamEffectiveDateAdjusted;