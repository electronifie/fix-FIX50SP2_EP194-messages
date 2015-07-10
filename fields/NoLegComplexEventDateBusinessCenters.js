var invert = require('invert-obj');

function NoLegComplexEventDateBusinessCenters (noLegComplexEventDateBusinessCenters) {
  this.message = noLegComplexEventDateBusinessCenters;
}

NoLegComplexEventDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegComplexEventDateBusinessCenters.Tag = '41387';

NoLegComplexEventDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegComplexEventDateBusinessCenters;