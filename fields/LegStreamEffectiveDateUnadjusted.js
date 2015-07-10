var invert = require('invert-obj');

function LegStreamEffectiveDateUnadjusted (legStreamEffectiveDateUnadjusted) {
  this.message = legStreamEffectiveDateUnadjusted;
}

LegStreamEffectiveDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateUnadjusted.Tag = '40249';

LegStreamEffectiveDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamEffectiveDateUnadjusted;