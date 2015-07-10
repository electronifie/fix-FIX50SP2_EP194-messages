var invert = require('invert-obj');

function StreamEffectiveDateOffsetUnit (streamEffectiveDateOffsetUnit) {
  this.message = streamEffectiveDateOffsetUnit;
}

StreamEffectiveDateOffsetUnit.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateOffsetUnit.Tag = '40912';

StreamEffectiveDateOffsetUnit.Type = 'STRING';

module.exports = StreamEffectiveDateOffsetUnit;