var invert = require('invert-obj');

function StreamEffectiveDateUnadjusted (streamEffectiveDateUnadjusted) {
  this.message = streamEffectiveDateUnadjusted;
}

StreamEffectiveDateUnadjusted.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateUnadjusted.Tag = '40907';

StreamEffectiveDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = StreamEffectiveDateUnadjusted;