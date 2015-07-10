var invert = require('invert-obj');

function LegStreamEffectiveDateAdjusted (legStreamEffectiveDateAdjusted) {
  this.message = legStreamEffectiveDateAdjusted;
}

LegStreamEffectiveDateAdjusted.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateAdjusted.Tag = '40256';

LegStreamEffectiveDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamEffectiveDateAdjusted;