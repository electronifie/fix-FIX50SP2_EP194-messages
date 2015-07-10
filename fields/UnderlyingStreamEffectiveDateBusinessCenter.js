var invert = require('invert-obj');

function UnderlyingStreamEffectiveDateBusinessCenter (underlyingStreamEffectiveDateBusinessCenter) {
  this.message = underlyingStreamEffectiveDateBusinessCenter;
}

UnderlyingStreamEffectiveDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingStreamEffectiveDateBusinessCenter.Tag = '40059';

UnderlyingStreamEffectiveDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingStreamEffectiveDateBusinessCenter;