var invert = require('invert-obj');

function LegStreamEffectiveDateBusinessCenter (legStreamEffectiveDateBusinessCenter) {
  this.message = legStreamEffectiveDateBusinessCenter;
}

LegStreamEffectiveDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegStreamEffectiveDateBusinessCenter.Tag = '40251';

LegStreamEffectiveDateBusinessCenter.Type = 'STRING';

module.exports = LegStreamEffectiveDateBusinessCenter;