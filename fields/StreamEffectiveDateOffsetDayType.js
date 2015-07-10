var invert = require('invert-obj');

function StreamEffectiveDateOffsetDayType (streamEffectiveDateOffsetDayType) {
  this.message = streamEffectiveDateOffsetDayType;
}

StreamEffectiveDateOffsetDayType.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateOffsetDayType.Tag = '40913';

StreamEffectiveDateOffsetDayType.Type = 'INT';

module.exports = StreamEffectiveDateOffsetDayType;