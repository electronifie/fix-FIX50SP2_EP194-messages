var invert = require('invert-obj');

function NoLegBusinessCenters (noLegBusinessCenters) {
  this.message = noLegBusinessCenters;
}

NoLegBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegBusinessCenters.Tag = '40923';

NoLegBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegBusinessCenters;