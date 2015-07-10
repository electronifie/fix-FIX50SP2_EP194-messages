var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateOffsetDayType (underlyingStreamEffectiveDateOffsetDayType) {
  this.message = underlyingStreamEffectiveDateOffsetDayType;
}

UnderlyingStreamEffectiveDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateOffsetDayType.Tag = '40063';

UnderlyingStreamEffectiveDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingStreamEffectiveDateOffsetDayType;