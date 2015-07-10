var invert = require('invert-obj');

function LegStreamEffectiveDateOffsetPeriod (legStreamEffectiveDateOffsetPeriod) {
  this.message = legStreamEffectiveDateOffsetPeriod;
}

LegStreamEffectiveDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateOffsetPeriod.Tag = '40253';

LegStreamEffectiveDateOffsetPeriod.Type = 'INT';

module.exports = LegStreamEffectiveDateOffsetPeriod;