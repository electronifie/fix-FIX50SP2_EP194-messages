var invert = require('invert-obj');

function NoStreamEffectiveBusinessCenters (noStreamEffectiveBusinessCenters) {
  this.message = noStreamEffectiveBusinessCenters;
}

NoStreamEffectiveBusinessCenters.prototype.value = function () {
  return this.message;
};

NoStreamEffectiveBusinessCenters.Tag = '40960';

NoStreamEffectiveBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoStreamEffectiveBusinessCenters;