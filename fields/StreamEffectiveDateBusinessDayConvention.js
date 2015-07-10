var invert = require('invert-obj');

function StreamEffectiveDateBusinessDayConvention (streamEffectiveDateBusinessDayConvention) {
  this.message = streamEffectiveDateBusinessDayConvention;
}

StreamEffectiveDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateBusinessDayConvention.Tag = '40908';

StreamEffectiveDateBusinessDayConvention.Type = 'INT';

module.exports = StreamEffectiveDateBusinessDayConvention;