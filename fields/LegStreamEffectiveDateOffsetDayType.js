var invert = require('invert-obj');

function LegStreamEffectiveDateOffsetDayType (legStreamEffectiveDateOffsetDayType) {
  this.message = legStreamEffectiveDateOffsetDayType;
}

LegStreamEffectiveDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateOffsetDayType.Tag = '40255';

LegStreamEffectiveDateOffsetDayType.Type = 'INT';

module.exports = LegStreamEffectiveDateOffsetDayType;