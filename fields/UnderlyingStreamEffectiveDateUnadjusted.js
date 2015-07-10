var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateUnadjusted (underlyingStreamEffectiveDateUnadjusted) {
  this.message = underlyingStreamEffectiveDateUnadjusted;
}

UnderlyingStreamEffectiveDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateUnadjusted.Tag = '40057';

UnderlyingStreamEffectiveDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamEffectiveDateUnadjusted;