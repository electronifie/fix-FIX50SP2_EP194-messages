var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateOffsetPeriod (underlyingStreamEffectiveDateOffsetPeriod) {
  this.message = underlyingStreamEffectiveDateOffsetPeriod;
}

UnderlyingStreamEffectiveDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateOffsetPeriod.Tag = '40061';

UnderlyingStreamEffectiveDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingStreamEffectiveDateOffsetPeriod;