var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateBusinessDayConvention (underlyingStreamEffectiveDateBusinessDayConvention) {
  this.message = underlyingStreamEffectiveDateBusinessDayConvention;
}

UnderlyingStreamEffectiveDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateBusinessDayConvention.Tag = '40058';

UnderlyingStreamEffectiveDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingStreamEffectiveDateBusinessDayConvention;