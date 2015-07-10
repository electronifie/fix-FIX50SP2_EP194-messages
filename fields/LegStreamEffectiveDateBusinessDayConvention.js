var invert = require('invert-obj');

function LegStreamEffectiveDateBusinessDayConvention (legStreamEffectiveDateBusinessDayConvention) {
  this.message = legStreamEffectiveDateBusinessDayConvention;
}

LegStreamEffectiveDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateBusinessDayConvention.Tag = '40250';

LegStreamEffectiveDateBusinessDayConvention.Type = 'INT';

module.exports = LegStreamEffectiveDateBusinessDayConvention;