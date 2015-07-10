var invert = require('invert-obj');

function NoComplexEventDateBusinessCenters (noComplexEventDateBusinessCenters) {
  this.message = noComplexEventDateBusinessCenters;
}

NoComplexEventDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoComplexEventDateBusinessCenters.Tag = '41018';

NoComplexEventDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoComplexEventDateBusinessCenters;