var invert = require('invert-obj');

function StreamEffectiveDateAdjusted (streamEffectiveDateAdjusted) {
  this.message = streamEffectiveDateAdjusted;
}

StreamEffectiveDateAdjusted.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateAdjusted.Tag = '40914';

StreamEffectiveDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = StreamEffectiveDateAdjusted;