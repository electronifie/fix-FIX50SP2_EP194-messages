var invert = require('invert-obj');

function StreamEffectiveDateOffsetPeriod (streamEffectiveDateOffsetPeriod) {
  this.message = streamEffectiveDateOffsetPeriod;
}

StreamEffectiveDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

StreamEffectiveDateOffsetPeriod.Tag = '40911';

StreamEffectiveDateOffsetPeriod.Type = 'INT';

module.exports = StreamEffectiveDateOffsetPeriod;