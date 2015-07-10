var invert = require('invert-obj');

function LegStreamEffectiveDateOffsetUnit (legStreamEffectiveDateOffsetUnit) {
  this.message = legStreamEffectiveDateOffsetUnit;
}

LegStreamEffectiveDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateOffsetUnit.Tag = '40254';

LegStreamEffectiveDateOffsetUnit.Type = 'STRING';

module.exports = LegStreamEffectiveDateOffsetUnit;