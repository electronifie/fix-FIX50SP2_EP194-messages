var invert = require('invert-obj');

function NoLegStreamEffectiveDateBusinessCenters (noLegStreamEffectiveDateBusinessCenters) {
  this.message = noLegStreamEffectiveDateBusinessCenters;
}

NoLegStreamEffectiveDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegStreamEffectiveDateBusinessCenters.Tag = '40942';

NoLegStreamEffectiveDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegStreamEffectiveDateBusinessCenters;